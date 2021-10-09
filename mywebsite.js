function answer(){
    var q1 = "fortran";
    var q2 = "cascading";
    var q3 = "hyper";
    var q4 = "js";
    var q5 = "ada lovelace";
    var a1 = document.getElementById("oldest").value;
    var a2 = document.getElementById("cascade").value;
    var a3 = document.getElementById("hyper").value;
    var a4 = document.getElementById("jav").value;
    var a5 = document.getElementById("programmer").value;
    var answerString = "";
   
    if(a1 == q1 ){
        answerString = "question1 is correct ";
        alert(answerString);
    }else{
        answerString = "question1 is incorrect, the correct answer is fortran";
        alert(answerString);
    }

    if(a2 == q2 ){
        answerString =  "question2 is correct ";
        alert(answerString);
    }else{
        answerString = "question2 is incorrect, the correct answer is cascading";
        alert(answerString);
    }
    if(a3 == q3 ){
        answerString = "question3 is correct ";
        alert(answerString);
    }else{
        answerString = "question3 is incorrect, the correct answer is hyper ";
        alert(answerString);
    }
    if(a4 == q4 ){
        answerString = "question4 is correct ";
        alert(answerString);
    }else{
        answerString = "question4 is incorrect, the correct answer is js";
        alert(answerString);
    }
    if(a5 == q5 ){
        answerString = "question5 is correct. CONGRATULATIONS YOU HAVE FINISHED THE GAME!!! ";
        alert(answerString);
    }else{
        answerString = "question5 is incorrect, the correct answer is ada lovelace.  CONGRATULATIONS YOU HAVE FINISHED THE GAME!!!";
        alert(answerString);
    }
}