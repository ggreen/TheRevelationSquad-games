var id = null;
var fireId = null;
var xPos = 0;
var yPos = 100;
const START_RIGHT = 460;
var fireXPos = START_RIGHT;
const MAX_X = 350;
const MIN_X = 0;
const MIN_Y = 100;
const logosWidth = 50;
var jumpState = "";
const KEY_BOARD_CODE = 32;
const LEFT_ARROW_CODE = 37;
const RIGHT_ARROW_CODE = 39;
const maxJumpYPos = 50;

function animation() {

  var elem = document.getElementById("myAnimation");
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (xPos == 350) {
      clearInterval(id);
    } else {
      xPos++;
      elem.style.top = yPos + "px";
      elem.style.left = xPos + "px";
    }
  }
}
//-----------------------------------
function animateFire()
{
  fireAnimationId = setInterval(frame, 10);
  function frame() {
   fire();
  }
}
function fire() {

  var elem = document.getElementById("firePanel");
  if(fireXPos <=0)
  {
    fireXPos = START_RIGHT;
    elem.style.display = "block";
  }

  clearInterval(fireId);

  fireId = setInterval(frame, 10);
  function frame() {
    if (fireXPos == 0) {
      clearInterval(fireId);
    } else {
      if(fireXPos <= xPos) //hit
      {
        elem.style.display = "none";
        fireXPos = 0;
      }

      fireXPos--;
      elem.style.left = fireXPos + "px";
    }
  }
}
//-----------------------------------
function moveLogos(x, y) {
  var elem = document.getElementById("myAnimation");

  // clearInterval(id);

  if (x >= MAX_X || x <= MIN_X) {
    clearInterval(id);
  } 
  
  elem.style.top = y + "px";
  elem.style.left = x + "px";
  
}
//-----------------------------------

function moveLogosRightIncrement(xIncrement) {
  if (xPos < MAX_X) {
    xPos = xPos + xIncrement;
  }
  moveLogos(xPos, yPos);
}
//-----------------------------------
function moveLogosRight() {
  moveLogosRightIncrement(logosWidth);
}
//-----------------------------------
function moveLogosLeft() {
  if (xPos > MIN_X) {
    xPos = xPos - logosWidth;
  }
  moveLogos(xPos, yPos);
}
//-----------------------------------
function jumpLogos() {
  jumpState = "up";
  clearInterval(id);
  id = setInterval(jump, 10);
  function jump() {
    if (jumpState == "up") {
      yPos--;
      moveLogosRightIncrement(1);

      if (yPos <= maxJumpYPos) {
        jumpState = "down";
      }
    } else {
      if (yPos >= MIN_Y) {
        clearInterval(id);
      }
      yPos++;
      moveLogosRightIncrement(1);
    }
  }
}
//-----------------------------------
