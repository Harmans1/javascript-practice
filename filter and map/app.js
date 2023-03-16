let a = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]


// map

function square(num){
    return num*num
}

let result = a.map(square);
let cube = a.map((num)=> {
    return num * num * num
})

// console.log(result)
// console.log(cube)

// filter 

let filters = a.filter((num)=>{
    return num>4;
})

// console.log(filters)


// chaining


let chaining = a.filter((x)=>{
    return x%2 == 0
}).map((x)=>{
    return x*x
})

// console.log(chaining)


let users = []

sumbit = () =>{
    let name = document.getElementById('name')
    let age = document.getElementById('age')
    let email = document.getElementById('email')

    let usersdata = {
        name: name.value,
        age: age.value,
        email: email.value,
    }

    // document.getElementById('name').value = "";
    // document.getElementById('age').value = "";
    // document.getElementById('email').value = "";


    let userEmailcount = users.filter((user)=>{
        return user.email == email.value;

    })
    if(userEmailcount.length == 0){
        
        users.push(usersdata)
    }
    else{
        alert("email id already taken!")
    }

    console.log(users)
}
