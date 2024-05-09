let simsubscreennum=0;
let temp=0;


	
function navNext()
{
	
	for(temp=0;temp<2;temp++)
	{ 
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	
	simsubscreennum+=1;
	//
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();

	
	
}

function animatearrow()
{
    if (document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function blinkArrow(l,t,d,h)
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+l+"px; top:"+t+"px; height:"+h+"px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+d+"deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate("+d+"deg)";
	document.getElementById("arrow1").style.transform = "rotate("+d+"deg)";
}

function magic()
{
	if(simsubscreennum==1)
	{
		blinkArrow(520,270,360,40);
		
	}
	
	
}
document.addEventListener("DOMContentLoaded", function() {

  var numericInput = document.getElementById("numberInput");
  var rangeInput = document.getElementById("slider");
  var errorDisplay = document.getElementById("warningMessage");
  errorDisplay.style.display = "none";


  numericInput.value = 0;
  rangeInput.value = 0;

  
  numericInput.addEventListener("input", function() {
    
    rangeInput.value = numericInput.value;

   
    numberMorse();
    const inputValue1 = numericInput.value;

  // Check if the input value contains multiple zeros
  if (inputValue1.includes("00")) {
    // Remove the extra zeros
    numericInput.value = inputValue1.replace(/00/g, "0");
  }

    var inputValue = parseInt(numericInput.value, 10);
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 9 || !Number.isInteger(inputValue)|| numericInput.value.includes(".")) {
      errorDisplay.style.display = "block";
      document.getElementById('submit').disabled = true;
      numericInput.value = "";
       inputValue = 0;
    } else {
      errorDisplay.style.display = "none";
      document.getElementById('submit').disabled = false;
      numberMorse();
    }
  });

  rangeInput.addEventListener("input", function() {

    numericInput.value = rangeInput.value;

  
    numberMorse();

    var inputValue = parseInt(numericInput.value, 10);
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 9 || !Number.isInteger(inputValue)|| numericInput.value.includes(".")) {
      errorDisplay.style.display = "block";
      document.getElementById('submit').disabled = true;
      numericInput.value = "";
       inputValue = 0;
    } else {
      errorDisplay.style.display = "none";
      document.getElementById('submit').disabled = false;
      numberMorse();
    }
  });

  
  numberMorse();
});

  
  function numberMorse(){
    var numericInput = document.getElementById("numberInput");
    var rangeInput = document.getElementById("slider");
    


    // var inputValue = parseInt(numericInput.value, 10);
    // if (isNaN(inputValue) || inputValue < 0 || inputValue > 9) {
       
        
    // }

    const numToMorse = {
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----"
      };

    const selectedOption = rangeInput.value;
    const selectedNumber = numToMorse[selectedOption];

    console.log(selectedOption);
    console.log(selectedNumber);

    document.getElementById('numberMorse').innerHTML = selectedOption;
    document.getElementById('dm1').innerHTML = selectedOption;

  }
  function play(){
    console.log("play button clicked")
    document.getElementById("repeat").style.visibility="hidden";

    const numToMorse = {
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----"
      };

    var numericInput = document.getElementById("slider");
	const morsedisplay= document.getElementById("morsedisplay");
    const playbutton = document.getElementById("ply");
    const intervalDuration = 800;

   morsedisplay.innerHTML  = ''; 

   let currentIndex = 0;
   let selectedOption = numericInput.value;
   let selectedNumber = numToMorse[selectedOption];

   let interval; 

    function seqMorse(){
		
		
	if (currentIndex < selectedNumber.length) {
        playbutton.disabled = true;


		
		const currentChar = selectedNumber[currentIndex];
		const Context = new AudioContext(); 


		var oscillator = Context.createOscillator();
		oscillator.frequency.value=600;
		oscillator.connect(Context.destination);
		oscillator.start();
		// Play audio for dots and dashes
		if (currentChar === '.') {
			setTimeout(function() { oscillator.stop();},100);
		//   dotAudio.play();
		} else if (currentChar === '-') {
			setTimeout(function() { oscillator.stop();},300);

		//   dashAudio.play();
		}
		
    // Update the Morse code being displayed
    morsedisplay.innerHTML += currentChar;
    
    // Move to the next character
	
    currentIndex++;
	console.log(currentIndex)
	
  } 
      
    else {
   
   
       console.log("hello")
       playbutton.disabled = false;
       document.getElementById("repeat").style.visibility="visible";

	document.getElementById("ply").addEventListener('click',function (){
		

	});
    clearInterval(interval);

	

	
	
  }
}
    seqMorse();
    interval = setInterval(seqMorse, intervalDuration);
  }
  function repeat(){
	
	console.log("clickedrepeat");
   
simsubscreennum = 1;
   
	document.getElementById("canvas2").style.visibility="hidden";
  
 
document.getElementById("canvas1").style.visibility="visible";
document.getElementById("repeat").style.visibility="hidden";

const selectclear=document.getElementById('myselect');
selectclear.selectedIndex=0;
}
function repeat(){
	
	console.log("clickedrepeat");
   
    simsubscreennum = 1;
   
	document.getElementById("canvas2").style.visibility="hidden";
    document.getElementById("canvas1").style.visibility="visible";
    document.getElementById("repeat").style.visibility="hidden";
  
    document.getElementById('morsedisplay').innerHTML = "";


    var morseImage = document.getElementById('morseImage');

   morseImage.style.visibility='hidden';

   var numericInput = document.getElementById("numberInput");
   var rangeInput = document.getElementById("slider");

   numericInput.value = 0;
   rangeInput.value = 0;
   numberMorse();
 
   


}
function hint(){
  var morseImage = document.getElementById('morseImage');

  if(morseImage.style.visibility === 'hidden'){
   morseImage.style.visibility='visible';
  }
  else{
   morseImage.style.visibility='hidden';
  }
}

  
  









	
	 
	
		

























