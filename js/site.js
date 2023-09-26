//Get the string from the page
//controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible"); //good invisible way to make the alert invisible when it happens

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString)

}
//Reverse the string
//logic function
function reverseString(userString){

    let revString = [];

    //last pos in an array name.length -1

    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}

//Display the reversed string to the user
//View Function
function displayString(revstring){
    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`; //temprate latteral is recommended, lot cleaner
//show the alert box
    document.getElementById("alert").classList.remove
}