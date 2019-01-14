/**
* File Name  : RegFormScript
* File Path: C:\Users\mukeshg\Desktop\Internship\RegFormJquery
* Description : Validation of HTML form and Showing of data in table
* Created date : 11/01/2019
* Author  : @Mukesh
* Comments : First the validation is done and then only the data is passed into table
*/

$(function(){
		
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
	
	var error_name = false;
	var error_phone = false;
	var error_email = false;
	var error_addr = false;
	var error_about = false;
	
	$("#name_Error").hide();
	$("#phone_Error").hide();
	$("birth_date_Error").hide();
	$("#email_Error").hide();
	$("#user_addr_Error").hide();
	$("#about_user_Error").hide();
	
	$("#first_name, #last_name").keyup(function(){
		check_name();
	});
	
	$("#country_code, #phone_number").keyup(function(){
		check_phone();
	});
	
	$("#birth_date").keyup(function(){
		check_birthdate();
	});
	
	$("#user_email").keyup(function(){
		check_email();
	});
	
	$("#user_addr").keyup(function(){
		check_addr();
	});
	
	$("about_user").keyup(function(){
		check_about();
	});
	
	$("#submit_btn").click(function(){
		show_result();
	});
	
	$("#table_user").on('click', 'input[id="b_Edit"]', function(event) {
      alert("Clicked on edit");
	});
	
	$("#table_user").on('click', 'input[id="b_Del"]', function(event) {
      $(this).parent().parent().remove();
	});
	
	/*$("#table_user").on('click','b_Del',function(){
		alert("hello");
       $(this).parent('tr').remove();
     });*/


	function check_name(){
		first_name = $("#first_name").val();
		last_name = $("#last_name").val();
		if(first_name.length === 0 || last_name.length === 0) {
			$("#name_Error").html("Enter Firstname and Lastname");
			$("#name_Error").show();
			error_name = true;
		} else {
			$("#name_Error").hide();
		}
	}
	
	function check_phone(){
		country_code = $("#country_code").val();
		phone_number = $("#phone_number").val();
		if (phone_number.length != 10){
			$("#phone_Error").html("Enter valid number.");
			$("#phone_Error").show();
			error_phone = true;
		}
		else {
			$("#phone_Error").hide();
	}}
	
	
	
	function check_email(){
		user_email = $("#user_email").val();
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(user_email)){
			$("#email_Error").html("Enter valid email address.");
			$("#email_Error").show();
			error_email = true;
		}
		else {
			$("#email_Error").hide();
	}}
	
	function check_addr(){
		user_addr = $("#user_addr").val();
		if (user_addr.length === 0){
			$("#user_addr_Error").html("Enter your address.");
			$("#user_addr_Error").show();
			error_addr = true;
		}
		else {
			$("#user_addr_Error").hide();
	}}
	
	function check_about(){
		about_user = $("#about_user").val();
		if (about_user.length === 0){
			$("#about_user_Error").html("Write something about yourself.");
			$("#about_user_Error").show();
			error_about = true;
		}
		else {
			$("#about_user_Error").hide();
	}}
	
	function show_result(){

		
		$("#user_data").append('<tr><td>'+$("#first_name").val()+' '+$("#middle_name").val()+' '+$("#last_name").val()+'</td><td>'+'<b>male</b>'+'</td><td>'+$("#country_code").val()+' '+$("#phone_number").val()+'</td><td>'+$("#birth_date").val()+'</td><td>'+$("#user_email").val()+
  			 '</td><td>'+$("#user_qual").val()+'</td><td>'+$("#user_addr").val()+'</td><td>'+$("#about_user").val()+'</td><td>'+'<input type="button" value="Edit" id="b_Edit"><input type="button" value="Delete" id="b_Del">'+'</td></tr>');

	}
	
	function edit_result(){
		
	}
	
	
	
});