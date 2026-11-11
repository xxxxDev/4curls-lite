# Security

## What 4cUrls Lite can see and do

4cUrls Lite has no server and no analytics. It reads the address of the current page inside your browser, and it doesn't store it or send it anywhere.

- **The address of the current page.** When you click the icon, the extension reads the address and puts it on your clipboard. It stays on your device.
- **The clipboard.** The extension only writes to it, and only after you click the icon. It never reads it.
- **Network.** The extension makes no network requests of its own.
- **Run on all sites.** A small script runs on the pages you open, because copying to the clipboard has to happen inside the page. It waits for your click and does nothing else.

It asks for no other permissions, and it loads no code from outside the package.

## Keep in mind

The copied address is the whole address. 4cUrls Lite removes nothing from it, so a tracking parameter or a token in a sign-in link is copied too. Check a link before you share it.

## Privacy

Everything above happens on your device. For questions about privacy, email [support@v-ax.com](mailto:support@v-ax.com).

## Reporting a vulnerability

Please do not open a public issue for a security problem. Email [support@v-ax.com](mailto:support@v-ax.com) instead. You can also use GitHub's **Report a vulnerability** button on this repository.

Include 4cUrls Lite, the version or commit, the relevant platform, minimal steps to reproduce, and the expected and observed results. Use fictional data where possible and redact sensitive information from errors or screenshots.

Do not send passwords, tokens, private keys, account data, or raw private logs. Include only the information needed to reproduce the problem.

For ordinary usage questions and non-sensitive bugs, use this repository's issue tracker.
