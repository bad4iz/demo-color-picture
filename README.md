# demo npm package [color-picture](https://www.npmjs.com/package/color-picture)

![](https://travis-ci.org/bad4iz/demo-color-picture.svg?branch=master)
![](https://img.shields.io/npm/v/color-picture.svg)
![](https://img.shields.io/npm/dt/color-picture.svg)


![](https://img.shields.io/github/commit-activity/m/bad4iz/demo-color-picture.svg)
![](https://img.shields.io/github/last-commit/bad4iz/demo-color-picture.svg)

![](https://img.shields.io/github/license/bad4iz/demo-color-picture.svg)
install
```
yarn add color-picture
```

// or

```
npm i --save color-picture
```

use
```javascript
import { getAverageRGBA } from 'color-picture';
 
 
const img = document.querySelector('img');
const backgr = getAverageRGBA(img);
document.body.style.backgroundColor = backgr;
```
