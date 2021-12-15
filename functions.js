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
/*

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
*/
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
/*
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

*/

     /*
     QUESTION
     Find out if a given year is a “leap” year.
In the Gregorian calendar, three criteria must be taken into account to identify leap years:
1-The year must be evenly divisible by 4;
2-If the year can also be evenly divided by 100, it is not a leap year; unless...
3-The year is also evenly divisible by 400. Then it is a leap year.
According to these rules, the years 2000 and 2400 are leap years, while 1800, 1900, 2100, 2200, 2300, and 2500 are not the leap years.
Write a program that takes the year from user and gives output as “2020 is a leap year” or “2019 is not a leap year” .
    
      
    
     */
/*
const year =prompt("Enter a year: ")
        function leapYear (year){
                if ((year % 4 == 0 && year % 100 != 0) || year % 400== 0){
return `${year} is a leap year.`

        }else { 
                return`${year} is not a leap year.`
        }
        }
        leapYear()
        console.log(leapYear(year))
*/
        

        /*
        1.Take a positive number from user,
2. Write a function that check whether  the number is "Armstrong" or not.

An n-digit number that is the sum of the nth powers of its digits is called an n-Armstrong number. Examples :
371 =3 ** 3 + 7 ** 3 + 1 ** 3;
9474 = 9 ** 4 + 4 ** 4 + 7 ** 4 + 4 ** 4;
93084 = 9 ** 5 + 3 ** 5 + 0 ** 5 + 8 ** 5 + 4 **5.

P.S:  consider the negative, decimal and any entries other than numeric values then display a warning message to the user.
*/

/*
const number = prompt("Enter a three digit number: ")

        function isArmstrong(number){
        const len = number.lenght
        const newNumber = number.split('')
        console.log(newNumber)
        console.log(len)  

        const sum = newNumber[0] ** len + newNumber[1] ** len + newNumber[2] ** len

        return sum == number ? "is Armstrong" : "not Armstrong"
        
        }
        console.log(isArmstrong(number))

*/
  // ---------STRIG METHODS-------------------------//              

  let text = "Her şey güzel olacak !"
  let len = text.length
  console.log("lenght" + len)



   // ---------EXTRACT METHODS-------------------------// 
   // SLICE(START, END)

   let firstPart = text.slice(8, 13)
   console.log(firstPart)
   console.log("text: " + text)

   let secondPart = text.slice(8)
   console.log(secondPart)

   let thirdPart = text.slice(-14, -9)
   console.log(thirdPart)

    // ---------SUBSTRING(start,  end) METHODS-------------------------// 

    let part = text.substring(8,13)
    console.log(part)

    // substr (start,length)

    let substrPart =text.substr(8,5)
    console.log(substrPart)

    let substrPart2 =text.substr(-14,5)
    console.log(substrPart2)



    // --------------SPLIT-------------------- gelen veriden bir bolumu almak icin kullanilabilr

    let text2 = "Turkey, Germany, USA, France"
    let splittedPart = text.split("  ")
    console.log(splittedPart)

    let splittedPart2 =text2.split(",")
    console.log(splittedPart2)

    let splittedPart3 = text.split("")
    console.log(splittedPart3)

   // --------------REPLACE--------------------yerine koyma virgul varsa noktayla degistir

   let string = "Current euro currency is 15,22"
   let splitIT = string.split(" ")
   console.log(splitIT)
   let currency = splitIT[splitIT.length-1]
   currency = currency.replace(",", "." )
      console.log(currency)
      currency = Number(currency)
      console.log(currency)


    //console.log(splittedPart2[1])


       // --------------TRIMMED--------------------
        let string3 = "     Welcome to DGHome      "
        console.log(string3)
        let trimmed = string3.trim()
        console.log(trimmed)

        // let



       // --------------INCLUDES-------------------- // UCUNDE VAR MI VARSA TRUE YOKSA FALSE

       console.log(trimmed.includes("Welcome"))

          // --------------INDEXOF--------------------

          let strıng4 = "All is well !"
          let ind = string.indexOf("l")
