const options = ["Rock","Paper","Scissors"];
let count=3;
let randomOption;

function generate(){
    const randomIndex = Math.floor(Math.random()*options.length);
    randomOption = options[randomIndex];
    document.getElementById('result').innerText="Player 1 Choses: " + randomOption;
    }

function check(){
    var choice = document.getElementById("choice").value;
    if(count>0){
        if(choice=="Rock"||choice=="Paper"||choice=="Scissors"){
            if(choice=="Rock" && randomOption=="Rock"){
                document.getElementById("outcome").innerHTML="Draw"
            }
            else if(choice=="Rock" && randomOption=="Paper"){
                document.getElementById("outcome").innerHTML="Lose"
            }
            else if(choice=="Rock" && randomOption=="Scissors"){
                document.getElementById("outcome").innerHTML="Win"
            }
            else if(choice=="Paper" && randomOption=="Rock"){
                document.getElementById("outcome").innerHTML="Win"
            }
            else if(choice=="Paper" && randomOption=="Paper"){
                document.getElementById("outcome").innerHTML="Draw"
            }
            else if(choice=="Paper" && randomOption=="Scissors"){
                document.getElementById("outcome").innerHTML="Lose"
            }
            else if(choice=="Scissors" && randomOption=="Rock"){
                document.getElementById("outcome").innerHTML="Lose"
            }
            else if(choice=="Scissors" && randomOption=="Paper"){
                document.getElementById("outcome").innerHTML="Win"
            }
            else if(choice=="Scissors" && randomOption=="Scissors"){
                document.getElementById("outcome").innerHTML="Draw"
            }
            count--;//reduce count by 1 after each valid input
        }
        else{
            alert("Invalid input, note that input is case sensitive.")
        }
    }
    if (count === 0) {
        document.getElementById("outcome").innerHTML +="<br />"+"You picked: "+choice+"<br/>"+"GAME OVER";//append "GAME OVER" to result of third guess
        document.getElementById("playbtn").style.display = "none";//hide button after count hits 0
        document.getElementById("submitbtn").style.display = "none";//hide button after count hits 0
        document.getElementById("choice").style.display = "none";//hide button after count hits 0
    }
}