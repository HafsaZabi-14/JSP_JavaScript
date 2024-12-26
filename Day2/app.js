// function greet(name)
// {
//     console.log(`Hello Good Morning, ${name}`);
// }
// greet('wastefellows')

// function greet2(name)
// {
//     return (`Hello Good Morning, ${name}`);
// }

// let res = greet2(`JSpiders`);
// console.log(res)

// let sum = function(a,b)
// {
//     return a+b;
// }
// console.log(sum(5,10));

// let sum1 = () =>
// {
//     return a+b;
// }

// let sum2 = (a,b) =>
//     {
//         return a+b;
//     }

    // sum2 =(a,b)=> a+b
    // console.log(sum2(5,7))

    // // single parameter
    // let greet= name => `hello ${name}`;
    // console.log(greet('ram'))

    function add(a,b)
    {
        return a+b
    }  

    
    function subs(a,b)
    {
        return a-b
    }  

    
    function product(a,b)
    {
        return a*b
    }  

    
    function divide(a,b)
    {
        return a/b
    }  
    
    function calculator(a,b, operation)
    {
        return operation(a,b)
    }

    // let res = calculator(20,30, add)
    // let res = calculator(20,30, subs)
    // let res = calculator(20,30, product)
    let res = calculator(20,30, divide)
    console.log(res)

 

