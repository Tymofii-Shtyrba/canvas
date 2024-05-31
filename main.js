const canvas = document.getElementById('canvas');
const figureWidht = document.getElementById('width');
const figureHeight = document.getElementById('height');
const button = document.getElementById('draw');
const clearButton = document.getElementById('clear');

const ctx = canvas.getContext('2d');

clearButton.addEventListener('click', (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  drawsTriangles(canvas, ctx, figureHeight.valueAsNumber, figureWidht.valueAsNumber);
});

//function drawPattern(ctx, width, height, step) {
//  ctx.beginPath()
//
//  for (let i = 0; i < width; i += step) {
//    ctx.moveTo(i, height);
//    ctx.lineTo(i + step, 0);
//  }
//
//  ctx.stroke();
//}

//drawPattern(canvas.width, canvas.height, 10);



function drawsTriangles(canvas, context, vLeg, hLeg) {

  const { width, height} = canvas;

  context.beginPath()

  //each iteration the loop draw on row of shapes 
  for (let row = 0; row < height / vLeg; row++) {
    // each iteration the loop draw on shape
    for (let column = 0; column < width / hLeg; column++) {
      //calculates the first point
      context.moveTo(hLeg * column, row * vLeg);
      //calculates the second point
      context.lineTo(hLeg * column + hLeg, row * vLeg + vLeg);
      //calculates the third point
      context.lineTo(hLeg * column, row * vLeg + vLeg);
    }
  }

  context.fill();
}
