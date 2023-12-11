//Immediately Invoked Function Expresion (IIFE)  ->  IIFEs prevent pollution of the global JS scope.
//                                   ->   function that runs the moment it is invoked or called in the JavaScript event loop.
(function learn(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//   (For function definition)(execution call)

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Arpit');
