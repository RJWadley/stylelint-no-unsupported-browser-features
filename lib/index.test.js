/* eslint-env jest */

const stylelint = require('stylelint');
const deleteKeys = require('key-del');

function getOptions(code, rules) {
  return {
    code,
    configBasedir: __dirname,
    config: {
      plugins: ['./index.js'],
      rules
    }
  };
}

function parseResult(result) {
  const parsedResult = JSON.parse(result);

  if (parsedResult.length > 1) {
    throw Error('More than one result received');
  }

  return deleteKeys(parsedResult[0], ['source']);
}

describe('stylelint-no-unsupported-browser-features', () => {
  describe('single browser', () => {
    it('should allow display:table for IE 8', done => {
      const code = 'div { display: table; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 8']
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(false);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });

    it('should disallow rems for IE 9', done => {
      const code = 'div { width: 10rem; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 9']
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(true);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });

    it('should disallow display:table for IE 6', done => {
      const code = 'div { display: table; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6']
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(true);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });
  });

  describe('multiple browsers', () => {
    it('should allow display:table for IE 8 and IE 9', done => {
      const code = 'div { display: table; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 8', 'IE 9']
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(false);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });

    it('should disallow display:table for IE 6 and IE 7', done => {
      const code = 'div { display: table; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6', 'IE 7']
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(true);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });
  });

  describe('ignore option', () => {
    it('should ignore a single property', done => {
      const code = 'div { display: flex; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6'],
            ignore: ['flexbox']
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(false);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });

    it('should ignore multiple properties', done => {
      const code = 'div { display: flex; } a { display: table; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6'],
            ignore: ['flexbox', 'css-table']
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(false);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });
  });

  describe('ignorePartialSupport option', () => {
    it('should ignore a rule which only triggers partial support warnings', done => {
      const code = 'div { display: flex; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 11'],
            ignorePartialSupport: true
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(false);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });

    it('should remove the partial support warning for a rule with mixed support', done => {
      const code = 'div { width: 10rem; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6', 'IE 7', 'firefox 2', 'opera 10', 'IE 10'],
            ignorePartialSupport: true
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(true);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });

    it('should not ignore a rule which is fully unsupported', done => {
      const code = 'div { width: 10rem; }';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6'],
            ignorePartialSupport: true
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(true);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });
  });

  describe('validate options', () => {
    it('should validate the browsers option', done => {
      const code = '';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: [1]
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(true);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });

    it('should validate the ignore option', done => {
      const code = '';
      const rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            ignore: [1]
          }
        ]
      };
      const options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(result => {
          expect(result.errored).toBe(true);
          expect(parseResult(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(error => done(error));
    });
  });
});
