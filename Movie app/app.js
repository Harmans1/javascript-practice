let API = 'http://www.omdbapi.com/?apikey=69b4fd56&t='
let loadingStatus = false;

let img = document.getElementById('img');
let title = document.getElementById('title')
let desc = document.getElementById('desc')
let actors = document.getElementById('actors')
let director = document.getElementById('director')
let writer = document.getElementById('writer')
let genre = document.getElementById('genre')
let ratings = document.getElementById('ratings')
let votes = document.getElementById('votes')
let movieError = document.getElementById('errorContainer')
let movieContainer = document.getElementById('movieContainer')
movieError.classList.add('d-none')


function cheackLoaderStatus() {
    let intro = document.getElementById('intro');
    intro.style.display = 'none'
    let loader = document.getElementById('loader')
    if (loadingStatus == true) {
        loader.classList.add('loader')
    }
    else (
        loader.classList.remove('loader')
    )
}


function renderMovie(data) {
    img.src = data.Poster
    title.innerText = data.Title;
    desc.innerText = data.Plot;
    actors.innerText = "Actors:  " + data.Actors;
    director.innerText = "Director:  " + data.Director;
    writer.innerText = "Writer:  " + data.Writer;
    genre.innerText = "Genre:  " + data.Genre;
    ratings.innerText = "Ratings:  " + data.imdbRating;
    votes.innerText = "Votes:  " + data.imdbVotes;
    movieContainer.classList.remove('d-none')
    movieError.classList.add('d-none')
}

function FetchMovieDetails() {
    loadingStatus = true;
    cheackLoaderStatus();
    let movieName = document.getElementById('movieName')
    let apiQuery = API + movieName.value;
    console.log(apiQuery)

    fetch(apiQuery).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        if (data.Error != "Movie not found!") {
            loadingStatus = false
            cheackLoaderStatus()
            renderMovie(data)
        }
        else {
            movieContainer.classList.add('d-none')
            movieError.classList.remove('d-none')
            loadingStatus = false;
            cheackLoaderStatus();
        }
    })

} 