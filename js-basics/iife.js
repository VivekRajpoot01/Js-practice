// Immediately invoked Function Expressions (IIFE)

// immediatelty invoked
// global scope ke pollution se problem hoti kai bar us global 
// scope ke jo variables hai  uske pollution ko hatane ke liye hum iife
// ka use karte hai

(function chai(){    // named iife
    console.log(`DB Connected`);
}) ();  // -> for iife function we have to put semi-colon to stop it

// we can also defined function as
( (name) =>{     // simple iife
    console.log(`DB Two Connected ${name}`);
}) ("vivek");
