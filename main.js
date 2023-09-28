var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")
window.addEventListener("keyDown",my_keydown);
function newImage()
{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if((keyPressed >=97 && keyPressed<=122 ) || (keyPressed >=67 && keyPressed<=90))
    {
        alphabetkey(keyPressed);
        document.getElementById("d1").innerHTML="voce presonou uma tecla afalbeto";
        console
    }
	
	
}

function playSound(){
	
}
