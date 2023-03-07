"use strict";

const displayPersons = () =>
{
    personList.sort();

    let html = "";

    for (const person of personList)
    {
        html += "<p><a href='#'>Delete</a>" + person.toString() + "</p>";
    }

    $("#persons").html(html);

    $("#persons").find("a").each((index, a ) =>
    {
        $(a).click (evt =>
            {
                personList.load().delete(index).save();

                displayPersons();

                evt.preveentDefault();
                $("input:first").focus();
            });
    });
}

$(document).ready(() => 
{
    $("#add_person").click(() => 
    {
        const personObj = 
        {
            fname: $("#fname").val(),
            mname: $("#mname").val(),
            lname: $("#lname").val(),
            street1:$("#street1").val(),
            street2:$("#street2").val(),
            city: $("#city").val(),
            state: $("#state").val(),
            zipCode: $("#zip").val(),
            homeNum: $("#homeNum").val(),
            workNum: $("#workNum").val(),
            cellNum: $("#cellNum").val(),
            email: $("#email").val(),
            dob: $("#dob").val(),
            credits: $("#credits").val(),
            inhabitants: $("#people").val(),
            notes: $("#notes").val()
        };

    
    
        const newPerson = new Person(personObj);
        
        if (newPerson.IsValid)
        {
            personList.load().add(newPerson).save();
            displayPersons();
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
        }
        else
        {
            alert("Please enter all the correct info");
        }
        $("#fname").select();
    });

    //Clear form
    $("#clear_form").click( () =>
    {
        personList.clear();
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

    personList.load()
    displayPersons();
    $("fname").focus;
    
})
