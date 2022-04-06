
//Change var declarations to const
const ispnum = function(num) {
    //Delete unnecesary for loop
      if  (num % 2 === 0) {
          return false
      }else{
        return num > 1;
      }
};

const fibonacci = (num) => {
    if (num <= 1)return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

function nxtPrmFib(number) {
    let r = 0;
    let l = 1;
    while (true) {
        //cange var for let
        let fib = fibonacci(l);
        console.log('fib', fib, number);
        if (fib > number) {
            if (ispnum(fib)) {
                r = fib;
                break;
                } // else statement not necessary because the while loop stop when the condition is reached
            } else {
                l = l + 1;
                console.warn('bumping to', fib);
            }
    }
    console.warn('Next prime fib ', r);
}

nxtPrmFib(20);