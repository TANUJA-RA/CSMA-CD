  let random_interval = 0;
  let travelTime = 8000;
  let startTime = Date.now(); // global variable to store the start time
  let i = 1;
  let out0 = document.getElementById("userchannel");
  let out1 = document.getElementById("sense");
  let out2 = document.getElementById("transmit");
  let out3 = document.getElementById("history");

  let text = "";

  // clock
  // --------------------------------------------------------------------------------------------
  function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
  setInterval(refreshTime, 1000);
  let checktime = 2*travelTime;
  // --------------------------------------------------------------------------------------------

  // display log
  function display(obj1, msg) {

    const dateString = new Date().toLocaleTimeString();
    const formattedString = dateString.replace(", ", " - ");
    text += (formattedString + " " + msg + "<br>");
    out3.innerHTML = text;
    obj1.innerHTML = msg;
  }
  function dup(){
    let b = Date.now();
    let a = prompt("Enter the number of collisions!");
    let c = Date.now();
    checktime+=b-c;
    return a*1000;
  }

  // --------------------------------------------------------------------------------------------
  //get random interval
  function getRandomInterval(g) {
    min = 0;
    max = Math.pow(2,c-1);
    
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.max(a*1000,200);
    
  }
  let x;
  function validateForm() {
    x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else random_interval = x;
  }
 
  // --------------------------------------------------------------------------------------------
  let collision_time = 0;
  let c = 1;
  // set timeout function
  function setTimeout1(randomInterval) {
    collision_time += randomInterval;
    //print for how much we r waiting

    if (c === 7) {
      alert("TRANSMISSION ABORTED!");
      i =1;
      sense();
      return;
    }

    out1.innerHTML = "Waiting for " + randomInterval + " milliseconds";
    out1.innerHTML = " Rand" + collision_time + " milliseconds";
    display(out1, "Waiting for " + randomInterval + " milliseconds");
    // window.setTimeout(transmit, randomInterval);
    if ((collision_time) > checktime) {
      i = 1;
      c = 1;
      out2.innerHTML = "Frame transmission completed";
      display(out2, "Frame transmission completed");
      sense();

      return;
    }
    else {
      setTimeout(function () {
        if (i === 0) {
          let temp_rand_time = dup() ;
          out1.innerHTML = "channel is busy";
          display(out1, "channnel sensing: channel is busy");
          c += 1;
          setTimeout1(temp_rand_time);
        }
        else {
          c = 0;
          transmit();
        }
      }, randomInterval);
    }
  }

  let collision_detect = 1;
  let frame_start = 0;
  //---------------------------------------------------------------------------------------------
  function transmit() {     // Function that transmits a frame

    if (i && collision_detect) {  // if channeel is idle
      c += 1;  // counter ++
      frame_start = Date.now();
      collision_detect = 1;
      randomInterval = 2 * travelTime;

      out2.innerHTML = "Frame transmitting";
      display(out2, "Frame transmitting");
      out0.innerHTML = "channel busy";
      display(out0, "channel status: channel busy");
      out1.innerHTML = "channel busy";
      display(out1, "channel sensing: channel busy");
      i = 0;  // set channel busy 

      setTimeout(function () {
        if (collision_detect) {
          out2.innerHTML = "Frame transmission completed";

          display(out2, "Frame transmission completed");
          out0.innerHTML = "channel idle";
          display(out0, "channel status: channel idle");
          out1.innerHTML = "channel idle";
          i = 1;
        }
      }, randomInterval);
    }
    else {
      collision_time = Date.now() - frame_start;

      collision_detect = 0;
      out0.innerHTML = "Collision detected";
      out1.innerHTML = "Collision detected";
      display(out1, "Collision detected");
      out2.innerHTML = "channel jammed as collision detected";
      display(out2, "channel jammed as collision detected");
      document.getElementById("collision").innerhtml == "Collision Occured!!";
      display(document.getElementById("collision"), "Collision Occured!!, Now enter the collision number fot the BACKOFF!!");
      // display(document.getElementById("collision"), dup());/
      setTimeout(()=>{
        let randomInterval = dup();
        setTimeout1(randomInterval);
      },2000);
      
      
    }

  }

  //------------------------------------------------------------------------------------
  // sense
  document.getElementById("yu").addEventListener("click", sense);
  function sense() {
    // Condition 1: idle

    if (i) {
      out0.innerHTML = "channel idle";
      display(out0, "channel status: channel idle");
      out1.innerHTML = "channnel sensing: channel is idle";
      display(out1, "channnel sensing: channel is idle");
      //transmit(); // Call transmit function
    }
    // Condition 2: busy
    else {
      out0.innerHTML = "channel occupied";
      display(out0, "channel status: channel occupied");
      out1.innerHTML = "channnel sensing: channel is busy";
      display(out1, "channnel sensing: channel is busy");
    }
  }

  //-----------------------------------------------------------------------------------
  // transmit 
  document.getElementById("yu2").addEventListener("click", transmit);


  //------------------------------END--------------------------------------------------//