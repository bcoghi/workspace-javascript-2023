//Generate random number
function randInt(min, max){
    return Math.floor(Math.random() * (max-min+1)+min);
}

//Get the numbers
var a = randInt(300,600);
var b = randInt(150,275);
var c = randInt(1,125);

//update questions --total, give, take
var total = document.querySelector("#total");
var give = document.querySelector("#give");
var take = document.querySelector("#take");

total.textContent = a.toString();
give.textContent = b.toString();
take.textContent = c.toString();

//update answers 
//m - n + k (correct)
//m - n - k
//m - (n + k)
//m - (n - k)

var a1 = document.querySelector('[value="1"]');
var a2 = document.querySelector('[value="2"]');
var a3 = document.querySelector('[value="3"]');
var a4 = document.querySelector('[value="4"]');

//HTML Structure
// div -> label -> input
//              -> textnode 
a1.nextSibling.nodeValue = a.toString() + "-" + b.toString() + "+" + c.toString();
a2.nextSibling.nodeValue = a.toString() + "-" + b.toString() + "-" + c.toString();
a3.nextSibling.nodeValue = a.toString() + "-" + (b+c).toString();
a4.nextSibling.nodeValue = a.toString() + "-" + (b-c).toString();

//pick answers
//(class is an attribute)
function changeStyle(e){
    e.preventDefault(); //prevent the checkbox from being clicked
    //alert("clicked" + this.getAttribute("class"));
    var classname = this.getAttribute("class");
    if(classname =="answer"){
        this.setAttribute("class","answer selected");
    }
    else{
        this.setAttribute("class","answer");
        //alert("else");
    }

    var randRot = Math.floor(Math.random()*(1028-270+1)+270);
    var randScale = Math.floor(Math.random()*(400-10+1)+10);
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate('+randRot.toString()+'deg)'},{transform:'scale('+randScale.toString()+'%)'}],{duration:500});
}

// add eventlisteners to the answers
var qList = document.getElementsByClassName('answer');
for(var i = 0; i < 4; i++){
    qList[i].addEventListener('click', changeStyle, false);
}


