var expect = function(val) {
    return {
        toBe: function(val2){
            if(val === val2) return true;
            throw new Error ("Not Equal");
        },
        notToBe: function(val2){
            if(val !== val2) return true;
            throw new Error("Equal");
        }
    }
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
const a = expect(5); 
console.log(a.toBe(5)); // true
console.log(a.notToBe(10)); // true
console.log(a.notToBe(5)); // Throws "Equal"


// In JavaScript, throw new Error() is used to intentionally trigger an error when something unexpected happens in the code.
