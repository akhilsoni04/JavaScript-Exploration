var compose = function(functions){
    return function(x){
        for(let i=functions.length-1; i>=0; i--){
            x = functions[i](x);
        }
        return x;
    }
}

const fn = compose([x=>x+1, x=> 2*x])
console.log(fn(4));

//Length of the array 2
// functions[i] refers to the current function in the array (functions) at index i.

// functions[i](x) calls that function, passing x as an argument.