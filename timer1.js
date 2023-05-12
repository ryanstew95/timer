const data = process.argv.slice(2);
let numbers = data.filter(number => {
  return number > 0;
});

const timer = function() {
  for (const num of numbers) {
    setTimeout(() => {
      console.log('beep');
      return process.stdout.write('\x07');
    }, num * 1000);
  }
};

timer(numbers);



// Example usage:
// node timer1.js 10 3 5 15 9