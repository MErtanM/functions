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

// ----------funtion tanimlama yontemi

// 1 ----------funtion declaration

function calcAge(birthyear){
    
        //const age =2021 - birthyear
       // return age
       return 2021 - birthyear
}

console.log(calcAge(1997))


// 2 ----Function Expression code

const addition = function(a, b){
        return a + b        
}
const total =addition(1965, 1612775)
console.log(total)

// 3 -------Arrow Function

const calcAge2 = birthYear => 2021 -birthYear
console.log(calcAge(2000))

const canDrive = birthYear =>{
        const age = 2021 - birthYear
        const allowed = 18 - age
        return `You can drive ${allowed} year later`

}
const result = canDrive(2006)
console.log(result)

function hipotenus (a, b){
const firstValue = exponentValue(a) 
const secondValue = exponentValue(b) 
const result = (firstValue + secondValue) ** (0.5)
return result
        
}
function exponentValue(value){
        return value ** 2    // degerin 2. kuvveti(karesi vb)
}
const hipoResult = hipotenus (7, 24)
console.log(hipoResult)

/* 

//--------- ortalama alma fonksiyonu yaziniz
// ortalamalari karsilastirma fonksiyonu yaziniz
data dolphin score 96 108 89
function avrDolp(a, b, c) {

        const dolpAvr = (a+b+c)/3
        return dolpAvr
}
console.log(avrDolp(96,108,89));
        function avrKoal(a, b, c){
                const KoalAvr =(a+b+c)/3
                return KoalAvr
        }
        console.log(avrKoal(88,91,110));

        */

        function average (a, b, c) {
                return( a + b + c) / 3
        }

        const avgDolphin = average(96, 108, 89)
        console.log(avgDolphin)
        const avgKoala = average(88, 91, 110) 
        console.log(avgKoala)

        function findWinner(team1, team2){
if (team1 > team2){
        return `The winner is Dolphin`
}else{
        return `The winner is Koala`
        }

        }

        console.log(findWinner(avgDolphin, avgKoala))

