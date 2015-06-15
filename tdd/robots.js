

// create a Robot class
var Robot = function(top, left) {
  this.node = document.createElement('div');
  this.setPosition(top, left);
};

// sets the position of the robot
Robot.prototype.setPosition = function(top, left) {
  this.node.style.top = top + 'px';
  this.node.style.left = left + 'px';
};

// Rosie constructor fn
var Rosie = function(top, left) {
  Robot.call(this, top, left);
};
Rosie.prototype = Object.create(Robot.prototype);
Rosie.prototype.constructor = Rosie;

// Bender constructor fn
var Bender = function(top, left) {
  Robot.call(this, top, left);
};
Bender.prototype = Object.create(Robot.prototype);
Bender.prototype.constructor = Bender;

// Gir constructor fn
var Gir = function(top, left) {
  Robot.call(this, top, left);
};
Gir.prototype = Object.create(Robot.prototype);
Gir.prototype.constructor = Gir;

// select the buttons and the robotScene div from the DOM 
var robotButtons = document.getElementsByClassName('robotButton');
var rosieButton = robotButtons[0];
var benderButton = robotButtons[1];
var messButton = robotButtons[2];
var cleanButton = robotButtons[3];
var helloButton = robotButtons[4];
var robotScene = document.getElementsByClassName('robotScene')[0];

// add a Rosie robot to the DOM, hide rosieButton, reveal cleanButton
rosieButton.onclick = function() {
  var robot = new Rosie(
    320,
    8
    );
  robot.node.className = 'rosie';
  robotScene.appendChild(robot.node);
  this.style.display = 'none';
  helloButton.style.display = 'inline-block';

  if(document.getElementsByClassName('gir').length) {
      cleanButton.style.display = 'inline-block';
    }
};

// add a Bender robot to the DOM, hide benderButton, reveal messButton
benderButton.onclick = function() {
  var robot = new Bender(
    245,
    (window.innerWidth - 200) * Math.random()
    );
  robot.node.className = 'bender';
  robotScene.appendChild(robot.node)
  this.style.display = 'none';
  messButton.style.display = 'inline-block';
};

// move Bender right, create 10 Gir robots, hide messButton, reveal benderButton and cleanButton
messButton.onclick = function() {
  var bender = document.getElementsByClassName('bender')[0];
  bender.style.left = '1100px';
  bender.style.transition = '1s';

  // add Gir robots 
  for(var i = 0; i < 10; i++) {
    var robot = new Gir(
      Math.min(500, ( 500 * Math.random() + 250) ), 
      window.innerWidth * Math.random()
      );
    robot.node.className = 'gir';
    robotScene.appendChild(robot.node);
  }

  setTimeout(function(){
    bender.remove();
    messButton.style.display = 'none';

    if(document.getElementsByClassName('rosie').length) {
      cleanButton.style.display = 'inline-block';
    }

    benderButton.style.display = 'inline-block';
  }, 3000);
};

// Rosie cleans up the Gir robots, cleanButton and helloButton are hidden, rosieButton revealed
cleanButton.onclick = function() {
  var rosie = document.getElementsByClassName('rosie')[0];
  var girs = document.getElementsByClassName('gir');
  for(var j = 0; j < girs.length; j++) {
    girs[j].style.left = '1300px';
    girs[j].style.opacity = '0';
    girs[j].style.transition = '1.5s';
  }
  if(document.getElementsByClassName('hello').length) {
    document.getElementsByClassName('hello')[0].remove();
  }
  rosie.style.left = '1200px';
  rosie.style.transition = '1s';
  
  setTimeout(function(){
    rosie.remove();
    for(var k = 0; k < girs.length; k++) {
      girs[k].remove();
    } 
    cleanButton.style.display = 'none';
    helloButton.style.display ='none';
    rosieButton.style.display = 'inline-block';

  }, 1000);
};

// display a hello from Rosie
helloButton.onclick = function() {
  var hello = document.createElement('div');
  hello.innerHTML = 'Hello!';
  hello.className = 'hello';
  robotScene.appendChild(hello);
};
  


