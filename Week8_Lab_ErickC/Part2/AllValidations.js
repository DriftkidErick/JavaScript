//Hey welcome to my JavaScript Validations


//Check for bad words
function GotBadWords(strAnything) {
    badWords = ["homework", "poop", "exam", "lecture", "test"];

    //Assume the good
    results = false;

    //Loop thru the list of bad words and see if we find any inside the "anything" string
    for (val of badWords) {
        if (strAnything.toLowerCase().indexOf(val) > -1) {
            results = true;
        }
    }

    //Return results
    return results;

}

//ZIPCODE TEST VALIDATION
function IsZipBad(strZip)
{
    goodNums = ["0","1","2","3","4","5","6","7","8","9"];

    //Assume the worst
    results = false

    for (val of goodNums)
    {
        if (isNaN(strZip) && strZip.length != 5)
        //Horray it passed
        results = true;
    }

    return results;
}

function IsStateGood(strState)
{
    goodStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

    //Assume it fails
    doesItPass = false;

    if (!isNaN(strState) && strState.length != 2)
        {
            //Darn it failed
            doesItPass = false; 
        }

        else
        {
            for (val of goodStates)
            {
                if (val == strState.toUpperCase())
                {
                    //Horray the val and strState are a match
                    doesItPass = true;
                }
            }
        }
        

    return doesItPass;

}

//Function for Birthday
function isValidDOB(strDOB)
{
    today = new Date();

    birthday = new Date(dob);

    doesItPass = true;

    if( birthday > today)
    {
        doesItPass = false;
    }

    return doesItPass;
}

function minimumCredits(intCredits)
{   
    minCred = 0;
    doesItPass = true;

    if(intCredits >= min)
    {
        doesItPass = true;
    }
    else
    {
        doesItPass = false;
    }
    return doesItPass;
}

function minimumPeople(intPeople)
{   
    minPeeps = 0;
    doesItPass = true;

    if(intPeople >= minPeeps)
    {
        doesItPass = true;
    }
    else
    {
        doesItPass = false;
    }
    return doesItPass;
}

//Here i gave up and learned regular expressions
function isPhoneValid(strPhone)
{
    phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

    if(phoneReg.test(strPhone))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isZipCode(strZip)
{
    regexp = /^[0-9]{5}$/;

        if (regexp.test(strZip)) //If this passes
            {
            return true;
            }
        else // if it fails
            {
            return false;
            }
}

function IsValidEmail(strEmail) 
{

    results = true;         //Initialize results

    atPos = strEmail.indexOf("@", 0);   //Should return position or -1

    //If not found or first char
    if (atPos == -1 || atPos < 1) {
        results = false;
    }

    //If we find another @, we have an issue
    atPos2 = strEmail.indexOf("@", (atPos +1))
    if (atPos2 > -1) {
        results = false;
    }

    //Find the last Period
    lastPeriodPos = strEmail.indexOf(".", 0);
    if (lastPeriodPos == -1) {
        results = false;
    }

    tLastPeriodPos = lastPeriodPos;

    //while loop to continue finding periods until there are no more
    while (tLastPeriodPos > -1) {
        tLastPeriodPos = strEmail.indexOf(".", (tLastPeriodPos + 1))    //Look for next period
        //If we find another period, store its position
        if (tLastPeriodPos > -1) {  
            lastPeriodPos = tLastPeriodPos;
        }
    }


    //Is there at least one char between the @ and the last period
    if ((lastPeriodPos - atPos) < 2) {
        results = false;
    }

    alert("Last Period: " + lastPeriodPos + "  --  Length: " + strEmail.length);

    //get length of characters after the last period, make sure it >= 2
    if (strEmail.length - lastPeriodPos < 3) {
        results = false;
    }

    //We did all our tests, send the assumed results
    return results;
}