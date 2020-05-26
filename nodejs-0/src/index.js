'use strict'

const fibonacci = () => {
    let array_fib = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 
        233, 377 ];
    return array_fib;
}

const isFibonnaci = (num) => {
    let valida = fibonacci();
    if (valida.includes(num)) {
        return true;
    } else {
        return false;    
    }
    

}

module.exports = {
    fibonacci,
    isFibonnaci
}
