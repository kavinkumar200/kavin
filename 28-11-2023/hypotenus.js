let a;
let b;
let c;

document.getElementById("submitbutton").onclick = function(){
    a=document.getElementById("atextbox").Value;
    a=number (a);

    b=window.prompt(" enter side B ");
    b=number(b);

    c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML=  c;
 }

// a=window.prompt(" enter side A");
// a=number(a);

// b=window.prompt(" enter side B ");
// b=number(b);

// c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

// console.log(" side c: " + c);