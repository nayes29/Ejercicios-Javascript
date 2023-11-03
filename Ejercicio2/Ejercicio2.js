/*Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]  
*/



let arr2 = [1, 2, 4, 5];
function multiplica(){
    let resultado = [];
    for(numero of arr2){
        resultado.push(numero * 2);
    }
    return resultado;
}
console.log(multiplica());
