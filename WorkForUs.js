function ValidateVacancyForm() {
    var returnValue;
    var flag1, flag2, flag3, flag4;
    if (document.forms["VacancyApplicationForm"]["fname"].value == "") {
        document.getElementById("fNameError").innerHTML = "Please Enter your First Name";
        flag1 = false;
    }
    else {
        document.getElementById("fNameError").innerHTML = "";
        flag1 = true;
    }
    if (document.forms["VacancyApplicationForm"]["sname"].value == "") {
        document.getElementById("sNameError").innerHTML = "Please Enter your Last Name";
        flag2 = false;
    }
    else {
        document.getElementById("sNameError").innerHTML = "";
        flag2 = true;
    }
    if (document.getElementById("ukResidentYes").checked == false && document.getElementById("ukResidentNo").checked == false) {
        document.getElementById("ukResidentError").innerHTML = "Please say if you are a UK Resident";
        flag3 = false;
    }
    else {
        document.getElementById("ukResidentError").innerHTML = "";
        flag3 = true;
    }
    if (document.forms["VacancyApplicationForm"]["telNo"].value == "") {
        document.getElementById("telNoError").innerHTML = "Please Enter your contact details";
        flag4 = false;
    }
    else {
        var telNo = document.forms["VacancyApplicationForm"]["telNo"].value;

        if (isNaN(telNo)) {
            document.getElementById("telNoError").innerHTML = "Please make sure your contact details is a number";
            flag4 = false;
        }
        else if (telNo.length < 10 || telNo.length > 12) {
            document.getElementById("telNoError").innerHTML = "This phone number is incorrect, please check and try again";
            flag4 = false;
        }
        else {
            document.getElementById("telNoError").innerHTML = "";
            flag4 = true;
        }
    }
    if (flag1 == true && flag2 == true && flag3 == true && flag4 == true) {
        returnValue = true;
        window.location.href("ThankYou.html");
    }
    else
    {
        returnValue = false;
    }
    return returnValue;
}
