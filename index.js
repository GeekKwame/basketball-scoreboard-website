// Basketball Scoreboard JavaScript

// Initialize scores
let homeScore = 12;
let guestScore = 5;

// Function to add points to a team's score
function addScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-score').textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById('guest-score').textContent = guestScore;
    }
    
    // Optional: Add a subtle animation effect
    animateScoreUpdate(team);
}

// Function to animate score updates
function animateScoreUpdate(team) {
    const scoreElement = document.getElementById(`${team}-score`);
    scoreElement.style.transform = 'scale(1.1)';
    scoreElement.style.transition = 'transform 0.2s ease';
    
    setTimeout(() => {
        scoreElement.style.transform = 'scale(1)';
    }, 200);
}

// Optional: Add keyboard shortcuts for score updates
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            addScore('home', 1);
            break;
        case '2':
            addScore('home', 2);
            break;
        case '3':
            addScore('home', 3);
            break;
        case '7':
            addScore('guest', 1);
            break;
        case '8':
            addScore('guest', 2);
            break;
        case '9':
            addScore('guest', 3);
            break;
        case 'r':
        case 'R':
            resetScores();
            break;
    }
});

// Function to reset scores (optional feature)
function resetScores() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
    
    // Add visual feedback for reset
    const homeElement = document.getElementById('home-score');
    const guestElement = document.getElementById('guest-score');
    
    [homeElement, guestElement].forEach(element => {
        element.style.color = '#FF3366';
        element.style.transform = 'scale(0.9)';
        setTimeout(() => {
            element.style.color = '#FF3366';
            element.style.transform = 'scale(1)';
        }, 300);
    });
}

// Initialize the scoreboard when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial scores
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
    
    console.log('Basketball Scoreboard initialized!');
    console.log('Keyboard shortcuts:');
    console.log('1, 2, 3 - Add points to HOME team');
    console.log('7, 8, 9 - Add points to GUEST team');
    console.log('R - Reset scores');
});
