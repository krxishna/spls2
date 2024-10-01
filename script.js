// Team scores and wickets
let team1 = { score: 0, wickets: 0 };
let team2 = { score: 0, wickets: 0 };

// Function to add runs
function addRuns(team, runs) {
    if (team === 'team1') {
        team1.score += runs;
        document.getElementById('team1-score').innerText = team1.score;
    } else {
        team2.score += runs;
        document.getElementById('team2-score').innerText = team2.score;
    }
}

// Function to add wickets
function addWicket(team) {
    if (team === 'team1' && team1.wickets < 10) {
        team1.wickets += 1;
        document.getElementById('team1-wickets').innerText = team1.wickets;
    } else if (team === 'team2' && team2.wickets < 10) {
        team2.wickets += 1;
        document.getElementById('team2-wickets').innerText = team2.wickets;
    }
}
