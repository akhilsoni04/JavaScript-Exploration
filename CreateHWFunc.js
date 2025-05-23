var createHelloWorld = function(){
    return function(...args){
        return "Hello World";
    }
}
const f = createHelloWorld();
console.log(f());

//...args is a spread operator that helps to take multiple arguments
