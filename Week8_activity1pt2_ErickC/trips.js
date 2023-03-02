//Remeber this has to do more with the user button functions

"use strict";

//When the page is loaded
$(document).ready(() => 
{
    //create an object instance of trip (class) called 'trip' (object)
    const trips = new Trips();

    //Event handler: When  buttons are clicked

    $("#add_trip").click(() =>
    {
        //create trip instance passing in form information via the constructor
        //if you forget what this is relate it to C#

        const trip = new Trip(
            $("#destination").val(), $("#miles").val(), $("#gallons").val() );

            //if the trip information is valid
            if (trip.isValid)
            {
                trips.push(trip); //Pushesd it into array
                $("#trip_list").val(trip.toString()); //List all trips in array within textarea

                $("#destination").val(""); //clear textboxes to prepare for next entry
                $("#miles").val("");
                $("#gallons").val("");

                $("#destination").focus();
            }

            else
            {
                //else let person know something is invalid
                alert("Please complete all feilds. \nMiles and gallons" + "must be numeric and greater than zero");
                $("#destination").select();
            }

    });

    $("#destination").focus(); //By default, when page is loaded set distinate feild as focus point
})