let score = 0;
let scrorel = 0;
let team1 = document.getElementById("team101");
let team2 = document.getElementById("team201");
let team10 = document.getElementById("team-highlight");

function add101() {
    score += 1;
    team1.textContent = score;
    updateLeader();
}

function add102() {
    score += 2;
    team1.textContent = score;
    updateLeader();
}

function add103() {
    score += 3;
    team1.textContent = score;
    updateLeader();
}

function add201() {
    scrorel += 1;
    team2.textContent = scrorel;
    updateLeader();
}

function add202() {
    scrorel += 2;
    team2.textContent = scrorel;
    updateLeader();
}

function add203() {
    scrorel += 3;
    team2.textContent = scrorel;
    updateLeader();
}

function newgame() {
    score = 0;
    scrorel = 0;
    team1.textContent = 0;
    team2.textContent = 0;
    updateLeader();
}

function updateLeader() {
    if (score < scrorel) {
        team10.textContent = "Team 2 is Leading";
        
    } else if (score > scrorel) {
        team10.textContent = "Team 1 is Leading";
    
    } else {
        team10.textContent = "Highlight :";
        
    }
}
