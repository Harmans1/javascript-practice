let users = [
    {
        "age": 35,
        "name": "Park Ball",
        "gender": "male",
        "email": "parkball@zialactic.com",
        "address": "347 Roosevelt Court, Greenbush, Tennessee, 8659"
    },
    {
        "age": 29,
        "name": "Juliette Juarez",
        "gender": "female",
        "email": "juliettejuarez@zialactic.com",
        "address": "475 Perry Terrace, Groveville, Guam, 656"
    },
    {
        "age": 28,
        "name": "Shields Rush",
        "gender": "male",
        "email": "shieldsrush@zialactic.com",
        "address": "222 Middleton Street, Homestead, Maryland, 9078"
    },
    {
        "age": 26,
        "name": "Catherine Carrillo",
        "gender": "female",
        "email": "catherinecarrillo@zialactic.com",
        "address": "398 Degraw Street, Bowie, Rhode Island, 3024"
    },
    {
        "age": 26,
        "name": "Tyson Maxwell",
        "gender": "male",
        "email": "tysonmaxwell@zialactic.com",
        "address": "185 Beach Place, Hollymead, Iowa, 6535"
    },
    {
        "age": 38,
        "name": "Osborn Miller",
        "gender": "male",
        "email": "osbornmiller@zialactic.com",
        "address": "403 Dikeman Street, Dixie, Illinois, 661"
    }
]


let name = users.map((user) => {
    return user.name + "  " + user.gender
})

// console.log(name)


let male = users.filter((user) => {
    return user.gender == 'male' 
}).map((user)=>{
    return user.name
})


console.log(male)
