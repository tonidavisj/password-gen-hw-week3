// // Assignment Code
var generateBtn = document.getElementById("generate");
var generatedPass = "";
var passwordCharTypesWanted = [];
var randomIndex = 0;
var getLowercaseCheckbox = false;
var getUppercaseCheckbox = false;
var getSymbolCheckbox = false;
var getNumberCheckbox = false;
var passwordLength = 0;
var charIs = "";

// Select length of password.. Should be between 8 and 128 characters
for(var i = 8; i <= 128 ; i++){
    $("#lengthDropdown").append("<option value="+[i]+">"+[i]+"</option>")
}

// Lowercase Function
function getLowerCase() {
    var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    randomIndex = Math.floor(Math.random() * 26);
    return lowerCaseLetters[randomIndex];
}

// Uppercase Function
function getUpperCase() {
    var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    randomIndex = Math.floor(Math.random() * 26);
    return upperCaseLetters[randomIndex];
}

// Symbol Function
function getSymbol(){
    var symbols = ['!','(',')','"',',','_','-','{','}','[',']','~'];
    randomIndex = Math.floor(Math.random() * 12);
    return symbols[randomIndex];
}

// NUmber Function
function getNumber() {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    randomIndex = Math.floor(Math.random() * 10);
    return numbers[randomIndex];
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    //debugger;
    getLowercaseCheckbox = document.getElementById("wantsLowercase").checked;
    getUppercaseCheckbox = document.getElementById("wantsUppercase").checked;
    getSymbolCheckbox = document.getElementById("wantsSymbols").checked;
    getNumberCheckbox = document.getElementById("wantsNumbers").checked;
    passwordLength = document.getElementById("lengthDropdown").value;
    errors = document.getElementsByClassName("charError");
    errors[0].removeAttribute("style");
    generatedPass = "";
    passwordCharTypesWanted = [];

    if(getLowercaseCheckbox === false && getUppercaseCheckbox === false && getSymbolCheckbox === false && getNumberCheckbox === false){
        errors[0].setAttribute("style", "display:block;");
        return;
    }

    if(getLowercaseCheckbox){
        passwordCharTypesWanted.push("lowercase");
    }

    if(getUppercaseCheckbox){
        passwordCharTypesWanted.push("uppercase");
    }

    if(getSymbolCheckbox){
        passwordCharTypesWanted.push("symbol");
    }

    if(getNumberCheckbox){
        passwordCharTypesWanted.push("number");
    }

    

    //create password
    for(var i = 0; i < passwordLength; i++){
        var randomPickChar = Math.floor(Math.random() * passwordCharTypesWanted.length);

        if(passwordCharTypesWanted[randomPickChar] === "lowercase"){
            charIs = getLowerCase();
        }else if(passwordCharTypesWanted[randomPickChar] === "uppercase"){
            charIs = getUpperCase();
        }else if(passwordCharTypesWanted[randomPickChar] === "symbol"){
            charIs = getSymbol();
        }else if(passwordCharTypesWanted[randomPickChar] === "number"){
            charIs = getNumber();
        }

        generatedPass = generatedPass + charIs;

        console.log(generatedPass);
    }

    passwordCharTypesWanted = [];

    return generatedPass;
}