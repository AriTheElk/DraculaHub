<p align="center">
    <img width="256" src="https://raw.githubusercontent.com/garetmckinley/DraculaHub/master/draculacat.svg?sanitize=true" alt="Dracula Cat" id="dracula-darken-50"/>
    <h1 align="center">DraculaHub</h1>
</p>

<p align="center">
    <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/garetmckinley/DraculaHub?color=%23bd93f9&style=for-the-badge"/>
    <img alt="GitHub" src="https://img.shields.io/github/license/garetmckinley/DraculaHub?color=%23ff79c6&style=for-the-badge"/>
</p>

<img src="https://raw.githubusercontent.com/garetmckinley/DraculaHub/master/screenshot.png" alt="screenshot of GitHub with DraculaHub theme"/>

## Installation

DraculaHub is not yet in the Chrome App Store. To install, you must build and manually install the crx.

## Development

### Styling

// TODO: write styling structure overview

### Compiling

#### Compiling the Styles

If you want to compile the css a single time, use the `build` command:

```bash
yarn build
```

If you're working on the styles, I recommend using the `watch` command. This will recompile the styles every time you modify a file. If you have the extension installed unpacked (via developer mode), the extension will hot-reload the styles.

```bash
yarn watch
```

#### Compiling the Extension

```bash
yarn package
```

<a href="https://syntra.io"><img src="https://raw.githubusercontent.com/syntra/assets/master/syntra-sponsorship.svg?sanitize=true"/></a>
