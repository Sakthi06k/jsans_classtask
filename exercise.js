
//1.for-each 

const places=["kerala","coimabatore","manali","canada"];
places.forEach(function(display){
    console.log(display);
})

//2.Map to create array and return square of nos.

const array=[2,3,4];
let square= array.map((num)=>num*num);
console.log(square);

//3.country names starts with "e"

const countries=["canada","egypt","england","estonia","german"];
let result = countries.filter(result=> result.startsWith("e"));
console.log(result);

//4.Strings separation

const array2=[1,"asdf",34,56,"let",89,"print"]
function getStringLists(...array2){
    let values=array2.filter(num=> typeof num=="string")
    console.log(values);
}
getStringLists(...array2);


//5.reduce()

const array3=["Estonia ","Finland ","Sweden ","Denmark ","Norway ","Iceland ","are ","north europian ","countries "];
function concat(string,string1){
    return string+string1;
}let final = array3.reduce(concat);
console.log(final);

//6.
var human = ["1.602*10^-19", "3.14", "9.8 m/s^2", "97.9 F","100 c"];
 
var e = human[0];
var PI= human[1];
var gravity = human[2];
var body_temp = human[3];
var water_boil=human[4];
 
console.log(e);
console.log(PI);
console.log(gravity);
console.log(body_temp);
console.log(water_boil);








