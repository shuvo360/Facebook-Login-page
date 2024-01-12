const checkPassword = () => {
  let passwordInput = document.getElementById("password");
  let showHidden = document.querySelector(".visibility");

  if (passwordInput.value) {
    showHidden.style.display = "flex";
  } else {
    showHidden.style.display = "none";
  }
};
const togglePasswordVisibility = () => {
  let passwordInput = document.getElementById("password");
  let eyeIcon = document.getElementById("eyeIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "./assets/visibility.svg";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "./assets/visibility-off.svg";
  }
};
