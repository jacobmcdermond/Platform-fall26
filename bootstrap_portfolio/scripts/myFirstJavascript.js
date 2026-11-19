//alert("Hello World");
var s = "hello!";
console.log("variable s is " + s);

function print3Ways() {
    alert("Hello World");
    console.log("Hello World");
    document.write("hello world");
} 

const a = [1,2,3,4,5];
function sumArray() {
    var sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }
    return sum;
}

function findMin() {
    var min = a[0];
    for(let i = 1; i < a.length; i++){
        if(a[i] < min) {
            min = a[i];
        }
    }
    return min;
}

function findMax() {
    var max = a[0];
    for(let i = 1; i < a.length; i++){
        if(a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

function average() {
    return sumArray()/a.length;
}

function funWithArrays() {
    document.write("The sum of the array is "+ sumArray()); 
    document.write("<br>The minimum element in the array is "+ findMin()); 
    document.write("<br>The maximum element in the array is "+ findMax()); 
    document. write("<br>The average of the elements in the array is " + average()) ;
}

function soManyFunctions(){
    console.log("SMF");
    plainOldFunction();
    firstFunction("Bob", callback);

}

const dog ={
    name:"Harry",
    type:"Pug",
    age: 2,
    tricks: ['roll over', 'sit', 'paw',],
    speak: function() {console.log("Woof!")}
};
console.log("My dog " +dog.name+ " is  " +dog.age+ " years old and can " + dog.tricks[1]);
dog.speak();


function callback(name){
    console.log("hello" + name);
}

function firstFunction(s, helloCallback){
    helloCallback(s);
}

function plainOldFunction(){
    console.log("inside pof");
    function nestedFunction(){
        console.log("inside nested function");
    }
    nestedFunction();
}

