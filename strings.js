function validateform(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const zipcode = document.getElementById("zipcode").value;

    let fullname = firstname + " " + lastname;
    let fullzip = zipcode + "";
    let lengthname = fullname.length;
    let lengthzip = fullzip.length;

    if (lengthname > 20 && lengthzip == 5) {

        alert(" good for you I guess");
    } else{
        alert("i think you messed up")
    }
}
function isPalindrome(str){
    const processedStr = str.toLowerCase().replace(/\s/g, '');
    return processedStr === processedStr.split ('').reverse().join('');
}

while (true){
    const userInput = prompt("enter a string:");

    if (userInput === null || userInput === ""){
        alert("exiting the program.");
        break;
    }

    if (isPalindrome(userInput)){
        alert(`"${userInput}" is a palindrome.`);
    }


    else {
        alert(`"${userInput}" is not a palindrome.`);
    }
}