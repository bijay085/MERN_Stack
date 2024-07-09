
// Coding Challenge #3
// There are two gymnastics teams, team1s and team2. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
//  Data 1: team1s score 96, 108 and 89. team2 score 88, 91 and 110
//  Data Bonus 1: team1s score 97, 112 and 101. team2 score 109, 95 and 123
//  Data Bonus 2: team1s score 97, 112 and 101. team2 score 109, 95 and 106
// GOOD LUCK


let team1, team2, team1Score1, team1Score2, team1Score3, averageteam1Score, team2Score1, team2Score2, team2Score3, averageteam2Score;

const winnerPicker = (team1, team2, team1Score1,team1Score2,team2Score1,team2Score2) => {
    averageteam1Score = (team1Score1+team1Score2+team1Score3)/3;
    averageteam2Score = (team2Score1+team2Score2+team2Score3)/3;

        if(averageteam1Score > averageteam2Score && averageteam1Score>100 && averageteam2Score >100) {
            console.log("team1's team wins.");
        }
        
        else if(averageteam1Score === averageteam2Score && averageteam1Score>100 && averageteam2Score >100){
            console.log("Noone wins, score draw.");
        }
        
        else if(averageteam2Score < averageteam1Score && averageteam1Score>100 && averageteam2Score >100){
            console.log("koala's team wins.");
        }
        else{
            console.log("No one wins");
        }
        return 0;

}

console.log(winnerPicker("cartoon1", "cartoon2", 97,108,89,88,91,110));
