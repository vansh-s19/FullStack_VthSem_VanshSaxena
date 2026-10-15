const isPalindrome = (str) => {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
};

function checkPalindrome() {
    let word = document.getElementById("word").value;

    console.log(isPalindrome(word));
}