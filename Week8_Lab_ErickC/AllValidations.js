//Hey welcome to my JavaScript Validations

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