function checkFirstName(){
    var firstNameValue = $('#firstName').val();
    if (firstNameValue.length > 6 && firstNameValue.length < 16){
        $('#firstNameError').text(' ');
        return true;
    } else {
        $('#firstNameError').text(' First Name should be 7 to 15 charecter ');
        return false;
    }

}

$('#firstName').keyup(function () {
    checkFirstName();
});

function checkLastName(){
    var lastNameValue = $('#lastName').val();
    if (lastNameValue.length > 6 && lastNameValue.length < 16){
        $('#lastNameError').text(' ');
        return true;
    } else {
        $('#lastNameError').text(' Last Name should be 7 to 15 charecter ');
        return false;
    }
}

$('#lastName').keyup(function () {
checkLastName();
});

function checkEmailAddress(){
    var emailAddressValue = $('#emailAddress').val();
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if(pattern.test(emailAddressValue)){
        $('#emailAddressError').text(' ');
        return true;
    } else
        $('#emailAddressError').text('your Email Address is invalid');
        return false;
}

$('#emailAddress').keyup(function () {
    checkEmailAddress();
})

function checkPassword(){
    var passwordValue = $('#password').val();
    if(passwordValue.length > 7){
        $('#passwordError').text(' ');
        return true;
    } else{
        $('#passwordError').text(' Password should be in 8 charecter ');
        return false;
    }
}

$('#password').keyup(function () {
    checkPassword();
})

function checkConfirmPassword(){
    var passwordValue = $('#password').val();
    var confirmpasswordValue = $('#confirmPassword').val();
    if (passwordValue == confirmpasswordValue){
        $('#confirmPasswordError').text(' ');
        return true;
    } else
        $('#confirmPasswordError').text(' Password are not same');
    return false;
}

$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
});

$('#showPassword').click(function () {
    if(this.checked){
        $('#password').attr('type','text');

    }else{
        $('#password').attr('type','password');
    }
});


function checkGender() {
    var genderValue = $('input[type="radio"]:checked').val();
    if(genderValue == "male") {
        $('#GenderError').text(' ');
        return true;
    } else if(genderValue == "Female"){
        $('#GenderError').text(' ');
        return true;
    } else {
        $('#GenderError').text('Please Select Gender info ');
        return false;
    }
}


function checkDistrictName() {

    var districtNameValue = $('#districtName').val();
    if(districtNameValue == ' '){
        $('#districtNameError').text('please select a district Name');
        return false;
    } else {
        $('#districtNameError').text(' ');
        return true;
    }
}


$('#districtName').change(function () {
    checkDistrictName();
})






$('#myForm').submit(function () {
    if (checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPassword() == true && checkConfirmPassword() == true && checkDistrictName() == true && checkGender() == true ){
        return true;
    } else {
        return false;
    }
});