
function makeLine(size, character = '#') {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += character;
  }
  return line;
}
console.log(makeLine(5, '*'));



console.log('Make Square:');
function makeSquare(size, character = '#') {
    let square = '';
  
    for (let i = 0; i < size; i++) {
      square += makeLine(size, character);
      if (i < size - 1) {
        square += '\n';
      }
    }
  
    return square;
  }
console.log(makeSquare(5, '*'));

console.log('Make Rectangle:');
function makeRectangle(width, height, character = '#') {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width, character) + '\n');
  }
  return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3, '*'));

console.log('Make Square use Ractangle method:');
function makeRectangle(width, height, character = '#') {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width, character) + '\n');
  }
  return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 5, '*'));


console.log('Make Downward Stairs:');
function makeDownwardStairs(height, character = '#') {
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += (makeLine(i+1, character) + '\n');
  }
  return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5, '*'));

console.log('Make Spase Line:');
function makeSpaceLine(numSpaces, numChars, character = '*') {
  let spaces = ' '.repeat(numSpaces);
  let chars = character.repeat(numChars);
  let line = spaces + chars + spaces;
  return line;
}
console.log(makeSpaceLine(3, 5, '*'));

console.log('Make Triangle:');
function makeIsoscelesTriangle(height, character = '*') {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5, '*'));

console.log('Make Diamonds:');
function makeDiamond(height, character = '*') {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1, character) + '\n');
  }
  for (let i = height -2; i >= 0; i--) {
    triangle += (makeSpaceLine(height - i - 1, 2*i + 1, character) + '\n');
  }
  return triangle.slice(0, -1);
}
console.log(makeDiamond(5, '*'));