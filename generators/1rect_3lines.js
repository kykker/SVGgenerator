let utils = require('./saveFile');

const origin = 'M200 200';

let rawSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" >
  
<path d="${origin} L0 190 " fill="transparent" stroke="magenta"/>
<path d="${origin} L0 260  " fill="transparent" stroke="blue"/>
<path d="${origin} L400 195 " fill="transparent" stroke="darkgrey"/>
<path d="${origin} L200 500 " fill="transparent" stroke="darkred"/>
<path d="${origin} L200 180 " fill="transparent" stroke="orange"/>
<path d="${origin} L200 20 " fill="transparent" stroke="orange"/>

<rect x="0" y="20" width="400" height="100" 
     stroke="/27f5e566" stroke-opacity="/0.8" 
     fill="purple" fill-opacity="0.1" />

<rect x="0" y="180" width="400" height="100" 
     stroke="/27f5e566" stroke-opacity="0.8" 
     fill="purple" fill-opacity="0.1" />

<rect x="0" y="340" width="400" height="100" 
     stroke="/27f5e566" stroke-opacity="0.8" 
     fill="purple" fill-opacity="0.1" />
</svg>`

console.log(rawSVG)
const path = '../img_sample/test.svg';

utils.saveFile( path, rawSVG );
