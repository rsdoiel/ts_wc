Installation for development of **wc**
===========================================

**wc** This is an example of using Mistral Le Chat to recreate the POSIX &#x60;wc&#x60; command written in TypeScript. The full transcript is available at &lt;https://chat.mistral.ai/chat/e97f1834-4e60-451a-b317-adcc301dbf12&gt;.

Quick install with curl or irm
------------------------------

There is an experimental installer.sh script that can be run with the following command to install latest table release. This may work for macOS, Linux and if you’re using Windows with the Unix subsystem. This would be run from your shell (e.g. Terminal on macOS).

~~~shell
curl https://rsdoiel.github.io/wc/installer.sh | sh
~~~

This will install the programs included in wc in your `$HOME/bin` directory.

If you are running Windows 10 or 11 use the Powershell command below.

~~~ps1
irm https://rsdoiel.github.io//installer.ps1 | iex
~~~

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
make
make test
make install
~~~

