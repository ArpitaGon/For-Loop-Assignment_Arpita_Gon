for (let num = 1; num<=30; num++){
    if (num % 3 === 0 ){
        console.log("Fizz")
    } else {
        console.log(num)
    }
}

let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i=0; i<10; i++){

        console.log(numberList[i] * 5 )
    
}

let wordsArray = ["cat", "window", "bottle", "car", "javaScript"]

for (let i = 0; i < wordsArray.length; i++){
    if (wordsArray[i].trim().length>4){
        console.log("Long word alert!")
    } else {
        console.log(wordsArray[i])
    }
}


let paragraph = ["Hi, I am Arpita Gon. ",
"I live in Toronto. ", "I am a student of Cantek.  ",
" I learned CSS and HTML. ", "Now I am learning JavaScript. "]
let paragaraphE1 = document.getElementById("myParagraph")

for(let i = 0; i < paragraph.length; i++){
    paragaraphE1.textContent = paragaraphE1.textContent + paragraph[i]
}


for (let count = 1; count <=20; count++){
    if (count % 2 === 1){
        console.log(count)
    }
}