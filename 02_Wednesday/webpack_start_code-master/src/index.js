import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

document.body.onload = displayJokes;

function displayJokes(){
    const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
    document.getElementById("jokes").innerHTML = allJokes.join("");
}

// Get joke
document.getElementById("jokeBtn").onclick = function(){
    document.getElementById("joke").innerHTML = 
    jokes.getJokeById(document.getElementById("inputGet").value);
};

// Add joke
document.getElementById("addBtn").onclick = function(){
    jokes.addJoke(document.getElementById("inputAdd").value);
    displayJokes();
};

function newQuote() {
    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        document.getElementById("showQuote").innerHTML = data.joke;
     });
}

let oneHour = 60 * 60 * 1000;
document.getElementById("newQuote").onclick = getQuote;
setInterval(newQuote,oneHour);