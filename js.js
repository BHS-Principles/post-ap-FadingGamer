var BTN = document.getElementById("myButton");

var doSomething = function(event){
    alert("Praise me!");
    console.log(event);
};

for(var i = 0; i < 3; i++){
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
    newBTN.addEventListener("click", doSomething);
};

alert("PLEASE LET IT WORK!!!!!");