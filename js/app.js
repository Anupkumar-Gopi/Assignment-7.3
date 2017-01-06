// closure
var counter = (function (){
	var i = 0;
	var vbtn = document.getElementById('btn').value; // get text of button
	return function incrCntr(){
		i+=1;
		console.clear(); 
		console.log("Counter is at",i);		// display counter value in console	
		document.getElementById('btn').value= vbtn+" "+i; // display counter value in button
	}
})();

