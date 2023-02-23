// set let playing to be false in the beginning
let playing = false;
let myVideo;
let myButton;


function setup() {
  // display the video
  myVideo = createVideo(['mov 03_cowries.mp4']);
  myButton = createButton('play');
  // when button is pressed call the PausePlay function
  myButton.mousePressed(PausePlay);
}

// play or pause video
function PausePlay() {
  // if playing is true
  if (playing) {
    // make the video pause
    myVideo.pause()
    playing = false;
  }
  // else let the video play
  else {
    myVideo.play();
    playing = true;
  }

}