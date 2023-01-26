const $ = selector => document.querySelector(selector);

//email_1  => stuff before @ => Find the @(indexOf), copy the stuff from 0 to @ (exlusive)

//first_name => last 2 characters of the name => Get length (1 greater than last subscript) -> startingPoint = length -2, Copy (substr) 2 chars

//smurf / personality trait => copy the first three characters => substr(0, 3)

// season => => Does it have an A, U, I
/* If it has an A, Store an A
 * Else if has an I, Store it
 * else Store the u
 */


//birthplace => First chars ()=> substr(0, 2)


//Jedi Name = tEmail + tFirst_Name + tSmurf + "-" + tBirthplace + tSeason;



const joinList = evt => {

//*************************************************************************************************************************************************
    //gather the values stored in the specified textboxes
    let tEmail = $("#email_1").value;
    let tFirstName = $("#first_name").value;
    let tBirthPlace = $("#birthplace").value;
    let tSeason = $("#season").value;
    let tSmurf = $("#smurf").value;


//*************************************************************************************************************************************************
    //email_1  => stuff before @ => Find the @(indexOf), copy the stuff from 0 to @ (exlusive)
    let tPos1 = tEmail.indexOf("@", 0);     //Find the position of the @ sign.  Use slambert@neit.edu as the example. If "s" is in zero position, @ is in the eight (8)

    tEmail = tEmail.substr(0, tPos1);   //copy email addess starting with zero ("s"), copy 8 characters: "slambert"

    alert("Email: " + tEmail);      //outputing for testing purposes until we get comfortable


//*************************************************************************************************************************************************
//first_name => last 2 characters of the name => Get length (1 greater than last subscript) -> startingPoint = length -2, Copy (substr) 2 chars

    let lenFirst = tFirstName.length;                   //get the length, so we can move cursor to the end of the first name Ex: "Scott" -> 5 chars
    tFirstName = tFirstName.substr(lenFirst - 2, 2);    //Copy the part of the name two chars from the right (5-2=3), and copy 2 characters

    alert(tFirstName);                                  //Display results for testing....knowing we got the right stuff

//*************************************************************************************************************************************************
    //smurf / personality trait => copy the first three characters => substr(0, 3)

    tSmurf = tSmurf.substr(0, 3);                       //Copy from the very first spot in the character array (0).  Ex: brainy => 'b', 'r', 'a'


//*************************************************************************************************************************************************
// season => => Does it have an A, U, I
/* If it has an A, Store an A
 * Else if has an I, Store it
 * else Store the u
 */
    if (tSeason.indexOf("a", 0) > -1) { tSeason = "a"; }            //if the index is  not -1, then it found the character, use that character
    else if (tSeason.indexOf("i", 0) > -1) { tSeason = "i"; }
    else { tSeason = "u"; }

//*************************************************************************************************************************************************
    //birthplace => First chars ()=> substr(0, 2)
    tBirthPlace = tBirthPlace.substr(0, 2);                         //Were are copying from the first spot (0) and copy two chars.

//*************************************************************************************************************************************************
    //Jedi Name = tEmail + tFirst_Name + tSmurf + "-" + tBirthplace + tSeason;
    let jediName = tEmail + tFirstName + tSmurf + "-" + tBirthPlace + tSeason;  //Concatenate (add) the strings together to form Jedi name

    alert("Your Jedi name henceforth will be: " + jediName);    //Say it loud, say it proud ;)




    // I want to ALWAYS prevent the button from moving us to the next page (page does not exist), I could get rid of the IF and just keep what is inside it
    if (false=== false) {
        evt.preventDefault();
    }

};


const clearForm = () => {
    /*
    //clear text boxes
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";

    //clear span elements
    $("#email_1_error").textContent = "*";
    $("#email_2_error").textContent = "*";
    $("#first_name_error").textContent = "*";

    //set focus on the first text box after resetting the form
    $("#email_1").focus();
    */
};


document.addEventListener("DOMContentLoaded", () => {
    //hook up click events for both buttons
    $("#join_list").addEventListener("click", joinList);        //When user clicks the join_list button on the form, run the joinList function
    $("#clear_form").addEventListener("click", clearForm);

    // set focus on first text box after the form loads
    $("#email_1").focus();
}); 