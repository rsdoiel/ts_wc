Installation for development of **wc**
===========================================

**wc** This is an example of using Mistral Le Chat to recreate the POSIX &#x60;wc&#x60; command written in TypeScript. The full transcript is available at &lt;https://chat.mistral.ai/chat/e97f1834-4e60-451a-b317-adcc301dbf12&gt;.

Installing from source
----------------------

### Required software

- Deno 2.2

### Steps

1. git clone https://github.com/rsdoiel/wc
2. Change directory into the `wc` directory
3. Make to build, test and install

~~~shell
git clone https://github.com/rsdoiel/wc
cd wc
deno check wc.ts
deno test wc_test.ts
deno compile wc.ts
~~~

