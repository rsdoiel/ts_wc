import { parseArgs } from "jsr:@std/cli/parse-args";
import { basename } from "jsr:@std/path";

// Define the options for the word_count function
interface WordCountOptions {
  lines: boolean;
  words: boolean;
  characters: boolean;
}

// Function to count lines, words, and characters in a given text
export function word_count(text: string, options: WordCountOptions): void {
  const lines = text.split('\n').length;
  const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
  const characters = text.replace(/\s+/g, '').length; // Exclude spaces and newline characters

  const results = [];
  if (options.lines) results.push(`${lines}`);
  if (options.words) results.push(`${words}`);
  if (options.characters) results.push(`${characters}`);

  console.log(results.join('\t'));
}

// Main function to process command-line arguments and call word_count
async function main() {
  const args = parseArgs(Deno.args, {
    boolean: ["l", "w", "m"],
    alias: { "l": "lines", "w": "words", "m": "characters" },
    default: { lines: false, words: false, characters: false }
  });

  const options: WordCountOptions = {
    lines: args.lines as boolean,
    words: args.words as boolean,
    characters: args.characters as boolean,
  };

  // If no options are provided, default to counting lines, words, and characters
  if (!options.lines && !options.words && !options.characters) {
    options.lines = options.words = options.characters = true;
  }

  // Read from standard input if no file is provided
  if (args._.length === 0) {
    const buffer = new Uint8Array(1024);
    let text = "";
    while (true) {
      const n = await Deno.stdin.read(buffer);
      if (n === null) break;
      text += new TextDecoder().decode(buffer.subarray(0, n));
    }
    word_count(text, options);
  } else {
    // Read from each file provided as an argument
    for (const file of args._) {
      if (typeof file === "string") {
        const text = await Deno.readTextFile(file);
        word_count(text, options);
        console.log(` ${basename(file)}`);
      }
    }
  }
}

// Run the main function if this module is the main entry point
if (import.meta.main) {
  main().catch(console.error);
}
