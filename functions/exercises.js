
function makeLine(size) {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += '#';
  }
  return line;
}
console.log(makeLine(5));



console.log('Make Square:');
function makeSquare(size) {
    let square = '';
  
    for (let i = 0; i < size; i++) {
      square += makeLine(size);
      if (i < size - 1) {
        square += '\n';
      }
    }
  
    return square;
  }
console.log(makeSquare(5));

console.log('Make Rectangle:');
function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));

console.log('Make Square use Ractangle method:');
function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 5));


console.log('Make Downward Stairs:');
function makeDownwardStairs(height) {
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i+1) + '\n');
  }
  return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5));

console.log('Make Spase Line:');
function makeSpaceLine(numSpaces, numChars) {
  let spaces = ' '.repeat(numSpaces);
  let chars = '#'.repeat(numChars);
  let line = spaces + chars + spaces;
  return line;
}
console.log(makeSpaceLine(3, 5));

console.log('Make Triangle:');
function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

console.log('Make Diamonds:');
function makeDiamond(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  for (let i = height -2; i >= 0; i--) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}
console.log(makeDiamond(5));