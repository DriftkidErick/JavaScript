//Remeber this has to do more with the user buttons

"use strict";

$(document).ready(() => 
{
    //Create an object instance of Person (class) called person object
    const persons = new Persons();

    //Event handler: When buttons are clicked

    $("#join_list").click(() => 
    {
        //Create person instance passing in form information via the constructor 
        
        const person = new Person(
            $("#fname").val(), $("#mname").val(), $("#lname").val(), $("#street1").val(), $("#street2").val(), $("#city").val(),  $("#state").val(), $("#zip").val(), $("#homeNum").val(), $("#workNum").val(), $("#cellNum").val(), $("#email").val(), $("#dob").val(), $("#credits").val(), $("#people").val(), $("#notes").val());

        //If the person information is valid
        if (person.IsValid)
        {
            persons.push(person);

            $("#person_list").val(persons.toString());

            //List all trips in array
            $("#fname").val("");
            $("#mname").val(""); 
            $("#lname").val(""); 
            $("#street1").val("");
            $("#street2").val("");
            $("#city").val("");
            $("#state").val("");
            $("#zip").val("");
            $("#homeNum").val("");
            $("#workNum").val("");
            $("#cellNum").val("");
            $("#email").val("");
            $("#dob").val("");
            $("#credits").val("");
            $("#people").val("");
            $("#notes").val("");


            //Set focus to first name
            $("#fname").focus();


        }

        else
        {
            alert("HEY!!! There are some errors\n\n" + person.feedback);

            $("#fname").select();
        }


    });

    $("#fname").focus();

    $("#clear_form").click(() => 
    {
        //List all trips in array
        $("#fname").val("");
        $("#mname").val(""); 
        $("#lname").val(""); 
        $("#street1").val("");
        $("#street2").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zip").val("");
        $("#homeNum").val("");
        $("#workNum").val("");
        $("#cellNum").val("");
        $("#email").val("");
        $("#dob").val("");
        $("#credits").val("");
        $("#people").val("");
        $("#notes").val("");

    });
});