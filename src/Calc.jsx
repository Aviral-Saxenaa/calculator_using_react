
import React from 'react';

function add(a,b){
        return(`Addition is ${a+b}` );
}

function sub(a,b){
        return(`Subtraction is ${a-b}` );
}

function multiply(a,b){
        let ans=(a*b).toFixed(2);
        return(`Multiplication is ${ans}` );
}

function division(a,b){
        let ans=(a/b).toFixed(2);
        return(`Division is ${ans}` );
}

export default add;
export {sub,multiply,division};