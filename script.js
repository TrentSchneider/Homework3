// Assignment Code
var generateBtn = document.querySelector("#generate");

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
			passChar,
			useLowCase,
			useUpCase,
			useNum,
			useSpec;

		while (useLowCase !== "yes" || useLowCase !== "no") {
			var useLowCase = prompt(
				"Would you like lower case letters in your password? (Please type Yes or No)"
			);

			var useLowCase = useLowCase.toLowerCase();

			if (useLowCase === "yes") {
				passChar += lower;
				alert("Lower case letters will be used.");
			} else if (useLowCase === "no") {
				alert("Lower case letters will not be used.");
			}
		}
		while (useUpCase !== "yes" || useUpCase !== "no") {
			var useUpCase = prompt(
				"Would you like upper case letters in your password? (Please type Yes or No)"
			);

			var useUpCase = useUpCase.toLowerCase();

			if (useUpCase === "yes") {
				passChar += upper;
				alert("Upper case letters will be used.");
			} else if (useUpCase === "no") {
				alert("Upper case lettesr will not be used.");
			}
		}
		while (useNum !== "yes" || useNum !== "no") {
			var useNum = prompt(
				"Would you like numbers in your password? (Please type Yes or No)"
			);

			var useNum = useNum.toLowerCase();

			if (useNum === "yes") {
				passChar += number;
				alert("Upper case letters will be used.");
			} else if (useNumb === "no") {
				alert("Upper case lettesr will not be used.");
			}
		}
		while (useSpec !== "yes" || useSpec !== "no") {
			var useSpec = prompt(
				"Would you like numbers in your password? (Please type Yes or No)"
			);

			var useSpec = useSpec.toLowerCase();

			if (useSpec === "yes") {
				passChar += special;
				alert("Upper case letters will be used.");
			} else if (useSpec === "no") {
				alert("Upper case letters will not be used.");
			}
		}
		while (!isNaN(passLength) && passLength > 7 && passLength < 129) {
			var passLenght = prompt(
				"How long would you like your password to be? (Please choose a number between 8 and 128)"
			);
			alert("Your password will be " + passLenght + " characters long.");
			Math.floor(passLength);
		}
	}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
