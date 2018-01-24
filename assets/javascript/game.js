// Variables
var wins = 0; // # of times the user has guessed a word correctly
var losses = 0; // # of times the user has used up all attempts before guessing the word ("hanging")
var guessesLeft = 6; // guess left related to "body parts" left to hang
var userGuesses = []; // an array of the letters that the user typed. Display these until the user either wins or loses.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //array of letters the computer can choose from
// Array containing possible movies referenced and the word to guess
var words = [
  {movieName: "Edward Scissorhands", movieRef: ["snow", "scissor", "haircut", "topiary", "waterbed", "inventor", "Avon"]},
  {movieName: "Beetlejuice", movieRef: ["ghost", "Lydia", "Adam", "Barbara", "Deetz", "Betelgeuse", "seance"]},
  {movieName: "The Nightmare Before Christmas", movieRef: ["Halloweentown", "Christmastown", "Jack Skellington", "Sally", "Oogie Boogie", "nightshade", "Zero"]},
  {movieName: "James and the Giant Peach", movieRef: ["orphan", "grasshopper", "centipede", "ladybuy", "glowworm", "spider", "peach"]},
  {movieName: "Sweeny Todd", movieRef: ["barber", "London", "straight razor", "serial killer", "victorian", "meat pie"]},
];
// Randomly select movie
var movie = words[Math.floor(Math.random()*words.length)];
console.log(movie);
var hint = movie.movieName;
// Randomly select word from the movie's movieRef
var word = movie.movieRef[Math.floor(Math.random()*movie.movieRef.length)];
// Reset game after win or loss
function resetGame() {
	console.log("-----------------");
	console.log("Game Reset");
	console.log("# of wins: " + wins);
	console.log("# of losses: " + losses);
	// Reset number of guesses left
	guessesLeft = hanging.length;
	var guessesLeftEl = document.querySelector("#guessesLeft");
    guessesLeftEl.innerHTML = "Guesses left: " + guessesLeft;
	console.log("Guesses Left: " + guessesLeft)
	// Reset userGuesses
	userGuesses = [];
	console.log(userGuesses);
	var userGuessesEl = document.querySelector("#userGuesses");
    userGuessesEl.innerHTML = "Your guesses so far :" + "<br />" + " " + userGuesses;
	// Reset random movie chosen by app
	var movie = words[Math.floor(Math.random()*words.length)];
	console.log(movie);
	// Reset randomly selected word
	var word = movie.movieRef[Math.floor(Math.random()*movie.movieRef.length)];
	console.log(hint);
    var reference = document.querySelector("hint");
    // Give hint as to what Movie the word is related to (words properties)
    reference.innerHTML = "Hint: " + movie;
};

// If hint button is clicked, give hint as to what Movie the word is related to (words properties)
document.addEventListener("click", function(){
    document.getElementById("hint").innerHTML = movie.movieName;
});

document.onkeyup = function(event) {

}





