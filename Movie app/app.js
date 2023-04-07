let API = 'http://www.omdbapi.com/?apikey=69b4fd56&t='
let loadingStatus = false;

let img = document.getElementById('img');
let title = document.getElementById('title')
let desc = document.getElementById('desc')

function cheackLoaderStatus(){
    let intro = document.getElementById('intro');
    intro.style.display = 'none'
    let loader = document.getElementById('loader')
    if(loadingStatus == true){
        loader.classList.add('loader')
    }
    else(
        loader.classList.remove('loader')
    )
}

function renderMovie(data){
    img.src = data.Poster
    title.innerText = data.Title; 
    desc.innerText = data.Plot; 

    
}

function FetchMovieDetails(){
    loadingStatus = true;
    cheackLoaderStatus();    
    let movieName = document.getElementById('movieName')
    let apiQuery = API + movieName.value;
    console.log(apiQuery)

    fetch(apiQuery).then((response)=>{
       return response.json();
    }).then((data)=>{
        console.log(data)
        loadingStatus = false
        cheackLoaderStatus()
        renderMovie(data)
    })

} 