const password = document.getElementById("reset-password");
const passwordCheck = document.getElementById("reset-password-check");

const passwordError = document.getElementById("is-reset-password-error");
const passwordCheckError = document.getElementById(
  "is-reset-password-check-error",
);

const resetBtn = document.getElementById("is-reset-btn");

resetBtn.addEventListener("click", function (e) {
  let hasError = false;

  passwordError.textContent = "";
  passwordCheckError.textContent = "";

  password.classList.remove("is-error");
  passwordCheck.classList.remove("is-error");

  if (password.value.trim() === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    password.classList.add("is-error");
    if (!hasError) password.focus();
    hasError = true;
  }

  if (passwordCheck.value.trim() === "") {
    passwordCheckError.textContent = "비밀번호 확인을 입력해주세요.";
    passwordCheck.classList.add("is-error");
    if (!hasError) passwordCheck.focus();
    hasError = true;
  }

   if (password.value !== passwordCheck.value) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordCheck.classList.add("is-error");
    if (!hasError) passwordCheck.focus();
    hasError = true;
  }

  if (hasError) {
    e.preventDefault();
    alert("입력값을 확인해주세요.");
  }
});
