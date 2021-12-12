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