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



function showMe(){
		document.getElementById('show').style.visibility="hidden";
	  
	var box = document.getElementById('container');
	box.classList.remove('hidden');
	setTimeout(function() {
	  box.classList.add('visible');
	}, 9); // Add a small delay for better visual effect
 
}

// document.getElementById('SS-2').style.visibility='hidden';
function ButtonClicked1(){
	var   distress = document.getElementById('button-1');
console.log(distress.textContent);
	document.getElementById('SS-2').innerHTML = distress.textContent;
	document.getElementById('SS-3').innerHTML = distress.textContent;
	document.getElementById('SS-selected').style.visibility = "visible";

	document.getElementById('submit').addEventListener('click',function(){
		document.getElementById('SS-selected').style.visibility='hidden';
		document.getElementById('select1').style.visibility='visible';
		document.getElementById('select2').style.visibility='hidden';
		document.getElementById('select3').style.visibility='hidden';
		document.getElementById('select4').style.visibility='hidden';
		document.getElementById('buttons').style.visibility='visible';
		document.getElementById('buttons-2').style.visibility='hidden';
		document.getElementById('buttons-3').style.visibility='hidden';
		document.getElementById('buttons-4').style.visibility='hidden';
		document.getElementById('repeat').style.visibility='hidden';

		if (document.getElementById('CallInput').value === "") {
			// If the value is empty, enable the button
			document.getElementById('voice-1').disabled = true;
			document.getElementById('morseCode-1').disabled = true;
		  }else{
			document.getElementById('voice-1').disabled = false;
			document.getElementById('morseCode-1').disabled = false;
		  }

	})
}

function ButtonClicked2(){
	const urgency= document.getElementById('button-2');
console.log(urgency.textContent)
	document.getElementById('SS-2').innerHTML = urgency.textContent;
	document.getElementById('SS-3').innerHTML = urgency.textContent;
	document.getElementById('SS-selected').style.visibility = "visible";

	document.getElementById('submit').addEventListener('click',function(){
		document.getElementById('SS-selected').style.visibility='hidden';
		document.getElementById('select1').style.visibility='hidden';
		document.getElementById('select2').style.visibility='visible';
		document.getElementById('select3').style.visibility='hidden';
		document.getElementById('select4').style.visibility='hidden';
		document.getElementById('buttons').style.visibility='hidden';
		document.getElementById('buttons-2').style.visibility='visible';
		document.getElementById('buttons-3').style.visibility='hidden';
		document.getElementById('buttons-4').style.visibility='hidden';
		document.getElementById('repeat').style.visibility='hidden';


		if (document.getElementById('UrgencyInput').value === "") {
			// If the value is empty, enable the button
			document.getElementById('voice-11').disabled = true;
			document.getElementById('morseCode-11').disabled = true;
		  }else{
			document.getElementById('voice-11').disabled = false;
			document.getElementById('morseCode-11').disabled = false;
		  }

	})

}
  	

function ButtonClicked3(){
	const safety= document.getElementById('button-3');
console.log(safety.textContent)
	document.getElementById('SS-2').innerHTML = safety.textContent;
	document.getElementById('SS-3').innerHTML = safety.textContent;
	document.getElementById('SS-selected').style.visibility = "visible";

	document.getElementById('submit').addEventListener('click',function(){
		document.getElementById('SS-selected').style.visibility='hidden';
		document.getElementById('select1').style.visibility='hidden';
		document.getElementById('select2').style.visibility='hidden';
		document.getElementById('select3').style.visibility='visible';
		document.getElementById('select4').style.visibility='hidden';
		document.getElementById('buttons').style.visibility='hidden';
		document.getElementById('buttons-2').style.visibility='hidden';
		document.getElementById('buttons-3').style.visibility='visible';
		document.getElementById('buttons-4').style.visibility='hidden';
		document.getElementById('repeat').style.visibility='hidden';

		if (document.getElementById('safetyInput').value === "") {
			// If the value is empty, enable the button
			document.getElementById('voice-12').disabled = true;
			document.getElementById('morseCode-12').disabled = true;
		  }else{
			document.getElementById('voice-12').disabled = false;
			document.getElementById('morseCode-12').disabled = false;
		  }


	})


}
  
function ButtonClicked4(){
	const test= document.getElementById('button-4');
console.log(test.textContent)
	document.getElementById('SS-2').innerHTML = test.textContent;
	document.getElementById('SS-3').innerHTML = test.textContent;
	document.getElementById('SS-selected').style.visibility = "visible";

	document.getElementById('submit').addEventListener('click',function(){
		document.getElementById('SS-selected').style.visibility='hidden';
		document.getElementById('select1').style.visibility='hidden';
		document.getElementById('select2').style.visibility='hidden';
		document.getElementById('select3').style.visibility='hidden';
		document.getElementById('select4').style.visibility='visible';
		document.getElementById('buttons').style.visibility='hidden';
		document.getElementById('buttons-2').style.visibility='hidden';
		document.getElementById('buttons-3').style.visibility='hidden';
		document.getElementById('buttons-4').style.visibility='visible';
		document.getElementById('repeat').style.visibility='hidden';


		if (document.getElementById('testInput').value === "") {
			// If the value is empty, enable the button
			document.getElementById('voice-13').disabled = true;
			document.getElementById('morseCode-13').disabled = true;
		  }else{
			document.getElementById('voice-13').disabled = false;
			document.getElementById('morseCode-13').disabled = false;
		  }

	})


}

// Wait for the voices to be loaded
// window.speechSynthesis.onvoiceschanged = function() {
// 	// Get the list of available voices
// 	var voices = window.speechSynthesis.getVoices();
  
// 	// Log information about each voice
// 	voices.forEach(function(voice, index) {
// 	  console.log("Voice " + index + ":");
// 	  console.log("  Name: " + voice.name);
// 	  console.log("  Lang: " + voice.lang);
// 	  console.log("  Default: " + voice.default);
// 	  console.log("  Local Service: " + voice.localService);
// 	  console.log("  URI: " + voice.voiceURI);
// 	  console.log("--------------------------");
// 	});
//   };
  

function DistressSignals(){
	// document.getElementById('voice-1').addEventListener('click',function(){
	// 	document.getElementById('morseCode-2').innerHTML="";
	// })
	
	document.getElementById('morseCode-2').innerHTML="";
	document.getElementById('morseCode-3').innerHTML="";
	document.getElementById('clickHere-1').style.visibility = 'hidden';
	document.getElementById('clickExample').style.visibility = 'hidden';
	document.getElementById('deCallsign').style.visibility = 'hidden';
	document.getElementById('sos').style.visibility = 'hidden';
	document.getElementById('morseCode-1').disabled = true;

	
	document.getElementById('CallInput').addEventListener('change',function(event){
		console.log('hello1')
		if(document.getElementById('CallInput').value === "")
	{
		document.getElementById('voice-1').disabled = true;
			document.getElementById('morseCode-1').disabled = true;
	}
		document.getElementById('voice-2').innerHTML="";
		document.getElementById('repeat').style.visibility='hidden';
	document.getElementById('morseExp').style.visibility = 'hidden';
	document.getElementById('clickHere-1').style.visibility = 'hidden';
	document.getElementById('clickExample').style.visibility = 'hidden';
	document.getElementById('deCallsign').style.visibility = 'hidden';
	document.getElementById('sos').style.visibility = 'hidden';
	document.getElementById('voice-1').disabled = false;
			document.getElementById('morseCode-1').disabled = false;
	


	});
	document.getElementById('repeat').style.visibility='hidden';
	document.getElementById('morseExp').style.visibility = 'hidden';


	

	// var distressSelect = document.getElementById('select1');
	// distressSelect.style.visibility='visible';
	
	const callSign ={
		"medical":{text:"VU2ABC",more:"Medical Emergency on board Requesting immediate assistance "},
		"fire":{text:"VU2ABC",more:"Fire on Board, unable to control Immediate Assistance Required"},
		"weather":{text:"VU2ABC", more:"Severe weather damage, taking on water Immediate Assistance needed"},
		"aircraft":{text:"VU2ABC",more:"Engine failure declaring an emergency Altitude ten thousand feet,position thirty five degrees fifiteen minutes north Requesting immediate assistance"}
	}
	const callSign1 ={
		"medical":{text:"VU2ABC",more:"_Medical Emergency on board _Requesting immediate assistance "},
		"fire":{text:"VU2ABC",more:"_Fire on Board, unable to control _Immediate Assistance Required"},
		"weather":{text:"VU2ABC", more:"_Severe weather damage, taking on water _Immediate Assistance needed"},
		"aircraft":{text:"VU2ABC",more:"_Engine failure declaring an emergency _Altitude 10,000 feet,position 35 degrees 15minutes north _Requesting immediate assistance"}
	}
	var select1 = document.getElementById('CallInput');

	var selectedOption = select1.value;
	let distress1 = callSign[selectedOption].text;
	let distress2 = callSign[selectedOption].more;
	let distressmessage1=callSign1[selectedOption].text;
	let distressmessage2=callSign1[selectedOption].more;
	console.log(selectedOption);
	console.log(distress1)

     
	console.log('clicked');
		document.getElementById('repeat').style.visibility='hidden';
		document.getElementById('CallInput').disabled = true;
		document.getElementById('voice-1').disabled = true;
		
		
		const voiceElement=document.getElementById('voice-2');
		voiceElement.innerHTML="";
		
	  if ('speechSynthesis' in window) {
		const maydayText = "MAYDAY MAYDAY MAYDAY";
		const additionalText = "This is "+distress1 
		const additionalText0 = distress2;
        const additionalText1= "_This is " +distressmessage1;
		const additionalText2= "This is " +distressmessage1;
		const Ad = distressmessage2;
		const fullText = maydayText + ' ' + additionalText1 +','+ additionalText2 + ',' +additionalText2 +Ad;
		// const fullText1 = maydayText + additionalText + additionalText + additionalText +additionalText0;
		console.log(fullText);
		// document.getElementById('voice-2').innerHTML += fullText;
		var currentIndex = 0;

// Set interval to add one letter at a time
var intervalId = setInterval(function() {
  // Add the next letter to the element's HTML
  voiceElement.innerHTML += fullText[currentIndex].replace(/\_/g, '<br>');

  // Increment the index
  currentIndex++;

  // Check if all letters have been added
  if (currentIndex === fullText.length) {
    // Clear the interval when all letters are added
    clearInterval(intervalId);
  }
}, 95); // Adjust the interval (in milliseconds) as needed
		
		const utteranceMayday = new SpeechSynthesisUtterance(maydayText);
		utteranceMayday.lang = 'en-US';
		utteranceMayday.rate =0.8;
	  
		const voices = speechSynthesis.getVoices();
		utteranceMayday.voice = voices.find(voice => voice.lang === 'en-us');
		
		// utteranceMayday.voice = voices[2];
		utteranceMayday.onstart = () => console.log('Speech synthesis started for MAYDAY');
		utteranceMayday.onend = () => {
		  console.log('Speech synthesis ended for MAYDAY');
		  // Speak the additional text after MAYDAY
		  speakAdditionalText();
		};
		utteranceMayday.onerror = (event) => console.error('Speech synthesis error for MAYDAY', event.error);
	  
		speechSynthesis.speak(utteranceMayday);
	   
		function speakAdditionalText() {
		  const utteranceAdditional = new SpeechSynthesisUtterance(additionalText);
		  utteranceAdditional.lang = 'en-US';
		  utteranceAdditional.rate = 0.8;
	  
		  utteranceAdditional.voice = voices.find(voice => voice.lang === 'en-US');
		  let repetitionCount = 0;
		  utteranceAdditional.onstart = () => console.log('Speech synthesis started for additional text');
		  utteranceAdditional.onend = () => {

			repetitionCount++;
			if (repetitionCount < 3) {
				// Repeat the speech synthesis for additionalText
				speechSynthesis.speak(utteranceAdditional);
			  } 
			  else {
			console.log('Speech synthesis ended for additional text');
			// document.getElementById('repeat').style.visibility='visible';
			// document.getElementById('CallInput').disabled = false;
			// document.getElementById('voice-1').disabled = false;
			speakAdditionalText0();

			  }
			// speakAdditionalText0
		};

		  utteranceAdditional.onerror = (event) => console.error('Speech synthesis error for additional0 text', event.error);
	  
		  // Speak the additional text
		  speechSynthesis.speak(utteranceAdditional);
		}
		function speakAdditionalText0() {
			const utteranceAdditional0 = new SpeechSynthesisUtterance(additionalText0);
			utteranceAdditional0.lang = 'en-US';
			utteranceAdditional0.rate = 0.8;
		
			utteranceAdditional0.voice = voices.find(voice => voice.lang === 'en-US');
			
			utteranceAdditional0.onstart = () => console.log('Speech synthesis started for additional text');
			utteranceAdditional0.onend = () => {
  
			 
			  console.log('Speech synthesis ended for additional text');
			  document.getElementById('repeat').style.visibility='visible';
			  document.getElementById('CallInput').disabled = false;
			  document.getElementById('voice-1').disabled = false;
			  document.getElementById('morseCode-1').disabled = false;

				
		  };
  
			utteranceAdditional0.onerror = (event) => console.error('Speech synthesis error for additional text', event.error);
		
			// Speak the additional text
			speechSynthesis.speak(utteranceAdditional0);
		  }
	  } else {
		console.error('Speech synthesis is not supported in this browser.');
		document.getElementById('CallInput').disabled = false;
		document.getElementById('voice-1').disabled = false;
	document.getElementById('morseCode-1').disabled = false;

	  }	
}
function distressChange()
{
	if (document.getElementById('CallInput').value === "") {
		document.getElementById('voice-1').disabled = true;
		document.getElementById('morseCode-1').disabled = true;
	  }else{
		document.getElementById('voice-1').disabled = false;
		document.getElementById('morseCode-1').disabled = false;
	  }
}

//distress morse code reference start here 

function morseVoice() {
	// document.getElementById('morseExp').style.visibility = 'hidden';
    document.getElementById('sos').style.visibility = 'hidden';
    document.getElementById('clickHere-1').style.visibility = 'hidden';
	document.getElementById('clickExample').style.visibility = 'hidden';

    document.getElementById('deCallsign').style.visibility = 'hidden';
	document.getElementById('repeat').style.visibility = 'hidden';
	document.getElementById('morseCode-3').style.visibility = 'hidden';


 


    document.getElementById("voice-2").innerHTML = "";
    document.getElementById('voice-1').disabled = true;
	document.getElementById('morseCode-1').disabled = true;



    var select1 = document.getElementById('CallInput');
	
    var selectedOption = select1.value;
    document.getElementById('CallInput').addEventListener('change', function () {
		console.log('hello2')

		if(document.getElementById('CallInput').value === "")
	{
		document.getElementById('voice-1').disabled = true;
		document.getElementById('morseCode-1').disabled = true;
	}
        document.getElementById('morseCode-2').innerHTML = "";
        document.getElementById('morseCode-3').innerHTML = "";
		document.getElementById('clickHere-1').style.visibility = 'hidden';
	document.getElementById('clickExample').style.visibility = 'hidden';

		document.getElementById('deCallsign').style.visibility = 'hidden';
		document.getElementById('sos').style.visibility = 'hidden';
        document.getElementById('repeat').style.visibility = 'hidden';
		
    });

    const callSign2 = {
        "medical": { text: "SOS", morse: "...---... ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
        "fire": { text: "SOS", morse: "...---... ", D: "-..", E: ".", VU:"...- ..- ..--- .- -... -.-." },
        "weather": { text: "SOS", morse: "...---... ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-."  },
        "aircraft": { text: "SOS", morse: "...---... ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." }
    };

    const morsedisplaySOS = document.getElementById('morseCode-2');
    const morsedisplayDE = document.getElementById('morseCode-3');
    const intervalDuration = 300;  // 1 second interval
    const pauseDuration = 800;  // 800 mili-second pause
    let morseCodeStringSOS = callSign2[selectedOption].morse;
    let morseCodeStringDE = callSign2[selectedOption].D + ' ' + callSign2[selectedOption].E + ' ' + callSign2[selectedOption].VU + ' ';
    let currentIndexSOS = 0;
    let currentIndexDE = 0;
    let repeatCount = 0;

    function playMorse(displayElement, morseCodeString, currentIndex) {
		// document.getElementById('morseCode-1').disabled = true;
		document.getElementById('CallInput').disabled = true;



        if (currentIndex < morseCodeString.length) {
            const currentChar = morseCodeString[currentIndex];

            if (currentChar === ' ') {
                displayElement.innerHTML += '  ';  // Display space between Morse code elements
                currentIndex++;  // Move to the next character
                playMorse(displayElement, morseCodeString, currentIndex);  // Continue immediately after space
            } else {
                const context = new AudioContext();
                const oscillator = context.createOscillator();
                oscillator.frequency.value = 600;
                oscillator.connect(context.destination);

                oscillator.start(context.currentTime);

                if (currentChar === '.') {
                    oscillator.stop(context.currentTime + 0.1);  // Adjust duration for dot
                } else if (currentChar === '-') {
                    oscillator.stop(context.currentTime + 0.3);  // Adjust duration for dash
                }

                displayElement.innerHTML += currentChar;
                console.log(currentChar);

                setTimeout(function () {
                    oscillator.disconnect();
                    context.close();
                    playMorse(displayElement, morseCodeString, currentIndex + 1);
                }, intervalDuration);
            }
        } else {
            // Reset index for next iteration
            repeatCount++;

            // Check if we have played SOS two times
            if (repeatCount <= 2) {
                playMorse(morsedisplaySOS, morseCodeStringSOS, 0);
            }
            // Check if we have played DE three times
           
             else {
                console.log("Finished playing");
                document.getElementById('sos').style.visibility = 'visible';
                document.getElementById('repeat').style.visibility = 'visible';
				document.getElementById('clickHere-1').style.visibility = 'visible';
				document.getElementById('repeat').style.visibility = 'visible';
				document.getElementById('clickExample').style.visibility = 'visible';

                document.getElementById('voice-1').disabled = false;
				document.getElementById('morseCode-1').disabled = false;
				document.getElementById('CallInput').disabled = false;


            }
        }
    }

    // Clear the displayed text
    morsedisplaySOS.innerHTML = '';
   

    // Start playing SOS Morse code
    playMorse(morsedisplaySOS, morseCodeStringSOS, 0);
	// document.getElementById('ClickExample').addEventListener('click', function(){
	// 	playMorse(morsedisplayDE,morseCodeStringDE, 0);
	// })
}
function playMorseDE() {
	document.getElementById('clickExample').style.visibility = 'hidden';


    document.getElementById('deCallsign').style.visibility = 'visible';
	document.getElementById('repeat').style.visibility = 'hidden';
	document.getElementById('morseCode-3').style.visibility = 'visible';


	document.getElementById('clickExample').disabled = true;


    let repeatCount = 0;
    const pauseDuration = 800;  // 800 mili-second pause


	var select1 = document.getElementById('CallInput');
    var selectedOption = select1.value;
    document.getElementById('CallInput').addEventListener('change', function () {
        document.getElementById('morseCode-2').innerHTML = "";
        document.getElementById('morseCode-3').innerHTML = "";
        document.getElementById('repeat').style.visibility = 'hidden';
		document.getElementById('clickHere-1').style.visibility = 'hidden';

    });

    const callSign2 = {
        "medical":  { text: "SOS", morse: "...---... ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
        "fire":     { text: "SOS", morse: "...---... ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
        "weather":  { text: "SOS", morse: "...---... ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
        "aircraft": { text: "SOS", morse: "...---... ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." }
    };
    const morsedisplayDE = document.getElementById('morseCode-3');
    const intervalDuration = 300;  // 1 second interval
    let morseCodeStringDE = callSign2[selectedOption].D + ' ' + callSign2[selectedOption].E + ' ' + callSign2[selectedOption].VU + ' ';
    function playMorse(displayElement, morseCodeString, currentIndex) {
		document.getElementById('clickExample-1').style.visibility = 'hidden';
		document.getElementById('voice-1').disabled = true;
        document.getElementById('morseCode-1').disabled = true;
        document.getElementById('CallInput').disabled = true;

        if (currentIndex < morseCodeString.length) {
            const currentChar = morseCodeString[currentIndex];

            if (currentChar === ' ') {
                displayElement.innerHTML += '  ';  // Display space between Morse code elements
                currentIndex++;  // Move to the next character
                playMorse(displayElement, morseCodeString, currentIndex);  // Continue immediately after space
            } else {
                const context = new AudioContext();
                const oscillator = context.createOscillator();
                oscillator.frequency.value = 600;
                oscillator.connect(context.destination);

                oscillator.start(context.currentTime);

                if (currentChar === '.') {
                    oscillator.stop(context.currentTime + 0.1);  // Adjust duration for dot
                } else if (currentChar === '-') {
                    oscillator.stop(context.currentTime + 0.3);  // Adjust duration for dash
                }

                displayElement.innerHTML += currentChar;

                setTimeout(function () {
                    oscillator.disconnect();
                    context.close();
                    playMorse(displayElement, morseCodeString, currentIndex + 1);
                }, intervalDuration);
            }
        } else {
            // Reset index for next iteration
            repeatCount++;

            // Check if we have played SOS two times
            if (repeatCount <= 2) {
                 // Add a line break before starting DE
				 morsedisplayDE.innerHTML += '<br>';
				 setTimeout(function () {
					 playMorse(morsedisplayDE, morseCodeStringDE, 0);
				 }, pauseDuration);
            }
            // Check if we have played DE three times
           
             else {
                console.log("Finished playing");
                // document.getElementById('morseExp').style.visibility = 'visible';
                document.getElementById('repeat').style.visibility = 'visible';
                document.getElementById('voice-1').disabled = false;
				document.getElementById('morseCode-1').disabled = false;
				document.getElementById('CallInput').disabled = false;
				document.getElementById('clickExample').disabled = false;

				document.getElementById('clickExample').style.visibility= 'visible';


            }
        }
    }

    morsedisplayDE.innerHTML = '';
    playMorse(morsedisplayDE, morseCodeStringDE, 0);
}



//distress morse code reference end here 
 
 

function urgencySignal(){
	document.getElementById('xxx').style.visibility = 'hidden';
    
    document.getElementById('clickHere-2').style.visibility = 'hidden';
    document.getElementById('clickExample-1').style.visibility = 'hidden';



    document.getElementById('deCallsign').style.visibility = 'hidden';
	document.getElementById('repeat').style.visibility = 'hidden';
	document.getElementById('morseCode-3').style.visibility = 'hidden';
	document.getElementById('morseCode-21').innerHTML="";



 


    document.getElementById("voice-21").innerHTML = "";




	document.getElementById('UrgencyInput').addEventListener('change',function(){
		document.getElementById('voice-21').innerHTML="";
		document.getElementById('repeat').style.visibility='hidden';
		document.getElementById('voice-11').disabled = false;
		document.getElementById('morseCode-11').disabled = false;

	});

	document.getElementById('repeat').style.visibility='hidden';


	

	document.getElementById('repeat').style.visibility='hidden';


		document.getElementById('UrgencyInput').disabled = true;
		document.getElementById('voice-11').disabled = true;
	document.getElementById('morseCode-11').disabled = true;


		var select2 = document.getElementById('UrgencyInput');
		const callSign ={
			"medical":{text:"VU2ABC",more:"We have a medical emergency. One member has suffered a severe injury approximately 3 kilometers southeast of San Francisco. Requesting medical assistance and guidance. " },
			"fuel":{text:"VU2ABC",more:" on vessel Sea Voyager. Low fuel levels, and we anticipate running out within the next hour. Requesting assistance or guidance on the nearest available refueling point."},
			"navigation":{text:"VU2ABC", more:" on vessel Ocean Explorer. We are currently navigating through heavy fog, and our GPS navigation system has malfunctioned. Requesting assistance or guidance on safe navigation procedures in these conditions."},
			"Remote":{text:"VU2ABC",more:" in a remote research site. We are experiencing a complete communication failure. Unable to contact support team or access critical data. Requesting technical assistance or alternative communication solutions. "}
			
		}
		const callSign1 ={
			"medical":{text:"VU2ABC",more:"_We have a medical emergency. One member has suffered a severe injury approximately 3 kilometers southeast of San Francisco. _Requesting medical assistance and guidance. " },
			"fuel":{text:"VU2ABC",more:" on vessel Sea Voyager. _Low fuel levels, and we anticipate running out within the next hour. _Requesting assistance or guidance on the nearest available refueling point."},
			"navigation":{text:"VU2ABC", more:" on vessel Ocean Explorer. _We are currently navigating through heavy fog, _and our GPS navigation system has malfunctioned. _Requesting assistance or guidance on safe navigation _procedures in these conditions."},
			"Remote":{text:"VU2ABC",more:" in a remote research site. _We are experiencing a complete communication failure. _Unable to contact support team or access critical data. _Requesting technical assistance or alternative communication solutions. "}
			
		}
		var selectedOption = select2.value;
		let urgency1 = callSign[selectedOption].text;
		let urgency2 = callSign[selectedOption].more;
		let urgencymessage1=callSign1[selectedOption].text;
		let urgencymessage2=callSign1[selectedOption].more;
		console.log(selectedOption);
		// console.log(distress1)
	
		console.log(urgency1)
		const voiceElement=document.getElementById('voice-21');
		voiceElement.innerHTML="";
	 if ('speechSynthesis' in window) {
		const PANPANText = "PANPAN PANPAN PANPAN";
		const additionalText = "This is "+urgency1;
		// const fullText = PANPANText + ' ' + additionalText;
		const additionalText0 = urgency2;
        const additionalText1= "_This is " +urgencymessage1;
		const additionalText2= "This is " +urgencymessage1;
		const Ad = urgencymessage2;
		const fullText = PANPANText + ' ' + additionalText1 +','+ additionalText2 + ',' +additionalText2 +Ad;
		console.log(fullText);
		// document.getElementById('voice-2').innerHTML += fullText;
		var currentIndex = 0;

// Set interval to add one letter at a time
var intervalId = setInterval(function() {
  // Add the next letter to the element's HTML
  voiceElement.innerHTML += fullText[currentIndex].replace(/\_/g, '<br>');

  // Increment the index
  currentIndex++;

  // Check if all letters have been added
  if (currentIndex === fullText.length) {
    // Clear the interval when all letters are added
    clearInterval(intervalId);
  }
}, 106); // Adjust the interval (in milliseconds) as needed
		
		const utterancePanday = new SpeechSynthesisUtterance(PANPANText);
		utterancePanday.lang = 'en-US';
		utterancePanday.rate =0.8;
	  
		const voices = speechSynthesis.getVoices();
		utterancePanday.voice = voices.find(voice => voice.lang === 'en-us');
		
		// utteranceMayday.voice = voices[2];
		utterancePanday.onstart = () => console.log('Speech synthesis started for PANPAN');
		utterancePanday.onend = () => {
		  console.log('Speech synthesis ended for PANPAN');
		  // Speak the additional text after MAYDAY
		  speakAdditionalText();
		};
		utterancePanday.onerror = (event) => console.error('Speech synthesis error for PANPAN', event.error);
	  
		speechSynthesis.speak(utterancePanday);
	   
		function speakAdditionalText() {
		  const utteranceAdditional = new SpeechSynthesisUtterance(additionalText);
		  utteranceAdditional.lang = 'en-US';
		  utteranceAdditional.rate = 0.8;
	  
		  utteranceAdditional.voice = voices.find(voice => voice.lang === 'en-US');
		  let repetitionCount = 0;
		  utteranceAdditional.onstart = () => console.log('Speech synthesis started for additional text');
		  utteranceAdditional.onend = () => {

			repetitionCount++;
			if (repetitionCount < 3) {
				// Repeat the speech synthesis for additionalText
				speechSynthesis.speak(utteranceAdditional);
			  } 
			  else {
			console.log('Speech synthesis ended for additional text');
			// document.getElementById('repeat').style.visibility='visible';
			// document.getElementById('CallInput').disabled = false;
			// document.getElementById('voice-1').disabled = false;
			speakAdditionalText0();

			  }
			// speakAdditionalText0
		};

		  utteranceAdditional.onerror = (event) => console.error('Speech synthesis error for additional0 text', event.error);
	  
		  // Speak the additional text
		  speechSynthesis.speak(utteranceAdditional);
		}
		function speakAdditionalText0() {
			const utteranceAdditional0 = new SpeechSynthesisUtterance(additionalText0);
			utteranceAdditional0.lang = 'en-US';
			utteranceAdditional0.rate = 0.8;
		
			utteranceAdditional0.voice = voices.find(voice => voice.lang === 'en-US');
			
			utteranceAdditional0.onstart = () => console.log('Speech synthesis started for additional text');
			utteranceAdditional0.onend = () => {
  
			 
			  console.log('Speech synthesis ended for additional text');
			  document.getElementById('repeat').style.visibility='visible';
			  document.getElementById('UrgencyInput').disabled = false;
			  document.getElementById('voice-11').disabled = false;
			  document.getElementById('morseCode-11').disabled = false;
				
		  };
  
			utteranceAdditional0.onerror = (event) => console.error('Speech synthesis error for additional text', event.error);
		
			// Speak the additional text
			speechSynthesis.speak(utteranceAdditional0);
		  }
	  }else {
		console.error('Speech synthesis is not supported in this browser.');
		document.getElementById('UrgencyInput').disabled = false;
		document.getElementById('voice-11').disabled = false;
		document.getElementById('morseCode-11').disabled = false;

	  }
}
function urgencyChange()
{ 
	if (document.getElementById('UrgencyInput').value === "") {
	document.getElementById('voice-11').disabled = true;
	document.getElementById('morseCode-11').disabled = true;
  }else{
	document.getElementById('voice-11').disabled = false;
	document.getElementById('morseCode-11').disabled = false;
  }
}
//urgency morse code reference start 
function morseVoiceUrgency() {
	// document.getElementById('morseExp').style.visibility = 'hidden';
    document.getElementById('xxx').style.visibility = 'hidden';
    
    document.getElementById('clickHere-2').style.visibility = 'hidden';
    document.getElementById('clickExample-1').style.visibility = 'hidden';



    document.getElementById('deCallsign').style.visibility = 'hidden';
	document.getElementById('repeat').style.visibility = 'hidden';
	document.getElementById('morseCode-3').style.visibility = 'hidden';


 


    document.getElementById("voice-21").innerHTML = "";
    document.getElementById('voice-11').disabled = true;


    var select1 = document.getElementById('UrgencyInput');
    var selectedOption = select1.value;
    document.getElementById('UrgencyInput').addEventListener('change', function () {
        document.getElementById('morseCode-21').innerHTML = "";
        document.getElementById('morseCode-31').innerHTML = "";
		document.getElementById('clickHere-2').style.visibility = 'hidden';
		document.getElementById('deCallsign').style.visibility = 'hidden';
		document.getElementById('xxx').style.visibility = 'hidden';
        document.getElementById('repeat').style.visibility = 'hidden';
		document.getElementById('clickExample-1').style.visibility = 'hidden';

    });

    const callSign2 = {
        "medical": { text: "xxx", morse: "-..--..--..- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
        "fuel": { text: "xxx", morse: "-..--..--..- ", D: "-..", E: ".", VU:"...- ..- ..--- .- -... -.-." },
        "navigation": { text: "xxx", morse: "-..--..--..- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-."  },
        "Remote": { text: "xxx", morse: "-..--..--..- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." }
    };

    const morsedisplayxxx = document.getElementById('morseCode-21');
    const morsedisplayDE = document.getElementById('morseCode-3');
    const intervalDuration = 300;  // 1 second interval
    const pauseDuration = 800;  // 800 mili-second pause
    let morseCodeStringxxx = callSign2[selectedOption].morse;
    let morseCodeStringDE = callSign2[selectedOption].D + ' ' + callSign2[selectedOption].E + ' ' + callSign2[selectedOption].VU + ' ';
    let currentIndexSOS = 0;
    let currentIndexDE = 0;
    let repeatCount = 0;

    function playMorse(displayElement, morseCodeString, currentIndex) {
		document.getElementById('morseCode-11').disabled = true;
		document.getElementById('UrgencyInput').disabled = true;


		
		if (currentIndex < morseCodeString.length) {
            const currentChar = morseCodeString[currentIndex];

            if (currentChar === ' ') {
                displayElement.innerHTML += '  ';  // Display space between Morse code elements
                currentIndex++;  // Move to the next character
                playMorse(displayElement, morseCodeString, currentIndex);  // Continue immediately after space
            } else {
                const context = new AudioContext();
                const oscillator = context.createOscillator();
                oscillator.frequency.value = 600;
                oscillator.connect(context.destination);

                oscillator.start(context.currentTime);

                if (currentChar === '.') {
                    oscillator.stop(context.currentTime + 0.1);  // Adjust duration for dot
                } else if (currentChar === '-') {
                    oscillator.stop(context.currentTime + 0.3);  // Adjust duration for dash
                }

                displayElement.innerHTML += currentChar;

                setTimeout(function () {
                    oscillator.disconnect();
                    context.close();
                    playMorse(displayElement, morseCodeString, currentIndex + 1);
                }, intervalDuration);
            }
        } else {
            // Reset index for next iteration
            repeatCount++;

            // Check if we have played xxx two times
            if (repeatCount <= 2) {
                
				setTimeout(function () {
					playMorse(morsedisplayxxx, morseCodeStringxxx, 0);
				}, pauseDuration);
            }
          
           
             else {
                console.log("Finished playing");
                document.getElementById('xxx').style.visibility = 'visible';
                document.getElementById('repeat').style.visibility = 'visible';
				document.getElementById('clickHere-2').style.visibility = 'visible';
				document.getElementById('repeat').style.visibility = 'visible';
				document.getElementById('clickExample-1').style.visibility = 'visible';


                document.getElementById('voice-11').disabled = false;
				document.getElementById('morseCode-11').disabled = false;
				document.getElementById('UrgencyInput').disabled = false;

            }
        }
    }

    // Clear the displayed text
    morsedisplayxxx.innerHTML = '';
   

    // Start playing xx Morse code
    playMorse(morsedisplayxxx, morseCodeStringxxx, 0);
	// document.getElementById('ClickExample').addEventListener('click', function(){
	// 	playMorse(morsedisplayDE,morseCodeStringDE, 0);
	// })
}
function playMorseUDE() {
    document.getElementById('deCallsign').style.visibility = 'visible';
	document.getElementById('repeat').style.visibility = 'hidden';
	document.getElementById('morseCode-3').style.visibility = 'visible';




    let repeatCount = 0;
    const pauseDuration = 800;  // 800 mili-second pause


	var select1 = document.getElementById('UrgencyInput');
    var selectedOption = select1.value;
    document.getElementById('UrgencyInput').addEventListener('change', function () {
        document.getElementById('morseCode-2').innerHTML = "";
        document.getElementById('morseCode-3').innerHTML = "";
        document.getElementById('repeat').style.visibility = 'hidden';
		document.getElementById('clickHere-1').style.visibility = 'hidden';

    });

	const callSign2 = {
        "medical": { text: "xxx", morse: "−··−−··−−··− ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
        "fuel": { text: "xxx", morse: "−··−−··−−··− ", D: "-..", E: ".", VU:"...- ..- ..--- .- -... -.-." },
        "navigation": { text: "xxx", morse: "−··−−··−−··−", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-."  },
        "Remote": { text: "xxx", morse: "−··−−··−−··−", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." }
    };

    const morsedisplayDE = document.getElementById('morseCode-3');
    const intervalDuration = 300;  // 1 second interval
    let morseCodeStringDE = callSign2[selectedOption].D + ' ' + callSign2[selectedOption].E + ' ' + callSign2[selectedOption].VU + ' ';
    function playMorse(displayElement, morseCodeString, currentIndex) {
		document.getElementById('clickExample-1').style.visibility = 'hidden';
		document.getElementById('voice-11').disabled = true;
        document.getElementById('morseCode-11').disabled = true;
        document.getElementById('UrgencyInput').disabled = true;

        if (currentIndex < morseCodeString.length) {
            const currentChar = morseCodeString[currentIndex];

            if (currentChar === ' ') {
                displayElement.innerHTML += '  ';  // Display space between Morse code elements
                currentIndex++;  // Move to the next character
                playMorse(displayElement, morseCodeString, currentIndex);  // Continue immediately after space
            } else {
                const context = new AudioContext();
                const oscillator = context.createOscillator();
                oscillator.frequency.value = 600;
                oscillator.connect(context.destination);

                oscillator.start(context.currentTime);

                if (currentChar === '.') {
                    oscillator.stop(context.currentTime + 0.1);  // Adjust duration for dot
                } else if (currentChar === '-') {
                    oscillator.stop(context.currentTime + 0.3);  // Adjust duration for dash
                }

                displayElement.innerHTML += currentChar;

                setTimeout(function () {
                    oscillator.disconnect();
                    context.close();
                    playMorse(displayElement, morseCodeString, currentIndex + 1);
                }, intervalDuration);
            }
        } else {
            // Reset index for next iteration
            repeatCount++;

            // Check if we have played SOS two times
            if (repeatCount <= 2) {
                 // Add a line break before starting DE
				 morsedisplayDE.innerHTML += '<br>';
				 setTimeout(function () {
					 playMorse(morsedisplayDE, morseCodeStringDE, 0);
				 }, pauseDuration);
            }
            // Check if we have played DE three times
           
             else {
                console.log("Finished playing");
                // document.getElementById('morseExp').style.visibility = 'visible';
                document.getElementById('repeat').style.visibility = 'visible';
                document.getElementById('voice-11').disabled = false;
				document.getElementById('morseCode-11').disabled = false;
				document.getElementById('UrgencyInput').disabled = false;
				document.getElementById('clickExample-1').style.visibility= 'visible';


            }
        }
    }

    morsedisplayDE.innerHTML = '';
    playMorse(morsedisplayDE, morseCodeStringDE, 0);
}

//urgency morse code reference end

function safetySignal(){
	document.getElementById('ttt').style.visibility = 'hidden';
	document.getElementById('morseCode-22').innerHTML="";
	

	document.getElementById('safetyInput').addEventListener('change',function(){
		document.getElementById('voice-22').innerHTML="";
		document.getElementById('repeat').style.visibility='hidden';

	});
	document.getElementById('repeat').style.visibility='hidden';

	document.getElementById('repeat').style.visibility='hidden';

		document.getElementById('safetyInput').disabled = true;
		document.getElementById('voice-12').disabled = true;
		document.getElementById('morseCode-12').disabled = true;

	
		var select3 = document.getElementById('safetyInput');
		const callSign ={
			"wheather":{text:"VU2ABC",more:" in coastal area. Severe weather warning in effect. Strong winds and heavy rain expected in the next hour. All operators are advised to secure their equipment and seek safe shelter."},
			"medical":{text:"VU2ABC", more:" reporting a medical emergency. A team member is injured and requires immediate medical assistance."},
			"natural":{text:"VU2ABC", more:" issuing a tsunami warning. Coastal areas advised to evacuate immediately."},
			"power":{text:"VU2ABC", more:" informing of a power outage in the area. All operators are advised to conserve battery power and limit transmissions. "}
			
		}
		const callSign1 ={
			"wheather":{text:"VU2ABC",more:" in coastal area. _Severe weather warning in effect._Strong winds and heavy rain expected in the next hour._All operators are advised to secure their equipment and seek safe shelter."},
			"medical":{text:"VU2ABC", more:" _Reporting a medical emergency._A team member is injured and requires _immediate medical assistance."},
			"natural":{text:"VU2ABC", more:" issuing a tsunami warning._Coastal areas advised to evacuate immediately."},
			"power":{text:"VU2ABC", more:" _Informing of a power outage in the area._All operators are advised to conserve battery power and limit transmissions. "}
			
		}
		var selectedOption = select3.value;
		let safety1 = callSign[selectedOption].text;
		let safety2 = callSign[selectedOption].more;
		let safetymessage1 = callSign1[selectedOption].text;
		let safetymessage2 = callSign1[selectedOption].more;

		console.log(selectedOption);
	
		console.log(safety1)
		
		const voiceElement=document.getElementById('voice-22');
		voiceElement.innerHTML="";
	 if ('speechSynthesis' in window) {
		const SECURITEText = "SECURITÉ SECURITÉ SECURITÉ";
		const additionalText = "This is "+safety1;
		// const fullText = PANPANText + ' ' + additionalText;
		const additionalText0 = safety2;
        const additionalText1= "_This is " +safetymessage1;
		const additionalText2= "This is " +safetymessage1;
		const Ad = safetymessage2;
		const fullText = SECURITEText + ' ' + additionalText1 +','+ additionalText2 + ',' +additionalText2 +Ad;
		console.log(fullText);
		// document.getElementById('voice-2').innerHTML += fullText;
		var currentIndex = 0;

// Set interval to add one letter at a time
var intervalId = setInterval(function() {
  // Add the next letter to the element's HTML
  voiceElement.innerHTML += fullText[currentIndex].replace(/\_/g, '<br>');

  // Increment the index
  currentIndex++;

  // Check if all letters have been added
  if (currentIndex === fullText.length) {
    // Clear the interval when all letters are added
    clearInterval(intervalId);
  }
}, 100); // Adjust the interval (in milliseconds) as needed
		
		const utterancesafety = new SpeechSynthesisUtterance(SECURITEText);
		utterancesafety.lang = 'en-US';
		utterancesafety.rate =0.8;
	  
		const voices = speechSynthesis.getVoices();
		utterancesafety.voice = voices.find(voice => voice.lang === 'en-us');
		
		// utteranceMayday.voice = voices[2];
		utterancesafety.onstart = () => console.log('Speech synthesis started for safety');
		utterancesafety.onend = () => {
		  console.log('Speech synthesis ended for safety');
		  // Speak the additional text after MAYDAY
		  speakAdditionalText();
		};
		utterancesafety.onerror = (event) => console.error('Speech synthesis error for safety', event.error);
	  
		speechSynthesis.speak(utterancesafety);
	   
		function speakAdditionalText() {
		  const utteranceAdditional = new SpeechSynthesisUtterance(additionalText);
		  utteranceAdditional.lang = 'en-US';
		  utteranceAdditional.rate = 0.8;
	  
		  utteranceAdditional.voice = voices.find(voice => voice.lang === 'en-US');
		  let repetitionCount = 0;
		  utteranceAdditional.onstart = () => console.log('Speech synthesis started for additional text');
		  utteranceAdditional.onend = () => {

			repetitionCount++;
			if (repetitionCount < 3) {
				// Repeat the speech synthesis for additionalText
				speechSynthesis.speak(utteranceAdditional);
			  } 
			  else {
			console.log('Speech synthesis ended for additional text');
			// document.getElementById('repeat').style.visibility='visible';
			// document.getElementById('CallInput').disabled = false;
			// document.getElementById('voice-1').disabled = false;
			speakAdditionalText0();

			  }
			// speakAdditionalText0
		};

		  utteranceAdditional.onerror = (event) => console.error('Speech synthesis error for additional0 text', event.error);
	  
		  // Speak the additional text
		  speechSynthesis.speak(utteranceAdditional);
		}
		function speakAdditionalText0() {
			const utteranceAdditional0 = new SpeechSynthesisUtterance(additionalText0);
			utteranceAdditional0.lang = 'en-US';
			utteranceAdditional0.rate = 0.8;
		
			utteranceAdditional0.voice = voices.find(voice => voice.lang === 'en-US');
			
			utteranceAdditional0.onstart = () => console.log('Speech synthesis started for additional text');
			utteranceAdditional0.onend = () => {
  
			 
			  console.log('Speech synthesis ended for additional text');
			  document.getElementById('repeat').style.visibility='visible';
			  document.getElementById('safetyInput').disabled = false;
			  document.getElementById('voice-12').disabled = false;
			  document.getElementById('morseCode-12').disabled = false;

		  };
  
			utteranceAdditional0.onerror = (event) => console.error('Speech synthesis error for additional text', event.error);
		
			// Speak the additional text
			speechSynthesis.speak(utteranceAdditional0);
		  }
	  }else {
		console.error('Speech synthesis is not supported in this browser.');
		document.getElementById('safetyInput').disabled = false;
			document.getElementById('voice-11').disabled = false;
	  }

	
}
function safteyChange()
{
	if (document.getElementById('safetyInput').value === "") {
		document.getElementById('voice-12').disabled = true;
		document.getElementById('morseCode-12').disabled = true;
	  }else{
		document.getElementById('voice-12').disabled = false;
		document.getElementById('morseCode-12').disabled = false;
	  }
}
// morse saftey signal start here
function morseVoicesaftey() {
	// document.getElementById('morseExp').style.visibility = 'hidden';
    document.getElementById('ttt').style.visibility = 'hidden';
    
	document.getElementById('repeat').style.visibility = 'hidden';


 


    document.getElementById("voice-22").innerHTML = "";
    document.getElementById('voice-12').disabled = true;


    var select1 = document.getElementById('safetyInput');
    var selectedOption = select1.value;
    document.getElementById('safetyInput').addEventListener('change', function () {
        document.getElementById('morseCode-22').innerHTML = "";
		document.getElementById('clickHere-2').style.visibility = 'hidden';
		document.getElementById('ttt').style.visibility = 'hidden';
		document.getElementById('deCallsign').style.visibility = 'hidden';
		document.getElementById('xxx').style.visibility = 'hidden';
        document.getElementById('repeat').style.visibility = 'hidden';

    });

    const callSign2 = {
        "wheather": { text: "TTT", morse: "--- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
        "medical": { text: "TTT", morse: "--- ", D: "-..", E: ".", VU:"...- ..- ..--- .- -... -.-." },
        "natural": { text: "TTT", morse: "--- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-."  },
        "power": { text: "TTT", morse: "--- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." }
    };

    const morsedisplayttt = document.getElementById('morseCode-22');
    const morsedisplayDE = document.getElementById('morseCode-3');
    const intervalDuration = 300;  // 1 second interval
    const pauseDuration = 800;  // 800 mili-second pause
    let morseCodeStringttt = callSign2[selectedOption].morse;
    let morseCodeStringDE = callSign2[selectedOption].D + ' ' + callSign2[selectedOption].E + ' ' + callSign2[selectedOption].VU + ' ';
    let currentIndexSOS = 0;
    let currentIndexDE = 0;
    let repeatCount = 0;

    function playMorse(displayElement, morseCodeString, currentIndex) {
		document.getElementById('morseCode-12').disabled = true;
		document.getElementById('safetyInput').disabled = true;


		
		if (currentIndex < morseCodeString.length) {
            const currentChar = morseCodeString[currentIndex];

            if (currentChar === ' ') {
                displayElement.innerHTML += '  ';  // Display space between Morse code elements
                currentIndex++;  // Move to the next character
                playMorse(displayElement, morseCodeString, currentIndex);  // Continue immediately after space
            } else {
                const context = new AudioContext();
                const oscillator = context.createOscillator();
                oscillator.frequency.value = 600;
                oscillator.connect(context.destination);

                oscillator.start(context.currentTime);

                if (currentChar === '.') {
                    oscillator.stop(context.currentTime + 0.1);  // Adjust duration for dot
                } else if (currentChar === '-') {
                    oscillator.stop(context.currentTime + 0.3);  // Adjust duration for dash
                }

                displayElement.innerHTML += currentChar;

                setTimeout(function () {
                    oscillator.disconnect();
                    context.close();
                    playMorse(displayElement, morseCodeString, currentIndex + 1);
                }, intervalDuration);
            }
        } else {
            // Reset index for next iteration
            repeatCount++;

            // Check if we have played xxx two times
            if (repeatCount <= 2) {
                
				setTimeout(function () {
					playMorse(morsedisplayttt, morseCodeStringttt, 0);
				}, pauseDuration);
            }
          
           
             else {
                console.log("Finished playing");
                document.getElementById('ttt').style.visibility = 'visible';
                document.getElementById('repeat').style.visibility = 'visible';


                document.getElementById('voice-12').disabled = false;
				document.getElementById('morseCode-12').disabled = false;
				document.getElementById('safetyInput').disabled = false;

            }
        }
    }

    // Clear the displayed text
    morsedisplayttt.innerHTML = '';
   

    // Start playing xx Morse code
    playMorse(morsedisplayttt, morseCodeStringttt, 0);
	// document.getElementById('ClickExample').addEventListener('click', function(){
	// 	playMorse(morsedisplayDE,morseCodeStringDE, 0);
	// })
}
//morse saftey signal end here

function testSignal(){
	document.getElementById("morseCode-23").innerHTML = "";
	document.getElementById('vvv').style.visibility = 'hidden';

	document.getElementById('testInput').addEventListener('change',function(){
		document.getElementById('voice-23').innerHTML="";
		document.getElementById('repeat').style.visibility='hidden';

	});
	document.getElementById('repeat').style.visibility='hidden';

	
	document.getElementById('repeat').style.visibility='hidden';


		document.getElementById('testInput').disabled = true;
		document.getElementById('voice-13').disabled = true;

		var select4 = document.getElementById('testInput');
		const callSign = {
			"VU9ABC": { text: "VU9ABC", morse: "...-...-...- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
			"VU2XYZ": { text: "VU2XYZ", morse: "...-...-...- ", D: "-..", E: ".", VU:"...- ..- ..--- .- -... -.-." },
			"VU7PQR": { text: "VU7PQR", morse: "...-...-...- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-."  },
			"VU3LMN": { text: "VU3LMN", morse: "...-...-...- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." }
		};
		var selectedOption = select4.value;
		let test1 = callSign[selectedOption].text;
		const voiceElement = document.getElementById('voice-23');
		console.log(test1)
		
	if ('speechSynthesis' in window) {
		const TestText = "1 2 3 4 5";
		const additionalText = "This is " +test1;
		const additionalText1 = "_This is "+test1;
		const fullText = TestText + ' ' + additionalText1;
		console.log(fullText);
	    // document.getElementById('voice-23').innerHTML = fullText;

		var currentIndex = 0;

		// Set interval to add one letter at a time
		var intervalId = setInterval(function() {
		  // Add the next letter to the element's HTML
		  voiceElement.innerHTML += fullText[currentIndex].replace(/\_/g, '<br>');
		
		  // Increment the index
		  currentIndex++;
		
		  // Check if all letters have been added
		  if (currentIndex === fullText.length) {
			// Clear the interval when all letters are added
			clearInterval(intervalId);
		  }
		}, 100); // Adjust the interval (in milliseconds) as needed
				


		const utterancetest = new SpeechSynthesisUtterance(TestText);
		utterancetest.lang = 'en-US';
		utterancetest.rate = 0.8;
	  
		const voices = speechSynthesis.getVoices();
		utterancetest.voice = voices.find(voice => voice.lang === 'en-US');
	  
		utterancetest.onstart = () => console.log('Speech synthesis started for TEST');
		utterancetest.onend = () => {
		  console.log('Speech synthesis ended for TEST');
			

		  // Speak the additional text after MAYDAY
		  speakAdditionalText();
		};
		utterancetest.onerror = (event) => console.error('Speech synthesis error for TEST', event.error);
	  
		speechSynthesis.speak(utterancetest);
	  
		function speakAdditionalText() {
		  const utteranceAdditional = new SpeechSynthesisUtterance(additionalText);
		  utteranceAdditional.lang = 'en-US';
		  utteranceAdditional.rate = 0.8;
	  
		  utteranceAdditional.voice = voices.find(voice => voice.lang === 'en-US');
	  
		  utteranceAdditional.onstart = () => console.log('Speech synthesis started for additional text');
		  utteranceAdditional.onend = () => {
			console.log('Speech synthesis ended for additional text');
			document.getElementById('repeat').style.visibility='visible';
			document.getElementById('testInput').disabled = false;
			document.getElementById('voice-13').disabled = false;
		}
		  utteranceAdditional.onerror = (event) => console.error('Speech synthesis error for additional text', event.error);
	  
		  // Speak the additional text
		  speechSynthesis.speak(utteranceAdditional);
		}
	  } else {
		console.error('Speech synthesis is not supported in this browser.');
	  }
	
}
function testChange()
{
	if (document.getElementById('testInput').value === "") {
		document.getElementById('voice-13').disabled = true;
		document.getElementById('morseCode-13').disabled = true;
	  }else{
		document.getElementById('voice-13').disabled = false;
		document.getElementById('morseCode-13').disabled = false;
	  }
}
// morse code for test signal start here
function morseVoiceTest() {
	// document.getElementById('morseExp').style.visibility = 'hidden';\

    document.getElementById('vvv').style.visibility = 'hidden';
    
	document.getElementById('repeat').style.visibility = 'hidden';


 


    document.getElementById("voice-23").innerHTML = "";
    document.getElementById('voice-13').disabled = true;


    var select1 = document.getElementById('testInput');
    var selectedOption = select1.value;
    document.getElementById('testInput').addEventListener('change', function () {
        document.getElementById('morseCode-23').innerHTML = "";
		document.getElementById('clickHere-2').style.visibility = 'hidden';

		document.getElementById('vvv').style.visibility = 'hidden';
        document.getElementById('repeat').style.visibility = 'hidden';

    });

    const callSign2 = {
        "VU9ABC": { text: "VVV", morse: "...-...-...- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." },
        "VU2XYZ": { text: "VVV", morse: "...-...-...- ", D: "-..", E: ".", VU:"...- ..- ..--- .- -... -.-." },
        "VU7PQR": { text: "VVV", morse: "...-...-...- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-."  },
        "VU3LMN": { text: "VVV", morse: "...-...-...- ", D: "-..", E: ".", VU: "...- ..- ..--- .- -... -.-." }
    };

    const morsedisplayvvv = document.getElementById('morseCode-23');
    const morsedisplayDE = document.getElementById('morseCode-3');
    const intervalDuration = 300;  // 1 second interval
    const pauseDuration = 800;  // 800 mili-second pause
    let morseCodeStringvvv = callSign2[selectedOption].morse;
    let morseCodeStringDE = callSign2[selectedOption].D + ' ' + callSign2[selectedOption].E + ' ' + callSign2[selectedOption].VU + ' ';
    let currentIndexSOS = 0;
    let currentIndexDE = 0;
    let repeatCount = 0;

    function playMorse(displayElement, morseCodeString, currentIndex) {
		document.getElementById('morseCode-13').disabled = true;
		document.getElementById('testInput').disabled = true;


		
		if (currentIndex < morseCodeString.length) {
            const currentChar = morseCodeString[currentIndex];

            if (currentChar === ' ') {
                displayElement.innerHTML += '  ';  // Display space between Morse code elements
                currentIndex++;  // Move to the next character
                playMorse(displayElement, morseCodeString, currentIndex);  // Continue immediately after space
            } else {
                const context = new AudioContext();
                const oscillator = context.createOscillator();
                oscillator.frequency.value = 600;
                oscillator.connect(context.destination);

                oscillator.start(context.currentTime);

                if (currentChar === '.') {
                    oscillator.stop(context.currentTime + 0.1);  // Adjust duration for dot
                } else if (currentChar === '-') {
                    oscillator.stop(context.currentTime + 0.3);  // Adjust duration for dash
                }

                displayElement.innerHTML += currentChar;

                setTimeout(function () {
                    oscillator.disconnect();
                    context.close();
                    playMorse(displayElement, morseCodeString, currentIndex + 1);
                }, intervalDuration);
            }
        } else {
            // Reset index for next iteration
            repeatCount++;

            // Check if we have played xxx two times
            if (repeatCount <= 2) {
                
				setTimeout(function () {
					playMorse(morsedisplayvvv, morseCodeStringvvv, 0);
				}, pauseDuration);
            }
          
           
             else {
                console.log("Finished playing");
                document.getElementById('vvv').style.visibility = 'visible';
                document.getElementById('repeat').style.visibility = 'visible';


                document.getElementById('voice-13').disabled = false;
				document.getElementById('morseCode-13').disabled = false;
				document.getElementById('testInput').disabled = false;

            }
        }
    }

    // Clear the displayed text
    morsedisplayvvv.innerHTML = '';
   

    // Start playing xx Morse code
    playMorse(morsedisplayvvv, morseCodeStringvvv, 0);
	// document.getElementById('ClickExample').addEventListener('click', function(){
	// 	playMorse(morsedisplayDE,morseCodeStringDE, 0);
	// })
}
// morse code for test sinal end here
function repeat(){


	simsubscreennum = 1;
	document.getElementById("canvas2").style.visibility="hidden";
	document.getElementById("canvas1").style.visibility="visible";
	document.getElementById("repeat").style.visibility="hidden";
	var select1clear=document.getElementById('CallInput');
	select1clear.selectedIndex=0;
	var select2clear=document.getElementById('UrgencyInput');
	select2clear.selectedIndex=0;
	var select3clear=document.getElementById('safetyInput');
	select3clear.selectedIndex=0;
	var select4clear=document.getElementById('testInput');
	select4clear.selectedIndex=0;
	// var selectclear=document.getElementById('signalStrength1');
	// selectclear.selectedIndex=0;
    var voiceclear= document.getElementById('voice-1');
	voiceclear.selectedIndex=0;
	// var selectclear=document.getElementById('tone1');
	// selectclear.selectedIndex=0;
	document.getElementById("morseCode-2").innerHTML="";
	document.getElementById("morseCode-3").innerHTML="";
	document.getElementById('clickExample').style.visibility='hidden';




	document.getElementById("voice-2").innerHTML="";
	document.getElementById("voice-21").innerHTML="";
	document.getElementById("voice-22").innerHTML="";
	document.getElementById("voice-23").innerHTML="";

	document.getElementById('select1').style.visibility='hidden';
	document.getElementById('select2').style.visibility='hidden';
	document.getElementById('select3').style.visibility='hidden';
	document.getElementById('select4').style.visibility='hidden';
	document.getElementById('buttons').style.visibility='hidden';
	document.getElementById('buttons-2').style.visibility='hidden';
	document.getElementById('buttons-3').style.visibility='hidden';
	document.getElementById('buttons-4').style.visibility='hidden';
	
	if ('speechSynthesis' in window) {
        // Cancel any ongoing speech synthesis
        speechSynthesis.cancel();
    }  
	// morse distress signal
	document.getElementById('clickHere-1').style.visibility = 'hidden';
	document.getElementById('deCallsign').style.visibility = 'hidden';
	document.getElementById('sos').style.visibility = 'hidden';
	// morse distress signal

	// morse urgency signal
	document.getElementById('clickHere-2').style.visibility = 'hidden';
	document.getElementById('deCallsign').style.visibility = 'hidden';
	document.getElementById('xxx').style.visibility = 'hidden';
	document.getElementById('clickExample-1').style.visibility = 'hidden';
	document.getElementById("morseCode-21").innerHTML="";

	// morse urgency signal 

	// morse safety signal
	document.getElementById('ttt').style.visibility = 'hidden';
	document.getElementById("morseCode-22").innerHTML="";


	// morse safety signal

	//morse test signal
	document.getElementById('vvv').style.visibility = 'hidden';
	document.getElementById("morseCode-23").innerHTML="";

	//morse test signal
	


}
  







	
	 
	
		

























