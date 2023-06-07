x = 0;
y = 0;

to_number  =""
speak_data =""
apple =""
screen_height =0
screen_width =0

draw_apple = "";



function preload(){
  apple = loadImage("apple.png")
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number = Number(content)

 if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "Apple being drawn"
    draw_apple = "set"
 } 

 else{
  document.getElementById("status").innerHTML = "The speech has not recognised a number"
 }

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width = window.innerWidth
  screen_height = window.innerHeight
  canvas = createCanvas(screen_width,screen_height-150)
}

function draw() {
  if(draw_apple == "set")
  {

      for(var i = 1; i <= to_number; i++)
      {
      x = Math.floor(Math.random()
      * 700);
      y = Math.floor(Math.random()
      * 400 );
      image (apple, x, y, 50, 50);
      }
    speak_data = "APPLES DRAWN"
    speak()
    document.getElementById("status").innerHTML = to_number + " Apple(s) drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
