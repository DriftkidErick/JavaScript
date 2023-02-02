//Hey welcome to my JavaScript Validations

//ZIP Validations
function IsZipBad(strZip)
{
    goodNums = ["0","1","2","3","4","5","6","7","8","9"];

    //Assume the worst
    results = false;

    for (val of goodNums)
    {
        if (isNaN(strZip) || strZip.length != 5)
        //Horray it failed
        results = true;
    }

    return results;

    //To get this to work
    //If (IsValidZip(Enter Zip Code Var here) == true) 
    {
        //hey man they inputed something wrong lets throw an error
    }

}

//State Validations

function IsStateBad(strState)
{
    goodStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

    //Assume it  passes
    doesItFail = false;

    for (val of goodStates)
    {
        if (isNaN(strState) || strState.toLowerCase().length != 2)
        {
            //Darn it failed
            doesItFail = true;
        }
    }

    return doesItFail;

    //To get this to work
    //If (isStateBad(eneter state var here)) == true) 
    //{
        //hey man they inputed something wrong lets throw an error
    //}

}
