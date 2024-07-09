// // day 5 

// Type Coercion Vs Type Conversion 

// 1. Coercion : to change dataType forcefully automatically by interpreter against the developer's will to prevent error.
    // -try to change any data into string (1st priority) then after number and then Boolean.

    // - try to change to string 
    console.log("Ram" + 1 + true);
    console.log("GodMode" + undefined + null);
    console.log("Ram" + 5);  // output :: Ram5


    // since there is - operator we need number so, try to change to number
    console.log("Ram" - 5);  // output :: NaN => Not a Number  :: Except "+" all give mostly NaN
    console.log(typeof NaN) ;  // Data type of NaN is number.
    console.log("Ram"/"Shyam");  // output :: NaN => Not a Number




// 2. Conversion : change of dataType with developer's will. 