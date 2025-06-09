export function dedent(strings: TemplateStringsArray, ...values: any[]): string {
  // 1. Interleave the literals with the placeholders
  let fullString = '';
  for (let i = 0; i < strings.length; i++) {
    fullString += strings[i];
    if (i < values.length) {
      fullString += values[i];
    }
  }

  // 2. Split the string into lines
  const lines = fullString.split('\n');

  // 3. Find the minimum indentation
  let minIndent: number | null = null;

  for (const line of lines) {
    // Ignore blank lines for indent calculation
    if (line.trim() === '') {
      continue;
    }

    const match = line.match(/^(\s*)/);
    if (match) {
      const indentLength = match[1]?.length ?? 0;
      if (minIndent === null || indentLength < minIndent) {
        minIndent = indentLength;
      }
    }
  }

  // 4. Remove the common leading whitespace
  if (minIndent !== null && minIndent > 0) {
    return lines
      .map((line) => {
        // Also remove it from lines that were initially all whitespace
        // if they had at least that much whitespace.
        if (line.length >= minIndent && line.slice(0, minIndent).trim() === '') {
          return line.substring(minIndent);
        }
        return line;
      })
      .join('\n');
  }

  // If no common indentation or it's zero, return the original (joined) string
  return fullString;
}

// wrap, breaking on spaces, to fit the text within the given width
export function wrapToWidth(str: string, width = 80) {
  const words = str.split(' ');
  const lines = [];
  let currentLine = '';
  let currentLineLength = 0;
  for (const word of words) {
    const wordLength = word.length;
    if (currentLineLength + wordLength + 1 > width) {
      lines.push(currentLine);
      currentLine = word;
      currentLineLength = wordLength;
    } else {
      currentLine += ' ' + word;
      currentLineLength += 1 + wordLength;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines.join('\n');
}
