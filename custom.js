function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log({currentTime})
    if(currentTime===localStorage.getItem("alarmTime" )){
      alert("alarm!please wake up")
    }
    // this is for time display in input field
    document.getElementById('time').innerText = currentTime;
  }
  
  function setAlarm() {
    //set time for alarm
    const alarmTimeInput = document.getElementById('alarmTime');
    const alarmTime = alarmTimeInput.value;
    //console.log({alarmTime})
    if (!alarmTime) {
      alert('Please set the alarm time.');
      return;
    }
  
    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, '0');
    const currentMinute = now.getMinutes().toString().padStart(2, '0');
    const currentSecond = now.getSeconds().toString().padStart(2, '0');
  
    const currentTime = `${currentHour}:${currentMinute}:${currentSecond}`;
    console.log({currentTime,alarmTime})
    localStorage.setItem("alarmTime",alarmTime );
    // if (currentTime === alarmTime) {
    //   alert('Alarm! Wake up!');
    // } else {
    //   alert('Alarm set for ' + alarmTime);
    // }
  }
  
  function stopAlarm() {
    alert('Alarm stopped!');
  }
  
  // Update clock every second
  setInterval(updateClock, 1000);
  
  // Initial clock update
  updateClock();
  