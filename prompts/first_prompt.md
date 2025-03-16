I would like to implement a command line program in TypeScript and Deno 2.2. You should use the following standard Deno modules available on <https:/jsr.io>, the modules should use the `jsr:` prefix.

- `@std/fs` documented at <https://jsr.io/@std/fs/doc> for working with the file system
- `@std/path` documented at <https://jsr.io/@std/path/doc> for working with the file path
- `@std/text` documented at <https://jsr.io/@std/text/doc> for working with text
- `@std/cli` documented at <https://jsr.io/@std/cli/doc> to process command line parameters

You should use `Deno.readTextFile` to read data from a file, otherwise you should read from standard input.  The program needs to run on Windows 10 using command prompt or powershell.

The program implements the features you find in the POSIX tool called `wc` as documented on Wikipedia at https://en.wikipedia.org/wiki/Wc_(Unix),
