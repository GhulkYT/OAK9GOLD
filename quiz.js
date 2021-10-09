function quiz(){
    var q1 = "Kareem Abdul-Jabbar";
    var q2 = "Wilt Chamberlain";
    var q3 = "Russel Westbrook";
    var a1 = document.getElementById("score").value;
    var a2 = document.getElementById("rebounds").value;
    var a3 = document.getElementById("russ").value;
    var answerString = "";
   
    if(a1 == q1 ){
        answerString = "Congrats you got question1 right!!! ";
        alert(answerString);
    }else{
        answerString = "question1 is incorrect, the correct answer is "+q1;
        alert(answerString);
    }

    if(a2 == q2 ){
        answerString =  "Congrats you got question2 right!!! ";
        alert(answerString);
    }else{
        answerString = "question2 is incorrect, the correct answer is "+q2;
        alert(answerString);
    }
    if(a3 == q3 ){
        answerString = "Congrats you got question3 right!!! You have finished the quiz. ";
        alert(answerString);
    }else{
        answerString = "question3 is incorrect, the correct answer is "+q3;
        alert(answerString);
    }
    
}