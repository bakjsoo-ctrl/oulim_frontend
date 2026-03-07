const userId = document.getElementById("company-user-id");
const password = document.getElementById("company-user-password");
const passwordCheck = document.getElementById("company-user-password-check");

const userIdError = document.getElementById("is-company-user-id-error");
const passwordError = document.getElementById("is-company-user-password-error");
const passwordCheckError = document.getElementById(
  "is-company-user-password-check-error",
);

const signupBtn = document.getElementById("is-company-signup-btn");

signupBtn.addEventListener("click", function (e) {
  let hasError = false;

  userIdError.textContent = "";
  passwordError.textContent = "";
  passwordCheckError.textContent = "";

  userId.classList.remove("is-error");
  password.classList.remove("is-error");
  passwordCheck.classList.remove("is-error");

  if (userId.value.trim() === "") {
    userIdError.textContent = "아이디를 입력해주세요.";
    userId.classList.add("is-error");
    if (!hasError) userId.focus();
    hasError = true;
  }

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
