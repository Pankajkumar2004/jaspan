<script type="text/javascript">


  var notesArray = Array();

function add_element_to_array() {
  let splits = document.getElementById("text1").value.split(',');

  // loop through each item splits and push it to notesArray
  for (var i = 0; i < splits.length; i++) {
    notesArray.push(splits[i]);
  }

  /*
  // you can also do this using concat:
  notesArray = notesArray.concat(splits);
  
  // or using the new spread syntax
  notesArray.push(...splits);
  */

  document.getElementById("text1").value = "";
}


function display_array() {
  let e = "<hr/>";
  for (var y = 0; y < notesArray.length; y++) {
    e +=  + y + " - " + notesArray[y] +"<br />" + "<br />" ;
  }
   document.getElementById("Result").innerHTML = e ;

}


//Alert

var alarmSound = new Audio();
alarmSound.src = 'alarm.mp3';
var alarmTimer;

function setAlarm(button) {
  var ms = document.getElementById('alarmTime').valueAsNumber;
  if(isNaN(ms)) {
    alert('Invalid Date');
    return;
  }

  var alarm = new Date(ms);
  var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(),  alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
  
  var differenceInMs = alarmTime.getTime() - (new Date()).getTime();

  if(differenceInMs < 0) {
    alert('Specified time is already passed');
    return;
  }

  alarmTimer = setTimeout(initAlarm, differenceInMs);
  button.innerText = 'Cancel Alarm';
  button.setAttribute('onclick', 'cancelAlarm(this);');
};

function cancelAlarm(button) {
  clearTimeout(alarmTimer);
  button.innerText = 'Set Alarm';
  button.setAttribute('onclick', 'setAlarm(this);')
};

function initAlarm() {
  alarmSound.play();
  document.getElementById('alarmOptions').style.display = '';
};

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById('alarmOptions').style.display = 'none';
  cancelAlarm(document.getElementById('alarmButton'));
};

function snooze() {
  stopAlarm();
  alarmTimer = setTimeout(initAlarm, 300000); // 5 * 60 * 1000 = 5 Minutes
};

</script>