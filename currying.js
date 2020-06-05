// using bind

const multiply = (x, y) => {
  console.log(x * y);
  return x * y;
};

const multiplyby2 = multiply.bind(this, 2);
multiplyby2(10);

const multiplyby5 = multiply.bind(this, 5);
multiplyby5(10);

// using closures

const multiplyClosures = (x) => {
  return (y) => {
    console.log(x * y);
  };
};

const multiplyby2 = multiplyClosures(2);
multiplyby2(10);

const multiplyby5 = multiplyClosures(5);
multiplyby5(20);
