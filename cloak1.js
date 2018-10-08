setInterval(function (){
			var dates= new Date();
			var hour=dates.getHours();
			var minute=dates.getMinutes();
			var seconds=dates.getSeconds();
			var day= dates.getDay();
			var d=dates.getDate();
			var m=dates.getMonth();
			var y=dates.getFullYear();
			var period;
			if(hour>=12){
				period="PM";
			}else{
				period="AM";
			} 
			if(hour>12){
				hour=hour-12;
			}
			if(seconds<10){
				seconds="0"+seconds;
			}
			if(minute<10){
				minute="0"+minute;
			}
			var presenttime=hour+":"+minute+":"+seconds+" "+period;
			var takeElement=document.getElementById("Timedisplay");
			takeElement.innerText=presenttime;
		}
	,1000);

