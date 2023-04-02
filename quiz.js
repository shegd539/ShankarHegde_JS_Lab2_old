var answers = ["A", "C", "B","Dehli"],
    tot = answers.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers[i]) score += 1;
    return score;
}
function returnScore() {
    document.getElementById("myresults").innerHTML =
        "Your score is " + getScore() + "/" + tot;
    if (getScore() ==4) {
        document.getElementById("myresults").innerHTML ="<span style='color: white;'>Your score is " + getScore() + "/" + tot+", You got 100%" + " and grade A</span>";
    }
    else if (getScore() ==3) {
        document.getElementById("myresults").innerHTML ="<span style='color: white;'>Your score is " + getScore() + "/" + tot+", You got 75%" + " and grade B </span>";
    }
    else if (getScore() ==2) {
        document.getElementById("myresults").innerHTML ="<span style='color: yellow;'>Your score is " + getScore() + "/" + tot+", You got 50%" + " and grade C </span>";
    }
    else if (getScore() ==1) {
        document.getElementById("myresults").innerHTML ="<span style='color: red;'>Your score is " + getScore() + "/" + tot+", You got 25% "+
         " and grade D Try Again!! You are not cleared quiz </span>";
    }
    else {
        document.getElementById("myresults").innerHTML ="<span style='color: red;'>Your score is " + getScore() + "/" + tot+", Try Again!! You are not cleared quiz</span>";
    }
}
