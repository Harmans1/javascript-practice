// console.log("Hello world 1")
// console.log("Hello world 2")
// setTimeout(()=>{
//     console.log("Hello world 3")
// },2000)
// console.log("Hello world 4")


// promise

// RecordingUpload = () => {
//     console.log("Recoding uploaded successfully!")
// }

// notify = () => {
//     console.log("Email sent")
// }

// let Test = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         RecordingUpload() 
//         resolve()
//     },2000)
// }).then(()=>{
//     notify()
// })



function fetchQuote(){
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let random = Math.floor(Math.random()*data.length);
        document.getElementById('quote').innerText = data[random].text;
        document.getElementById('author').innerText = data[random].author;
      });
}    


