// Assignment Code
var generateBtn = document.querySelector("#generate"),
	slideVal = document.getElementById("lengthChoice"),
	output = document.getElementById("showLength");

// Displays the sliders value
output.innerHTML = slideVal.value;
slideVal.oninput = function () {
	output.innerHTML = this.value;
};
// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
	function generatePassword() {
		var lower = "abcdefghijklmnopqrstuvwxyz",
			upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
			number = "0123456789",
			special = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
			passLength,
			passArray = [],
			lowTog = document.getElementById("lowChoice"),
			upTog = document.getElementById("upChoice"),
			numTog = document.getElementById("numChoice"),
			specTog = document.getElementById("specChoice"),
			lengthSlide = document.getElementById("lengthChoice"),
			userPass = "";

		if (lowTog.checked) {
			// passChar += lower;
			passArray.push(lower);
		}
		if (upTog.checked) {
			// passChar += upper;
			passArray.push(upper);
		}
		if (numTog.checked) {
			// passChar += number;
			passArray.push(number);
		}
		if (specTog.checked) {
			// passChar += special;
			passArray.push(special);
		}
		passLength = Number(lengthSlide.value);

		for (let i = 0; i < passLength; i++) {
			if (passArray === undefined || passArray.length == 0) {
				userPass =
					"Please select at least one character type to generate a password.";
			} else {
				var passChar = passArray[Math.floor(Math.random() * passArray.length)];
				userPass += passChar.charAt(
					Math.floor(Math.random() * passChar.length)
				);
			}
		}
		return userPass;
	}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
