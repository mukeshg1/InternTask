/**
* File Name  : RegFormScript
* File Path: C:\Users\mukeshg\Desktop\Internship\RegFormJquery
* Description : Validation of HTML form and Showing of data in table
* Created date : 11/01/2019
* @Author  : Mukesh
* Comments : First the validation is done and then only the data is passed into table
*/

$(document).ready(function(){
	
	//Declaring global variables to be used throughout the function
	var first_name = '';
	var user_sex = '';
	var country = '';
	var state = '';
	var city = '';
	var phone_number = '';
	var birth_date = '';
	var user_email = '';
	var user_qual = '';
	var user_addr = '';
	var about_user = '';
	var match = false;
	var phonearray = new Array();
	var emailarray = new Array();
	
	//Error count to limit the form for submission incase validation fails
	var error_count = 0;
	
	$("#name_Error").hide();
	$("#country_Error").hide();
	$("#phone_Error").hide();
	$("#birth_date_Error").hide();
	$("#email_Error").hide();
	$("#user_addr_Error").hide();
	$("#about_user_Error").hide();
	
	
	//Dependent values starts here
	load_json_data('country');

	function load_json_data(id, parent_id)
	{
	var html_code = '';
	$.getJSON('country_state_city.json', function(data){
		html_code += '<option value="">Select '+id+'</option>';
	    $.each(data, function(key, value){
		if(id == 'country')
		{
		  if(value.parent_id == '0')
		  {
		     html_code += '<option value="'+value.id+'">'+value.name+'</option>';
		  }
		}
		else
		{
		 if(value.parent_id == parent_id)
		{
		  html_code += '<option value="'+value.id+'">'+value.name+'</option>';
		}
		}
	    });
	   $('#'+id).html(html_code);
	}); }

	$(document).on('change', '#country', function(){
		var country_id = $(this).val();
	    if(country_id != '')
	    {
	      load_json_data('state', country_id);
	    }
	    else
	    {
	      $('#state').html('<option value="">Select state</option>');
	      $('#city').html('<option value="">Select city</option>');
	    }
	 });
	$(document).on('change', '#state', function(){
		var state_id = $(this).val();
	    if(state_id != '')
	    {
	     load_json_data('city', state_id);
	    }
	    else
	    {
	      $('#city').html('<option value="">Select city</option>');
	    }
	});
	//Dependent values ends here
		
	
	
	$("#first_name").on('keyup keydown blur', function(event) {
      check_name();
	});
	
	$("#country #state #city").on('change', function(event){
		check_country();
	});
	
	$("#phone_number").on('keyup keydown blur', function(event){
		check_phone();
	});
	
	$("#birth_date").on('keyup keydown blur', function(event){
		check_birthdate();
	});
	
	$("#user_email").on('keyup keydown blur', function(event){
		check_email();
	});
	
	$("#user_addr").on('keyup keydown blur', function(event){
		check_addr();
	});
	
	$("about_user").on('keyup keydown blur', function(event){
		check_about();
	});
	
	$("#submit_btn").click(function(){
		show_result();
	});
	
	
	
	//Edit function to edit elements of table
	var _trEdit = null;
	$(document).on('click', '#b_Edit', function() {
		//fetches the value from the clicked row
     	_trEdit = $(this).closest('tr');
		var _name = $(_trEdit).find('td:eq(0)').text();
		var _sex = $(_trEdit).find('td:eq(1)').text();
		var _country = $(_trEdit).find('td:eq(2)').text();
		var _state = $(_trEdit).find('td:eq(3)').text();
		var _city = $(_trEdit).find('td:eq(4)').text();
		var _phone = $(_trEdit).find('td:eq(5)').text();
		var _dob = $(_trEdit).find('td:eq(6)').text();
		var _email = $(_trEdit).find('td:eq(7)').text();
		var _addr = $(_trEdit).find('td:eq(8)').text();
		var _about = $(_trEdit).find('td:eq(9)').text();
		
		//sends the value back to form from table
		$("#first_name").val(_name);
		$("#sex").val(_sex);
		$("#country").val(_country);
		$("#state").val(_state);
		$("#city").val(_city);
		$("#phone_number").val(_phone);
		$("#birth_date").val(_dob);
		$("#user_email").val(_email);
		$("#user_addr").val(_addr);
		$("#about_user").val(_about);
		
		document.documentElement.scrollTop = 0;
		$('#submit_btn').prop('disabled', true);
		$('#b_Update').prop('disabled', false);
	});

	//Updates the value in table
	$(document).on('click', '#b_Update', function() {
		var _name = $("#first_name").val();
		var _sex = $("#sex").val();
		var _country = $("#country").val();
		var _state = $("#state").val();
		var _city = $("#city").val();
		var _phone = $("#phone_number").val();
		var _dob = $("#birth_date").val();
		var _email = $("#user_email").val();
		var _addr = $("#user_addr").val();
		var _about = $("#about_user").val();
		
		$(_trEdit).find('td:eq(0)').text(_name);
		$(_trEdit).find('td:eq(1)').text(_sex);
		$(_trEdit).find('td:eq(2)').text(_country);
		$(_trEdit).find('td:eq(3)').text(_state);
		$(_trEdit).find('td:eq(4)').text(_city);
		$(_trEdit).find('td:eq(5)').text(_phone);
		$(_trEdit).find('td:eq(6)').text(_dob);
		$(_trEdit).find('td:eq(7)').text(_email);
		$(_trEdit).find('td:eq(8)').text(_addr);
		$(_trEdit).find('td:eq(9)').text(_about);
		_trEdit = null;
		document.documentElement.scrollTop = 0;
		$("#register_form").trigger('reset');
		$('#b_Update').prop('disabled', true);
		$('#submit_btn').prop('disabled', false);
	});
	
	//delete function to delete a row from table
	$(document).on('click', '#b_Del', function() {
      $(this).closest('tr').remove();
	});
	
	function check_name(){
		first_name = $("#first_name").val();
		if(first_name.length === 0) {
			$("#name_Error").html("Enter your fullname");
			$("#name_Error").show();
			error_count = 1;
		} else {
			$("#name_Error").hide();
		}
	}
	
	function check_country(){
		country = $("#country").val();
		state = $("#state").val();
		city = $("#city").val();
		if (country.length === 0 || state.length === 0 || city.length === 0){
			$("#country_Error").html("Select, Country and State.");
			$("#country_Error").show();
			error_count = 1;
		}
		else{
			$("#country_Error").hide();
		}
	}
	function check_phone(){
		phone_number = $("#phone_number").val();
		if (phone_number.length != 10){
			$("#phone_Error").html("Enter a valid number.");
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
			error_count = 0;
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
		if ($.inArray(phone_number, phonearray) != '-1' || $.inArray(user_email, emailarray) != '-1') {
            match = true;
	}
	}
	//function to display result in a table
	function show_result(){
		
		error_count = 0;
		match = false;
		
		check_name();
		check_country();
		check_phone();
		check_addr();
		check_email();
		check_about();
		check_match();
		
		

		if (error_count === 0){
		  if (match === false){
			phonearray.push(phone_number);
			emailarray.push(user_email);
			
		    $("#user_data").append('<tr><td>'+first_name+'</td>'+
							   '<td>'+$("#sex").val()+'</td>'+
							   '<td>'+country+'</td>'+
							   '<td>'+state+'</td>'+
							   '<td>'+city+'</td>'+
							   //'<td>'+country_code+'</td>'+
							   '<td>'+phone_number+'</td>'+
							   '<td>'+$("#birth_date").val()+'</td>'+
							   '<td>'+user_email+'</td>'+
							   '<td>'+user_addr+'</td>'+
							   '<td>'+about_user+'</td>'+
							   '<td>'+'<input type="button" value="Edit" id="b_Edit"><input type="button" value="Delete" id="b_Del">'+'</td></tr>');
		    $("#register_form").trigger('reset');
			document.documentElement.scrollTop = 0;			
		    }
		  else{
		    alert('Registration failed. User exits');}
		}else {
			alert('Fill out all the mandotary field.');
		}
		
	}
	
	
});
