// function hover(){
//     console.log('mouse is hover to heading')
// }

// let alertdiv = document.getElementById('alert');
// function mouseOver(){
//     alertdiv.style.display = 'block'
// }

// function mouseOut(){
//     alertdiv.style.display = 'none'
// }


// function submit(){
    // let name = document.getElementById('name')
//     let value = name.value
//     document.getElementById('userinput').innerText = value
//     // name.value = ''
// }

let magicstatus = false;
let magicbtn = document.getElementById('magicbtn')
let stopmagicbtn = document.getElementById('stopmagicbtn')

function magic(){
    magicstatus = true;
    let magic = document.getElementById('title')
    title.classList.add('title') 
}

function stopmagic(){
    magicstatus = false;
    let magic = document.getElementById('title')
    title.classList.remove('title')  
}

function checkmagicstatus(){
    if(magicstatus == true){
        magicbtn.style.display = 'none';
        stopmagicbtn.style.display = 'block'
    }
    else{
        stopmagicbtn.style.display = 'none';
        magicbtn.style.display = 'block'
    }
}