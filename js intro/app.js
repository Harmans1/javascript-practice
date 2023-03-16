// const username="Harmanpreet singh"
// console.log(username)


// let age=24
// console.log(age)

// let subjects=["Mathematics,English,Economics,Panjabi,Physical"]
// console.log(subjects)

// let ages ={
//     "Harmanpreet singh":16,
//     "veerkaran singh":16,
//     "Harjoot singh":17,
//     "Abijeet singh":18,
// }

// console.log(ages)

// assignment operators

// let a = 10;
// let b = 4;

// console.log("a + b = ", a+b)
// console.log("a - b = ", a-b)
// console.log("a * b = ", a*b)
// console.log("a / b = ", a/b)
// console.log("a % b = ", a%b)
// console.log("++a = ", ++a)
// console.log("a++ = ", a++)
// console.log("a = ", a)
// console.log("--a = ", --a)
// console.log("a-- = ", a--)
// console.log("a =", a)


// Assignment operators

// let b = 10;

// b += 2
// console.log("now b =", b)
// b -= 2
// console.log("now b =", b)
// b *= 2
// console.log("now b =", b)
// b /= 2
// console.log("now b =", b)


// Comparision operator
// let x = 5;
// let y = 5;

// console.log("x==y", x==y )
// console.log("x!=y", x!=y )
// console.log("x<=y", x<=y )
// console.log("x>y", x>y )

// logical operator

// let p = 10;
// let q = 10;

// console.log(p<q && p==q)
// console.log(p<q || p==q)
// console.log(p>q | p!=q)




// functions in javascript 

// function hello(){
//     let title = document.getElementById('title')
//     title.innerText = 'Great! lets start'
//     title.style.color = 'blueviolet';
//     let btn = document.getElementById('btn')
//     btn.style.display = 'none';
// }

function Welcome(){
    let name = document.getElementById('name'); 
    document.getElementById('nameinput').innerText = name.value;
    name.value = '';
}

