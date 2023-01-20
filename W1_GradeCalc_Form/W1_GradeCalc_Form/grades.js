const $ = selector => document.querySelector(selector);

const calculate = evt => {
    //get user entries from the text boxes
    const student_fName = $("#student_fName").value;
    const student_lName = $("#student_lName").value;
    const assignments = $("#assignments").value * .2;
    const labs = $("#labs").value * .2;
    const midterm = $("#midterm").value * .25;
    const final = $("#final").value * .35;
    const average = assignments + labs + midterm + final;


    //check user entries
    let isValid = true;

    const display = document.getElementById('results');
    display.innerHTML = "Final Grade Average: " + average;

    if (student_fName == ""){
        $("#student_fName_error").textContent = "Student First Name is required.";
        isValid = false;
    }
    else{
        $("#student_fName_error").textContent = "";
    }

    if (student_lName == ""){
        $("#student_lName_error").textContent = "Student Last Name is required.";
        isValid = false;
    }
    else{
        $("#student_lName_error").textContent = "";
    }

    //Assignment grade input
    
    if (isNaN(assignments)){
        $("#assignments_error").textContent = "Please use a numerical value.";
        isValid = false;
    }
    else if (assignments == "") {
        $("#assignments_error").textContent = "A grade for Assignments is required.";
        isValid = false;
    }
    else{
        $("#assignments_error").textContent = "";
    }

    //Labs grades input
    if (isNaN(labs)){
        $("#labs_error").textContent = "Please use a numerical value.";
        isValid = false;
    }
    else if (labs == "") {
        $("#labs_error").textContent = "A grade for Labs is required.";
        isValid = false;
    }
    else{
        $("#labs_error").textContent = "";
    }

    //Midterm grade input
    if (isNaN(midterm)){
        $("#midterm_error").textContent = "Please use a numerical value.";
        isValid = false;
    }
    else if (midterm == "") {
        $("#midterm_error").textContent = "A Midterm exam grade is required.";
        isValid = false;
    }
    else{
        $("#midterm_error").textContent = "";
    }

    //Final grade input
    if (isNaN(final)){
        $("#final_error").textContent = "Please use a numerical value.";
        isValid = false;
    }
    else if (final == "") {
        $("#final_error").textContent = "A Final exam grade is required.";
        isValid = false;
    }
    else{
        $("#final_error").textContent = "";
    }

    //cancel form submit if any user entries are invalid
    if (isValid == false) {
        evt.preventDefault();
        $("#results").textContent = "Please fill in all required fields.";
    }
};


const clearForm = () => {
    //clear text boxes
    $("#student_fName").value = "";
    $("#student_lName").value = "";
    $("#assignments").value = "";
    $("#labs").value = "";
    $("#midterm").value = "";
    $("#final").value = "";
    $("#results").textContent = "";


    //clear span elements
    $("#student_fName_error").textContent = "*";
    $("#student_lName_error").textContent = "*";
    $("#assignments_error").textContent = "*";
    $("#labs_error").textContent = "*";
    $("#midterm_error").textContent = "*";
    $("#final_error").textContent = "*";


    //set focus on the first text box after resetting the form
    $("#student_fName").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    //hook up click events for both buttons
    $("#calculate").addEventListener("click", calculate);
    $("#clear_form").addEventListener("click", clearForm);

    //set focus on first text box after the form loads
    $("#student_fName").focus();
});





