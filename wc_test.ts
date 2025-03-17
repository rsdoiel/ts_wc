import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import { word_count } from "./wc.ts";

Deno.test("word_count: counts lines, words, and characters correctly", () => {
  const text = "Hello world!\nThis is a test.";
  const options = { lines: true, words: true, characters: true };

  // Redirect console.log to capture the output
  const originalLog = console.log;
  let capturedOutput = "";
  console.log = (message?: any) => {
    capturedOutput += message + "\n";
  };

  // Call the word_count function
  word_count(text, options);

  // Restore the original console.log
  console.log = originalLog;

  // Expected output: "2\t6\t23"
  const expectedOutput = "2\t6\t23\n";
  assertEquals(capturedOutput, expectedOutput);
});

Deno.test("word_count: counts only lines when specified", () => {
  const text = "One line.\nTwo lines.";
  const options = { lines: true, words: false, characters: false };

  // Redirect console.log to capture the output
  const originalLog = console.log;
  let capturedOutput = "";
  console.log = (message?: any) => {
    capturedOutput += message + "\n";
  };

  // Call the word_count function
  word_count(text, options);

  // Restore the original console.log
  console.log = originalLog;

  // Expected output: "2"
  const expectedOutput = "2\n";
  assertEquals(capturedOutput, expectedOutput);
});

Deno.test("word_count: counts only words when specified", () => {
  const text = "One two three four";
  const options = { lines: false, words: true, characters: false };

  // Redirect console.log to capture the output
  const originalLog = console.log;
  let capturedOutput = "";
  console.log = (message?: any) => {
    capturedOutput += message + "\n";
  };

  // Call the word_count function
  word_count(text, options);

  // Restore the original console.log
  console.log = originalLog;

  // Expected output: "4"
  const expectedOutput = "4\n";
  assertEquals(capturedOutput, expectedOutput);
});

Deno.test("word_count: counts only characters when specified", () => {
  const text = "Hello!";
  const options = { lines: false, words: false, characters: true };

  // Redirect console.log to capture the output
  const originalLog = console.log;
  let capturedOutput = "";
  console.log = (message?: any) => {
    capturedOutput += message + "\n";
  };

  // Call the word_count function
  word_count(text, options);

  // Restore the original console.log
  console.log = originalLog;

  // Expected output: "6"
  const expectedOutput = "6\n";
  assertEquals(capturedOutput, expectedOutput);
});
