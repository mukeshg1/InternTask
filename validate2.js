/**
* File Name  : RegFormScript
* File Path: C:\Users\mukeshg\Desktop\Internship\RegFormJquery
* Description : Validation of HTML form and Showing of data in table
* Created date : 11/01/2019
* Author  : @Mukesh
* Comments : First the validation is done and then only the data is passed into table
*/

$(function(){
	
	//Declaring global variables to be used throughout the function
	var first_name = '';
	var middle_name = '';
	var last_name = '';
	var user_sex = '';
	var country_code = '';
	var phone_number = '';
	var birth_date = '';
	var user_email = '';
	var user_qual = '';
	var user_addr = '';
	var about_user = '';
	var match = false;
	
	//Error count to limit the form for submission incase validation fails
	var error_count = 0;
	
	$("#name_Error").hide();
	$("#phone_Error").hide();
	$("birth_date_Error").hide();
	$("#email_Error").hide();
	$("#user_addr_Error").hide();
	$("#about_user_Error").hide();
	
	
	$("#first_name, #last_name").on('keyup keydown blur', function(event) {
      check_name();
	});
	
	$("#country_code, #phone_number").on('keyup keydown blur', function(event){
		check_phone();
	});
	
	$("#birth_date").on('keyup keydown blur', function(event){
		check_birthdate();
	});
	
	$("#user_email").on('keyup keydown blur', function(event){
		check_email();
	});
	
	$("#user_addr").on('keyup keydown blur', function(){
		check_addr();
	});
	
	$("about_user").on('keyup keydown blur', function(){
		check_about();
	});
	
	$("#submit_btn").click(function(){
		show_result();
	});
	
	//Edit function to edit elements of table
	$("#table_user").on('click', 'input[id="b_Edit"]', function(event) {
     	var table = $("#table_user");
		//fetching values from table
		table.find('tr').each(function (i) {
        var $tds = $(this).find('td'),
            name = $tds.eq(0).text(),
            sex = $tds.eq(1).text(),
			code = $tds.eq(2).text()
            phno = $tds.eq(3).text(),
			dob = $tds.eq(4).text(),
			email = $tds.eq(5).text(),
			addr = $tds.eq(6).text(),
			about = $tds.eq(7).text();
		//sending back the fetched value to form to edit	
            $("#first_name").val(name);
			$("#user_sex").val(sex);
			$("#phone_number").val(phno);
			$("#birth_date").val(dob);
			$("#user_email").val(email);
			$("#user_addr").val(addr);
			$("#about_user").val(about);
    });
		$(this).parent().parent().remove();
	});
	
	//delete function to delete a row from table
	$("#table_user").on('click', 'input[id="b_Del"]', function(event) {
      $(this).parent().parent().remove();
	});
	
	function check_name(){
		first_name = $("#first_name").val();
		last_name = $("#last_name").val();
		if(first_name.length === 0 || last_name.length === 0) {
			$("#name_Error").html("Enter Firstname and Lastname");
			$("#name_Error").show();
			error_count = 1;
		} else {
			$("#name_Error").hide();
		}
	}
	
	function check_phone(){
		country_code = $("#country_code").val();
		phone_number = $("#phone_number").val();
		if (country_code.length === 0 || phone_number.length != 10){
			$("#phone_Error").html("Enter valid number.");
			$("#phone_Error").show();
			error_count = 1;
		}
		else {
			$("#phone_Error").hide();
	}}
	
	function check_birthdate(){
		birth_date = $("#birth_date").val();
		if (birth_date === ''){
			$("#birth_date_Error").html("Enter valid date of birth.");
			$("#birth_date_Error").show();
			error_count = 1;
		} else{
			$("#birth_date_Error").hide();
		}
	}
	
	
	function check_email(){
		user_email = $("#user_email").val();
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(user_email)){
			$("#email_Error").html("Enter valid email address.");
			$("#email_Error").show();
			error_count = 1;
		}
		else {
			$("#email_Error").hide();
	}}
	
	function check_addr(){
		user_addr = $("#user_addr").val();
		if (user_addr.length === 0){
			$("#user_addr_Error").html("Enter your address.");
			$("#user_addr_Error").show();
			error_count = 1;
		}
		else {
			$("#user_addr_Error").hide();
	}}
	
	function check_about(){
		about_user = $("#about_user").val();
		if (about_user.length === 0){
			$("#about_user_Error").html("Write something about yourself.");
			$("#about_user_Error").show();
			error_count = 1;
		}
		else {
			$("#about_user_Error").hide();
		}
	}
	
	function check_match(){

	}
	
	//function to display result in a table
	function show_result(){
		
		error_count = 0;
		match = false;
		
		check_name();
		check_phone();
		check_addr();
		check_email();
		check_about();
		
		
		user_sex = $( "#sex1:checked" ).val();


		if (error_count === 0){
		  if (match === false){
		    $("#user_data").append('<tr><td>'+first_name+' '+$("#middle_name").val()+' '+last_name+'</td>'+
							   '<td>'+user_sex+'</td>'+
							   '<td>'+country_code+'</td>'+
							   '<td>'+phone_number+'</td>'+
							   '<td>'+$("#birth_date").val()+'</td>'+
							   '<td>'+user_email+'</td>'+
							   '<td>'+user_addr+'</td>'+
							   '<td>'+about_user+'</td>'+
							   '<td>'+'<input type="button" value="Edit" id="b_Edit"><input type="button" value="Delete" id="b_Del">'+'</td></tr>');
		    $("#register_form").trigger('reset');
			$('#register_form').scrollIntoView();
		    }
		  else{
		    alert('Registration failed. User exits');}
		}else {
			alert('Fill out all the mandotary field.');
		}
		
	}
	
	
});
