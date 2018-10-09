
import { fw01, fw02, fw03, fw04, fw08, fw09, fw11 } from './images';

let images = [fw01, fw02, fw03, fw04, fw08, fw09, fw11];

function fireworkCreator(){
  let fireworksArr = [];

  images.forEach(function(element){
    let fireworkObj = {
      xcoord: Math.random() * 600,
      ycoord: Math.random() * 600,
      imageString: ""
    };
    fireworkObj.imageString = element;
    fireworksArr.push(fireworkObj);
  });
  return fireworksArr;
}
export default fireworkCreator;
