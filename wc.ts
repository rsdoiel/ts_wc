import { parse } from "jsr:@std/cli/doc";
import { readTextFile } from "jsr:@std/fs/doc";
import { basename } from "jsr:@std/path/doc";

// Function to count lines, words, and characters in a given text
function countStats(text: string): { lines: number; words: number; chars: number } {
  const lines = text.split('\n').length - 1;
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  const chars = text.length;
  return { lines, words, chars };
}

async function main() {
  const { args } = Deno;
  const flags = parse(args, {
    boolean: ["l", "w", "c"],
    alias: { "lines": "l", "words": "w", "chars": "c" },
  });

  const files = flags._;

  if (files.length === 0) {
    // Read from standard input if no files are provided
    const text = await Deno.readTextFile(Deno.stdin);
    const stats = countStats(text);
    console.log(`${stats.lines} ${stats.words} ${stats.chars}`);
  } else {
    // Process each file
    for (const file of files) {
      const text = await readTextFile(file);
      const stats = countStats(text);
      console.log(`${stats.lines} ${stats.words} ${stats.chars} ${basename(file)}`);
    }
  }
}

if (import.meta.main) {
  main();
}
