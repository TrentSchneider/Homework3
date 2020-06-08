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
			useSpec,
			userPass = "";
		do {
			do {
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
			} while (useLowCase !== "yes" && useLowCase !== "no");

			do {
				var useUpCase = prompt(
					"Would you like upper case letters in your password? (Please type Yes or No)"
				);

				var useUpCase = useUpCase.toLowerCase();

				if (useUpCase === "yes") {
					passChar += upper;
					alert("Upper case letters will be used.");
				} else if (useUpCase === "no") {
					alert("Upper case letters will not be used.");
				}
			} while (useUpCase !== "yes" && useUpCase !== "no");

			do {
				var useNum = prompt(
					"Would you like numbers in your password? (Please type Yes or No)"
				);

				var useNum = useNum.toLowerCase();

				if (useNum === "yes") {
					passChar += number;
					alert("Numbers will be used.");
				} else if (useNum === "no") {
					alert("Numbers will not be used.");
				}
			} while (useNum !== "yes" && useNum !== "no");

			do {
				var useSpec = prompt(
					"Would you like special characters (!@#) in your password? (Please type Yes or No)"
				);

				var useSpec = useSpec.toLowerCase();

				if (useSpec === "yes") {
					passChar += special;
					alert("Special characters will be used.");
				} else if (useSpec === "no") {
					alert("Special characters will not be used.");
				}
			} while (useSpec !== "yes" && useSpec !== "no");

			if (
				useLowCase === "no" &&
				useUpCase === "no" &&
				useNum === "no" &&
				useSpec === "no"
			) {
				alert(
					"No character options have been selected, please choose at least one character option."
				);
			}
		} while (
			useLowCase === "no" &&
			useUpCase === "no" &&
			useNum === "no" &&
			useSpec === "no"
		);
		do {
			var passLength = parseInt(
				prompt(
					"How long would you like your password to be? (Please choose a number between 8 and 128, decimals will be rounded down to the nearest whole number)"
				),
				10
			);
			if (Number.isInteger(passLength) && passLength > 7 && passLength < 129) {
				alert("Your password will be " + passLength + " characters long.");
			}
		} while (isNaN(passLength) || passLength < 8 || passLength > 128);

		for (let i = 0; i < passLength; i++) {
			userPass += passChar.charAt(Math.floor(Math.random() * passChar.length));
		}

		return userPass;
	}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
