
let users = []

function renderuser() {
    let usercontainer = document.getElementById('users')

    usercontainer.innerHTML = "";
    users.map((user) => {
        let div = document.createElement('div');
        let userName = document.createElement('p');
        let userEmail = document.createElement('p');
        div.classList.add('user');

        userName.innerText = user.name;
        userEmail.innerText = user.email;

        usercontainer.appendChild(div);
        div.appendChild(userName);
        div.appendChild(userEmail)
    })
}

function successAlert() {
    let alert = document.getElementById('alert')
    alert.classList.add('alert')
    alert.innerText = 'User added successfully!'
    setTimeout(() => {
        alert.classList.remove('alert');
        alert.innerText = ''
    }, 2000)
}


function failAlert() {
    let alert = document.getElementById('alert')
    alert.classList.add('danger')
    alert.innerText = 'Email already exist'
    setTimeout(() => {
        alert.classList.remove('danger');
        alert.innerText = ''
    }, 2000)
}



sumbit = () => {
    let name = document.getElementById('name')
    let email = document.getElementById('email')

    let usersdata = {
        name: name.value,
        email: email.value,
    }

    let userEmailcount = users.filter((user) => {
        return user.email == email.value;

    })
    if (userEmailcount.length == 0) {

        users.push(usersdata)
        successAlert()
    }
    else {
        failAlert()
    }

    renderuser();
    console.log(users)
    name.value = "";
    email.value = "";
}
