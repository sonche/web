var gender1 = document.getElementById("gender-1");
var gender0 = document.getElementById("gender-0");

gender1.onclick = function(){
	var isGender1 = this.checked;

	var arraygender1 = document.getElementsByClassName("nam-s");
	for(var i=0; i < arraygender1.length; i++){
		//set thuộc tính checked theo giá trị của thằng checkall.
		arraygender1[i].checked = isGender1;	
	}
	document.getElementById("nu").style.display = "none";
	document.getElementById("nam").style.display = "block";
	document.getElementById("nu-ok").style.display = "none";
	document.getElementById("nam-ok").style.display = "block";
}
gender0.onclick = function(){
	var isGender0 = this.checked;

	var arraygender0 = document.getElementsByClassName("nu-s");
	for(var i=0; i < arraygender0.length; i++){
		//set thuộc tính checked theo giá trị của thằng checkall.
		arraygender0[i].checked = isGender0;	
	}
	document.getElementById("nam").style.display = "none";
	document.getElementById("nu").style.display = "block";
	document.getElementById("nam-ok").style.display = "none";
	document.getElementById("nu-ok").style.display = "block";
}