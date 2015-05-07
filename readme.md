# react-gemini-scrollbar
[![npm-image](https://img.shields.io/npm/v/react-gemini-scrollbar.svg?style=flat-square)](https://www.npmjs.com/package/react-gemini-scrollbar)

React component for creating custom overlay-scrollbars with native scrolling mechanism (using [gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar)).

## Installation

**NPM**

```sh
npm install react-gemini-scrollbar --save
```

## Usage

**JSX**

```js
var GeminiScrollbar = require('react-gemini-scrollbar');

<GeminiScrollbar>
    <h1>The content.<h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</GeminiScrollbar>
```

**LESS**
```less
@import (css) "node_modules/react-gemini-scrollbar/node_modules/gemini-scrollbar/gemini-scrollbar.css";
```

**CSS**
```css
@import url(node_modules/react-gemini-scrollbar/node_modules/gemini-scrollbar/gemini-scrollbar.css);
```

## Props
* `autoshow`: show scrollbars upon hovering


## Customization

You can change the styles of the scrollbars using CSS. Ex:

```css
/* override gemini-scrollbar default styles */

/* vertical scrollbar track */
.gm-scrollbar.-vertical {
  background-color: #f0f0f0
}

/* horizontal scrollbar track */
.gm-scrollbar.-horizontal {
  background-color: transparent;
}

/* scrollbar thumb */
.gm-scrollbar .thumb {
  background-color: rebeccapurple;
}
.gm-scrollbar .thumb:hover {
  background-color: fuchsia;
}
```

If you want to specify different scrollbar styles for your components, one
alternative is to pass a `className` to the component. Then you can use that
`className` as a namespace when writing your css. Ex:
```js
<GeminiScrollbar className='my-awesome-scrollbar'>...</GeminiScrollbar>
```

```css
.my-awesome-scrollbar .gm-scrollbar.-vertical {...}
.my-awesome-scrollbar .gm-scrollbar.-horizontal {...}
.my-awesome-scrollbar .gm-scrollbar .thumb {...}
```

# Build
You will need a global `babel` and run `npm run dist`.

## License
MIT © [Noel Delgado](http://pixelia.me/)
