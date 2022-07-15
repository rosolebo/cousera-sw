// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE


(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = " ";
  var speakWord = "Hello";
  helloSpeaker.sayHello = function speak(name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2