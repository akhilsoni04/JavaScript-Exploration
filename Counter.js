var createCounter = function(n){
    return function(){
        let m = n;
        n++;
        return m;
    }
}
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
console.log(counter());

//here is count increase by 1 we are changed value of n which is currently 10