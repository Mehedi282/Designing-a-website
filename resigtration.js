function reg(){
	var fn=document.getElementById("fn").value;
	var ln=document.getElementById("ln").value;
	var nameformate=/^[A-Za-z]+$/;
	
	if(fn.length==""){
		alert("Enter your First name please!")
		return false;
	}
	if(fn.length<6){
		alert("First name should be more than 6 disit please!")
		return false;
	}
	if(!nameformate.test(fn)){
		alert("Name formate is wrong!")
		return false;
	}
	
	if(ln.length==""){
		alert("Enter your last name please!")
		return false;
	}
	if(ln.length<6){
		alert("Last name should be more than 6 disit please!")
		return false;
	}
	if(!nameformate.test(ln)){
		alert("Name formate is wrong!")
		return false;
	}
	
}