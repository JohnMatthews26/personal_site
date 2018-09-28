
import * as createjs from 'createjs-easeljs';
import { fw01, fw02, fw03, fw04, fw08, fw09, fw11 } from './images';

let images = [fw01, fw02, fw03, fw04, fw08, fw09, fw11];
let singleImage = images[Math.floor(Math.random(0,6))];
let firework = {
  xcoord: Math.random() * 600,
  ycoord: Math.random() * 600,
  images: [fw01, fw02, fw03, fw04, fw08, fw09, fw11]
};
