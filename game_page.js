var name_1=localStorage.getItem("name1");
var name_2=localStorage.getItem("name2");
score_one=0;
score_two=0;
question_turn=player1;
answer_turn=player2;
function check(){
    
   if(answer==word){
     if (answerturn=="player1") {
       score_one=score_one+1;
       document.getElementById("player1score").innerHTML=score_one;
     } else {
       score_two=score_two+1;
       document.getElementById("player2score").innerHTML=score_two;
     }
    if (questionturn=="player1") {
        questionturn="player2";
        document.getElementById("player_question").innerHTML="question turn- "+name_2;
      }
      else{
        questionturn="player1";
        document.getElementById("player_question").innerHTML="question turn- "+name_1;
      }
      var inputvalue=document.getElementById("input1").value;
    }
     if (answerturn=="player1") {
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="answer turn- "+name_2;
      }
      else{
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="answer turn- "+name_1;
      }

}