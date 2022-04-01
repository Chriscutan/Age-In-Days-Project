function ageInDays(){
    var birthYear = prompt("Enter your birth year: ");
    var ageInDayss = (2022 - birthYear) * 365;
    
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are ' + ageInDayss + ' days old!!');

    h1.setAttribute('id', 'ageInDayss');
    h1.appendChild(answer);

    document.getElementById("box-result").appendChild(h1);
}


function reset(){
    document.getElementById("ageInDayss").remove();
}