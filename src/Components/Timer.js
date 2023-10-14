// // import React, { useState,useRef } from "react";
// // import {Howl,Howler} from "howler"
// // import s1 from "../Assets/clock-alarm-8761.mp3"
// // const Timer = () => {
// //   //false depicts pause and true depicts play
// //   var y = document.getElementById("min");
// //   var z = document.getElementById("hh");
// //   var x = document.getElementById("sec");
// //   var intrvl_id;
// //   var alarm_id;
// //   var p = 0; //for pause 0 and 1 for play
// //   var t = 0; //timer working t =1 otherwise timer not working then t = 0.
// //   // let audio = new Audio("clock-alarm-8761.mp3");
  
// //   const {Howl,Howler} = require('howler');

// //   var sound= new Howl({
// //     src : [s1]
// //   });

// //   function pause() {
// //     if (p === 0 && t === 0) {
// //       alert("You haven't started Timer");
// //     } else if (p === 0 && t === 1) {
// //       document.getElementById("pause").innerHTML = "Play";
// //       clearInterval(intrvl_id);
// //       p = 1;
// //       t = 0;
// //     } else if (p === 1 && t === 0) {
// //       document.getElementById("pause").innerHTML = "Pause";
// //       intrvl_id = setInterval(decrement, 1000);
// //       p = 0;
// //       t = 1;
// //     }
// //   }
// //   function play_alarm() {
// //     console.log("In alarm");
// //     if (t === 1) {
// //       document.getElementById("alarm").style.display = "block";
// //        sound.play();}
// //     }
  
// //   function stop_alarm() {
// //     console.log("In stop Alarm");
// //     clearInterval(alarm_id);
// //     //audio.pause(); // to immediately stop playing audio in javascript
// //     //audio.currentTime = 0; // done so that whenever audio is played second time it starts playing with the starting
// //     document.getElementById("alarm").style.display = "none";
// //     t = 0;
// //   }
// //   function decrement() {
// //     console.log("in decrement");
// //     console.log("y = " + y.value);
// //     console.log("x = " + x.value);
// //     console.log("z = " + z.value);

// //     /*if min =0 and sec = 0
// //         then decrement hr by 1 when min =0 and sec =0 and make min =59 and sec =59 .
// //         if min 
// //         decrement min when sec = 0 and make sec =59*/

// //     if (x.value === 0 && y.value === 0 && z.value === 0 && t === 1) {
// //       clearInterval(intrvl_id);
// //       console.log("done");
// //       alarm_id = setInterval(play_alarm, 10);
// //     } else {
// //       if (x.value > 0) {
// //         x.value -= 1;
// //         if (x.value === 0 && y.value > 0) {
// //           y.value -= 1;
// //           x.value = 59;
// //         } else if (x.value === 0 && y.value === 0 && z.value > 0) {
// //           z.value -= 1;
// //           y.value = 59;
// //           x.value = 59;
// //         }
// //       } else if (y.value > 0 && x.value === 0) {
// //         y.value -= 1;
// //         x.value = 59;
// //       } else if (x.value === 0 && y.value === 0 && z.value > 0) {
// //         z.value -= 1;
// //         y.value = 59;
// //         x.value = 59;
// //       }
// //     }
// //     x.innerHTML = x.value;
// //     y.innerHTML = y.value;
// //     z.innerHTML = z.value;
// //   }
// //   function reset() {
// //     console.log("in Reset ");
// //     x.value = "";
// //     x.placeholder = "secs";
// //     y.value = "";
// //     y.placeholder = "mins";
// //     z.value = "";
// //     z.placeholder = "hrs";
// //     stop_alarm();
// //     clearInterval(intrvl_id);
// //     console.log("Exit reset");
// //   }

// //   function start() {
// //     document.getElementById("pause").innerHTML = "Pause";
// //     p = 0;
// //     console.log(" In start");
// //     if (x.value === "" && y.value === x.value && z.value === x.value) {
// //       alert("Please enter the valid time");
// //     } else if (x.value === 0 && y.value === 0 && z.value === 0)
// //       alert("Minimum time should be 1 seconds");
// //     else {
// //       if (x.value === "") x.value = 0;
// //       if (y.value === "") y.value = 0;
// //       if (z.value === "") z.value = 0;
// //       console.log("y = " + y.value);
// //       console.log("x = " + x.value);
// //       console.log("z = " + z.value);
// //       x.value = Math.ceil(x.value);
// //       y.value = Math.ceil(y.value);
// //       z.value = Math.ceil(z.value);
// //       t = 1;
// //       intrvl_id = setInterval(decrement, 1000);
// //     }
// //   }
// //   return ( <>

  
// //     <div
// //       className="border-slate-800 rounded-lg border-2 flex flex-wrap items-center justify-center gap-2 p-2"
// //       style={{ boxShadow: "0px 0px 10px grey" }}
// //     >
// //       <input
// //         type="number"
// //         placeholder="hrs"
// //         className="w-[25%] text-center p-1"
// //         id="hh"
// //       />
// //       <input
// //         type="number"
// //         placeholder="min"
// //         className="w-[25%] text-center p-1"
// //         id="min"
// //       />
// //       <input
// //         type="number"
// //         placeholder="sec"
// //         className="w-[25%] text-center p-1"
// //         id="sec"
// //       />

// //       <div className="flex flex-wrap justify-evenly items-center">
// //         <button
// //           type="button"
// //           className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
// //           id="start"
// //           onClick={()=>start()}
// //         >
// //           Start
// //         </button>
// //         <button
// //         id="pause" onClick={()=>pause()}
// //           type="button"
// //           className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
// //         >
// //           {p === 1 ? "Play" : "Pause"}
// //         </button>
// //         <button
// //         id="reset" onClick={()=>reset()}
// //           type="button"
// //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
// //         >
// //           Reset
// //         </button>

// //         <button
// //           type="button"
// //           className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
// //           id="alarm" onClick={()=>stop_alarm()}
// //         >
// //           Stop
// //         </button>
// //       </div>
// //     </div></>
// //   );
// // };


// // export default Timer;


// import React, { useState, useEffect } from 'react';

// function Timer() {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   const toggleTimer = () => {
//     setIsActive(!isActive);
//   };

//   const resetTimer = () => {
//     setIsActive(false);
//     setHours(0);
//     setMinutes(0);
//     setSeconds(0);
//   };

//   useEffect(() => {
//     if (isActive) {
//       const interval = setInterval(() => {
//         if (hours === 0 && minutes === 0 && seconds === 0) {
//           // Beep sound when the timer reaches 0
//           const beep = new Audio('beep.mp3'); // Replace with your audio file
//           beep.play();
//           clearInterval(interval);
//           setIsActive(false);
//         } else if (seconds === 0 && minutes > 0) {
//           setSeconds(59);
//           setMinutes(minutes - 1);
//         } else if (minutes === 0 && hours > 0 && seconds === 0) {
//           setSeconds(59);
//           setMinutes(59);
//           setHours(hours - 1);
//         } else {
//           setSeconds(seconds - 1);
//         }
//       }, 1000);

//       return () => {
//         clearInterval(interval);
//       };
//     }
//   }, [isActive, hours, minutes, seconds]);

//   return (
//     <div className="text-center">
//       <h1 className="text-2xl font-bold mt-4">Timer</h1>
//       <div className="text-4xl mt-4">
//         {hours.toString().padStart(2, '0')}:
//         {minutes.toString().padStart(2, '0')}:
//         {seconds.toString().padStart(2, '0')}
//       </div>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mx-2"
//         onClick={toggleTimer}
//       >
//         {isActive ? 'Pause' : 'Start'}
//       </button>
//       <button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4 mx-2"
//         onClick={resetTimer}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Timer;
import React, { useState, useEffect } from 'react';

function Timer() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTotalSeconds(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (totalSeconds <= 0) {
          const beep = new Audio('beep.mp3'); // Replace with your audio file
          beep.play();
          clearInterval(interval);
          setIsActive(false);
        } else {
          setTotalSeconds(totalSeconds - 1);
          setHours(Math.floor(totalSeconds / 3600));
          setMinutes(Math.floor((totalSeconds % 3600) / 60));
          setSeconds(totalSeconds % 60);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, totalSeconds]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);
    const isValid = !isNaN(intValue) && intValue >= 0;

    if (name === 'hours') {
      setHours(isValid ? intValue : 0);
    } else if (name === 'minutes') {
      setMinutes(isValid ? intValue : 0);
    } else if (name === 'seconds') {
      setSeconds(isValid ? intValue : 0);
    }

    const newTotalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTotalSeconds(newTotalSeconds);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-4">Timer</h1>
      <div className="text-4xl mt-4">
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </div>
      <div className="mt-4">
        <input
          type="number"
          name="hours"
          value={hours}
          onChange={handleInputChange}
          className="w-12 mr-1"
        />
        <span>hours</span>
        <input
          type="number"
          name="minutes"
          value={minutes}
          onChange={handleInputChange}
          className="w-12 mx-1"
        />
        <span>minutes</span>
        <input
          type="number"
          name="seconds"
          value={seconds}
          onChange={handleInputChange}
          className="w-12 mx-1"
        />
        <span>seconds</span>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mx-2"
        onClick={toggleTimer}
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4 mx-2"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
