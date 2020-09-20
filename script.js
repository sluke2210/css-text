
document.getElementById("text_input").addEventListener('keydown', (event)=>{
    //console.log(event);
    let stringBody = document.getElementById("text_input").value;
    switch(event.keyCode){
        case 8://backspace
            tmpStr = stringBody.slice(0,-1);
            update(tmpStr);
            console.log("called key 8");
            break;
        case 229://processing
            break;
        case 13://Enter
            break;
        case 16://shift
            break;
        case 9://tab
            break;
        default:
            stringBody += event.key;
            update(stringBody);
    }
    //updateText(event);
    //console.log(document.getElementById("text_input").innerHTML);
    //console.log(stringBody);
});


function update(str){
    document.getElementById("innerText").innerHTML = str;
    document.getElementById("text_input").innerHTML = str;
}

document.getElementById("reset").addEventListener('click', ()=>{
    str = " ";
    document.getElementById("innerText").innerHTML = str;
    document.getElementById("text_input").value = str;
    stringBody = str;

});

document.getElementById("text_justify").addEventListener('input', ()=>{
    value = document.getElementById("text_justify").value;
    val = Number(value);
    // console.log("text justify ")
    // console.log(value);
    switch(val){
        case 0:
            console.log("testify left")
            document.getElementById("innerText").style.textAlign = "left";
            break;
        case 1:
            document.getElementById("innerText").style.textAlign = "center";
            break;
        case 2:
            document.getElementById("innerText").style.textAlign = "right";
            break;
    }
});
document.getElementById("font_weight").addEventListener('input', ()=>{
    value = document.getElementById("font_weight").value;
    document.getElementById("innerText").style.fontWeight = `${value}`;

});


function texDec(){
    strike = document.getElementById("strikeThrough").checked;
    overline = document.getElementById("overline").checked;
    underline = document.getElementById("underline").checked

    if(strike & !overline & !underline){

        document.getElementById("innerText").style.textDecoration = "line-through";

    }else if(!strike & overline & !underline){
        document.getElementById("innerText").style.textDecoration = "overline";
    }else if(!strike & !overline & underline){
        document.getElementById("innerText").style.textDecoration = "underline";
    }else if(strike & overline & !underline){
        document.getElementById("innerText").style.textDecoration = "overline line-through";
    }else if(strike & !overline & underline){
        document.getElementById("innerText").style.textDecoration = "underline line-through";
    }else if(!strike & overline & underline){
        document.getElementById("innerText").style.textDecoration = "underline overline";
    }else if(!strike & !overline & !underline){
        document.getElementById("innerText").style.textDecoration = "";
    }else if(strike & overline & underline){
        document.getElementById("innerText").style.textDecoration = "underline overline line-through";

    }
}


function changeCol(){

 r = document.getElementById("red").value;
 g = document.getElementById("green").value;
 b = document.getElementById("blue").value;
 //console.log("change col called" , r, g, b);
 rh=int2hex(r);
 gh=int2hex(g);
 bh=int2hex(b);
 
 hexCol = "#" + rh + gh + bh;
 document.getElementById("innerText").style.color = hexCol;
}

function changeBCol(){

    r = document.getElementById("bg-red").value;
    g = document.getElementById("bg-green").value;
    b = document.getElementById("bg-blue").value;
    //console.log("change col called" , r, g, b);
    rh=int2hex(r);
    gh=int2hex(g);
    bh=int2hex(b);
    
    hexCol = "#" + rh + gh + bh;
    document.getElementById("textOutput").style.backgroundColor = hexCol;
   }

function int2hex(intr){

    if (intr < 256) {
      tmp =   Math.abs(intr).toString(16);
      
    res = tmp.toUpperCase();
    if(res.length == 1){
        return "0"+res;
    }else{
        return res;
    }
}
}

function changeSize(){
    console.log("fs")
    size = document.getElementById("fontSize").value;
    document.getElementById("innerText").style.fontSize = size;
}


function checkPtag() {
    event.preventDefault();
  let empt = document.getElementById('innerText');
  if (empt == null || empt == "")
  {
    return false;
  }
  else 
  {
      return true; 
  }
}
