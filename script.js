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
	if(day==0){
		day="Sunday";
	}if(day==1){
		day="Monday";
	}
	if(day==2){
		day="Thusday";
	}if(day==3){
		day="wednesday";
	}if(day==4){
		day="Thursday";
	}if(day==5){
		day="Friday";
	}if(day==6){
		day="Saturday";
	}
	var presenttime=hour+":"+minute+":"+seconds+" "+period;
	var takeElement=document.getElementById("Timedisplay");
	takeElement.innerText=presenttime;
	var takeH2=document.getElementById("dateDisplay");
	takeH2.innerText=day;
}
,1000);
