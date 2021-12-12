// piece of code that we can use multiple times

function myFirstFunction(){
        console.log("Hello World !")
} 

myFirstFunction() // call, execute, invoke
//myFirstFunction()
//myFirstFunction()
//myFirstFunction()
//myFirstFunction()


function juiceExtractor (fruit1, fruit2){
        const juice = `This is ${fruit1} and ${fruit2} juice.`
        return juice
        
        //console.log(juice)
        
}
console.log(juiceExtractor("apple", "orange"))
const myJuice = juiceExtractor("apple", "orange")
console.log(myJuice)

/*
function carFactory (car1, car2){
        const car = `This is ${car1} and ${car2} car.`
       console.log(car)
       return car
}
console.log(carFactory("mercedes", "opel"))  
const myCar =carFactory("mercedes", "opel")
console.log(myCar)
*/

// funtion tanimlama yontemi
// 1 funtion declaration

function calcAge(birthyear){
    
        //const age =2021 - birthyear
       // return age
       return 2021 - birthyear
}

console.log(calcAge(1997))


// 2 Function Expression code

const addition = function(a, b){
        return a + b        
}
const total =addition(1965, 1612775)
console.log(total)