function validateform(){
	fname=document.getElementById('fname').value;
	if (fname == ""){
		alert('First name must be filled.');
		return false;
	}
	mname=document.getElementById('mname').value;
	lname=document.getElementById('lname').value;
	if (lname == ""){
		alert('Last name must be filled.');
		return false;
	}
	code=document.getElementById('code').value;
	if (code == ""){
		alert('Enter country code of your phone number.');
		return false;
	}
	phno=document.getElementById('phno').value;
	if (phno.toString().length!=10){
		alert("Enter a valid phone number.");
		return false;
	}
	dob=document.getElementById('dob').value;
	if (dob == ""){
		alert('Enter your date of birth');
		return false;
	}
	email=document.getElementById('email').value;
	if (email == ""){
		alert('Enter your E-mail Id');
		return false;
	}
	qual=document.getElementById('qual').value;
	if (qual == ""){
		alert('Select your qualification');
		return false;
	}
	addr=document.getElementById('addr').value;
	if (addr == ""){
		alert('Enter your address');
		return false;
	}
	about=document.getElementById('about').value;
	if (about == ""){
		alert('Write something about yourself.');
		return false;
	}

}