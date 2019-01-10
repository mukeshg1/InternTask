function showresult()
{
	//Fetching data from form using id
    fname=document.getElementById('fname').value;
	mname=document.getElementById('mname').value;
	lname=document.getElementById('lname').value;
	if (document.getElementById('sex1').checked){
			sex = document.register.sex1.value;
		} else if(document.getElementById('sex2').checked){
			sex = document.register.sex2.value;
		} else{
			sex = document.register.sex3.value;
		}
	code=document.getElementById('code').value;
	phno=document.getElementById('phno').value;
	dob=document.getElementById('dob').value;
	email=document.getElementById('email').value;
	qual=document.getElementById('qual').value;
	addr=document.getElementById('addr').value;
	if (document.getElementById('feed1').checked){
			feed = document.register.feed1.value;
		} else if(document.getElementById('feed2').checked){
			feed = document.register.feed2.value;
		} else if(document.getElementById('feed3').checked){
			feed = document.register.feed3.value;
		}
		else{
			feed = document.register.feed4.value;
		}
	about=document.getElementById('about').value;
	
	validateform(fname,mname,lname,sex,code,phno,dob,email,qual,addr,feed,about);
	var var1 = data.innerHTML;
	var var2 = '<tr><td>'+fname+' '+mname+' '+lname+'</td><td>'+sex+'</td><td>'+code+' '+phno+'</td><td>'+dob+'</td><td>'+email+
	                 '</td><td>'+qual+'</td><td>'+addr+'</td><td>'+feed+'</td><td>'+about+'</td><tr>';
	//Adding the new entered values to previous ones
	var1 +=var2;
	//Sending data to the table to display the output
	data.innerHTML = var1;

	
}

function validateform(){
	if (fname == ' '){
		alert('First name must be filled.');
		return false;
	}
}
