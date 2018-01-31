/* eslint-env jest */

var stylelint = require('stylelint');

function getOptions(code, rules) {
  return {
    code: code,
    configBasedir: __dirname,
    config: {
      plugins: ['./index.js'],
      rules: rules
    }
  };
}

describe('stylelint-no-unsupported-browser-features', function() {
  describe('single browser', function() {
    it('should allow display:table for IE 8', function(done) {
      var code = 'div { display: table; }';
      var rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 8']
          }
        ]
      };
      var options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(function(result) {
          expect(result.errored).toBe(false);
          expect(JSON.parse(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(function(error) {
          return done(error);
        });
    });

    it('should disallow display:table for IE 6', function(done) {
      var code = 'div { display: table; }';
      var rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6']
          }
        ]
      };
      var options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(function(result) {
          expect(result.errored).toBe(true);
          expect(JSON.parse(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(function(error) {
          return done(error);
        });
    });
  });

  describe('multiple browsers', function() {
    it('should allow display:table for IE 8 and IE 9', function(done) {
      var code = 'div { display: table; }';
      var rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 8', 'IE 9']
          }
        ]
      };
      var options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(function(result) {
          expect(result.errored).toBe(false);
          expect(JSON.parse(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(function(error) {
          return done(error);
        });
    });

    it('should disallow display:table for IE 6 and IE 7', function(done) {
      var code = 'div { display: table; }';
      var rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6', 'IE 7']
          }
        ]
      };
      var options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(function(result) {
          expect(result.errored).toBe(true);
          expect(JSON.parse(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(function(error) {
          return done(error);
        });
    });
  });

  describe('ignore option', function() {
    it('should ignore a single property', function(done) {
      var code = 'div { display: flex; }';
      var rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6'],
            ignore: ['flexbox']
          }
        ]
      };
      var options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(function(result) {
          expect(result.errored).toBe(false);
          expect(JSON.parse(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(function(error) {
          return done(error);
        });
    });

    it('should ignore multiple properties', function(done) {
      var code = 'div { display: flex; } a { display: table; }';
      var rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: ['IE 6'],
            ignore: ['flexbox', 'css-table']
          }
        ]
      };
      var options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(function(result) {
          expect(result.errored).toBe(false);
          expect(JSON.parse(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(function(error) {
          return done(error);
        });
    });
  });

  describe('validate options', function() {
    it('should validate the browsers option', function(done) {
      var code = '';
      var rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            browsers: [1]
          }
        ]
      };
      var options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(function(result) {
          expect(result.errored).toBe(true);
          expect(JSON.parse(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(function(error) {
          return done(error);
        });
    });

    it('should validate the ignore option', function(done) {
      var code = '';
      var rules = {
        'plugin/no-unsupported-browser-features': [
          true,
          {
            ignore: [1]
          }
        ]
      };
      var options = getOptions(code, rules);

      return stylelint
        .lint(options)
        .then(function(result) {
          expect(result.errored).toBe(true);
          expect(JSON.parse(result.output)).toMatchSnapshot();
          return done();
        })
        .catch(function(error) {
          return done(error);
        });
    });
  });
});
