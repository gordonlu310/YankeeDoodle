var notesReference = {"C": 256, "D": 293.665, "E": 329.628, "F": 349.228, "F#": 369.994, "G": 392, "A": 440, "B": 493.883, "C2": 524};
var notesOrder = ["G", "G", "A", "B", "G", "B", "A", "D", "G", "G", "A", "B", "G", "G", "F#", "D", "G", "G", "A", "B", "C2", "B", "A","G",
"F#", "D", "E", "F#", "G", "GY"];
var counter = 0;
var end = false;

function playTone(frequency) {
  var audioContext = new window.AudioContext();
  var oscillator = audioContext.createOscillator();
  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;
  oscillator.connect(audioContext.destination);
  oscillator.start();
  if (end) {
    oscillator.stop(audioContext.currentTime + 0.9);
  } else {
    oscillator.stop(audioContext.currentTime + 0.4);
  }
}

function playAscending() {
  playTone(256);
  console.log("Middle C");
  setTimeout(() => { playTone(293.665); console.log("Middle D")}, 500 );
  setTimeout(() => { playTone(329.628); console.log("Middle E")}, 1000 );
  setTimeout(() => { playTone(349.228); console.log("Middle F")}, 1500 );
  setTimeout(() => { playTone(392); console.log("Middle G")}, 2000 );
  setTimeout(() => { playTone(440); console.log("Middle A")}, 2500 );
  setTimeout(() => { playTone(493.883); console.log("Middle B")}, 3000 );
  setTimeout(() => { playTone(524); console.log("High C")}, 3500 );
}

function playYankeeDoodle(){
  notesOrder.forEach(function(element) {
  if (element == "GY") {
    counter = counter + 1000;
    end = true;
    setTimeout(() => { playTone(notesReference["G"]); console.log("G")}, counter );
  } else {
    counter = counter + 500;
    setTimeout(() => { playTone(notesReference[element]); console.log(element)}, counter );
  }
  });
}

playYankeeDoodle()
