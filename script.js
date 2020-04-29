var numb1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var numb2=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
var x=numb2.length-1;

var seconds=0;
var minutes=0;
var display_second=0;
var display_minutes=0;

var start1;
var stop1;

var interval1=null;

var beep= new Audio();
beep.src="beep.mp3";


var recordtimes1=[];

recordtimes1=JSON.parse(localStorage.getItem("recordtimes1"));
 if (recordtimes1!=null) {
 	 recordtimes1.sort();
 	 
     document.getElementById("bt").innerHTML=recordtimes1[0];

 }


var value=document.getElementsByClassName("grid-item");
random();



// sound------------------------------------------------------------------------------------------
function sound(){
	beep.play();
}

// shuffle the array randomly
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  
   while (0 !== currentIndex) {

    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

   
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//random values in inner html
function random(){
	numb1=shuffle(numb1);
	for (var i = 0; i <numb1.length; i++) {
		value[i].innerHTML=numb1[i];
	}
}


for (var i = 0; i <numb1.length; i++) {
	if (value[i].innerHTML==1) {
		start1=i;
	}
	if (value[i].innerHTML==20) {
		stop1=i;
	}
	
}

value[start1].onclick=function(){start();level3(this);sound()};
value[stop1].onclick=function(){stop();level3(this);sound()};




//fuction----------------------click
function level3(id){
	if(id.innerHTML==numb2[x]){
		id.style.visibility="hidden";
		x--;


	}
	
}
//start stop watch
function start(){
	 interval1=window.setInterval(stopwatch,1000);

}

//function stop
function stop(){
	 if (recordtimes1==null) {
		      recordtimes1=[];	
			  recordtimes1[recordtimes1.length]=document.getElementById('t').innerHTML;
			  localStorage.setItem("recordtimes1",JSON.stringify(recordtimes1));
		}
	    else{
		    	recordtimes1[recordtimes1.length]=document.getElementById('t').innerHTML;
		    	localStorage.setItem("recordtimes1",JSON.stringify(recordtimes1));
		}
	window.clearInterval(interval1);
	document.getElementById("contain").style.display="none";
	document.getElementById("top-5").style.display="block";
	recordtimes1.sort();
    document.getElementById("bt").innerHTML=recordtimes1[0];
    document.getElementById("1").innerHTML=recordtimes1[0]
    if(recordtimes1[1]!=undefined){document.getElementById("2").innerHTML=recordtimes1[1];}
    if(recordtimes1[2]!=undefined){document.getElementById("3").innerHTML=recordtimes1[2];}
    if(recordtimes1[3]!=undefined){document.getElementById("4").innerHTML=recordtimes1[3];}
    if(recordtimes1[4]!=undefined){document.getElementById("5").innerHTML=recordtimes1[4];}

	
	  
		   
}


//stop watch
function stopwatch(){
	seconds++;
	if (seconds===60) {
		seconds=0;
		minutes++;
	}
	if(seconds < 10){
        display_seconds = "0" + seconds.toString();
    }
    else{
        display_seconds = seconds;
    }

    if(minutes < 10){
        display_minutes = "0" + minutes.toString();
    }
    else{
        display_minutes = minutes;
    }

  
	document.getElementById("t").innerHTML= display_minutes+ ":" + display_seconds;

}



//reloads the page---cintrol restart butt0n------------------------------------------------------------------------------------
function reload(){
	location.reload(false);
}
