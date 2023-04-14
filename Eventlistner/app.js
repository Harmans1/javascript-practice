
let users = []

let userName = document.getElementById('name')
let userEmail = document.getElementById('email');
let numb = document.getElementById('numb')
let form = document.getElementById('form')

userDetails.style.display = 'none'

function showDetails() {
    userDetails.style.display = 'block'
    form.style.display = 'none'
}

function displayUser() {
    let disContainer = document.getElementById('displayContainer')
    let div = document.createElement('div')
    let p = document.createElement('p')
    div.classList.add('textContainer')
    div.appendChild(p)
    disContainer.appendChild(div)
    p.innerText = userEmail.value;

    div.addEventListener("click", showDetails)

    div.style.cursor = 'pointer'

}

function displayDetails(e) {
    let userDetails = document.getElementById('userDetails');

    let div2 = document.createElement('div')
    let nameP = document.createElement('p')
    let emailP = document.createElement('p')
    let mobP = document.createElement('p')

    nameP.innerText = "Name:" + " " + userName.value,
        emailP.innerText = "Email:" + " " + userEmail.value,
        mobP.innerText = "MobNo:" + " " + numb.value;

    div2.appendChild(nameP)
    div2.appendChild(emailP)
    div2.appendChild(mobP)
    userDetails.appendChild(div2)

}

function goback() {
    userDetails.style.display = 'none'
    form.style.display = 'block'
}

function register() {

    let usersData = {
        userName: userName.value,
        userEmail: userEmail.value,
        numb: numb.value
    }

    users.push(usersData)
    console.log(users)
    displayUser()
    displayDetails()

    userName.value = '';
    userEmail.value = '';
    numb.value = '';

}