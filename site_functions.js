let seconds = 10;
let minutes = 2;
let interval_ID = setInterval(pomodoro_timer, 1000); // returns a numeric, non-zero number that identifies the created timer

function pomodoro_timer()
{
	document.getElementById("demo").innerHTML = minutes+":"+seconds;
	if(seconds == 0) 
	{
		minutes--;
		if(minutes == 0) 
		{
			clearTimeout(interval_ID); // stops the execution of the function specified in setTimeout()
			document.getElementById("demo").innerHTML = "Time's up!";
		}
		seconds=10;
	}
	seconds--;
}

function myFunction() 
{
  alert('Hello');
}