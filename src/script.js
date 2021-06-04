const passwordField = document.querySelector("#password");
const NewPasswordField = document.querySelector("#newPassword");

function generatePassword() {
  resetNewPasswordField();

  const isPasswordFieldValid = passwordField.value;
  if (!isPasswordFieldValid) {
    alert("Digite o tamanho da sua senha!");
    return;
  }

  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";

  generateRandomPassword();
  applyNewPasswordInHTML();

  function resetNewPasswordField() {
    NewPasswordField.innerHTML = "";
  }

  function generateRandomPassword() {
    for (let i = 0, n = charset.length; i < passwordField.value; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
  }

  function applyNewPasswordInHTML() {
    let result = document.createTextNode(password);
    return NewPasswordField.appendChild(result);
  }
}
