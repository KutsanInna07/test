const passwordInput = document.getElementById("passwordInput");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

passwordInput.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
  const password = passwordInput.value;

  if (password.length === 0) {
    section1.style.backgroundColor =
      section2.style.backgroundColor =
      section3.style.backgroundColor =
        "gray";
  } else if (password.length < 8) {
    section1.style.backgroundColor =
      section2.style.backgroundColor =
      section3.style.backgroundColor =
        "red";
  } else {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    if (hasLetters && hasNumbers && hasSymbols) {
      section1.style.backgroundColor =
        section2.style.backgroundColor =
        section3.style.backgroundColor =
          "green";
    } else if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      section1.style.backgroundColor = section2.style.backgroundColor =
        "yellow";
      section3.style.backgroundColor = "gray";
    } else {
      section1.style.backgroundColor = "red";
      section2.style.backgroundColor = section3.style.backgroundColor = "gray";
    }
  }
}
