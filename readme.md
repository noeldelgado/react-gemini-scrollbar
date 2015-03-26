# react-gemini-scrollbar

React component for creating custom scrollbars with native scrolling using [gemini-scrollbar](https://github.com/noeldelgado/gemini-scrollbar).

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

### Props
* `autoshow`: show scrollbars upon hovering


### Customize

you can change the styles of the scrollbars via CSS. Ex:

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
.gm-scrollbar .thumb::after {
  background-color: rebeccapurple;
}

/* scrollbar thumb :hover */
.gm-scrollbar .thumb:hover::after {
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
.my-awesome-scrollbar .gm-scrollbar .thumb::after {...}
```
