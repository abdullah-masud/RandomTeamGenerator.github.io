var players = [];
var shuffledPlayers1 = [];
var shuffledPlayers2 = [];


// Selectors
var addPlayers = document.getElementById('addPlayers'); // Add player button
var playerNames = document.getElementById('playerNames'); // Input
var generateBtn = document.getElementById('generateBtn'); // Generator Button
var generatedNames1 = document.getElementById('generatedNames1'); // Output 1 
var generatedNames2 = document.getElementById('generatedNames2'); // Output 2
var playerList = document.getElementById('playerList'); // Players Added

// Event Listeners
addPlayers.addEventListener('click', playersAdded);
generateBtn.addEventListener('click', randomPlayersGenerated);

// Function
function playersAdded() {
    // Showing new players
    if (playerNames.value != "") {
        var player = playerNames.value;
        var text = document.createTextNode(player);
        var newPlayer = document.createElement('li');
        newPlayer.appendChild(text);
        playerList.appendChild(newPlayer);

        // Adding players to array
        players.push(playerNames.value);
        playerNames.value = "";
    }

}

function randomPlayersGenerated() {
    if (players.length > 0) {
        players.sort(() => 0.5 - Math.random());
        const length = players.length;
        const half = length / 2
        if (length % 2 === 0) {
            for (let i = 0; i < half; i++) {
                shuffledPlayers1.push(players[i]);
            }
            for (let j = half; j < length; j++) {
                shuffledPlayers2.push(players[j]);
            }

            generatedNames1.value = `Team 1: ${shuffledPlayers1}`;
            generatedNames2.value = `Team 2: ${shuffledPlayers2}`;
        } else {
            for (let i = 0; i < Math.floor(half); i++) {
                shuffledPlayers1.push(players[i]);
            }
            for (let j = Math.floor(half); j < length; j++) {
                shuffledPlayers2.push(players[j]);
            }

            generatedNames1.value = `Team 1: ${shuffledPlayers1}`;
            generatedNames2.value = `Team 2: ${shuffledPlayers2}`;
        }

        shuffledPlayers1 = [];
        shuffledPlayers2 = [];

        generateBtn.innerHTML = "Shuffle";
    }
}