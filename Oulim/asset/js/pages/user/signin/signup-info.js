const nickname = document.getElementById("user-nickname");
const userId = document.getElementById("user-id");
const password = document.getElementById("user-password");
const passwordCheck = document.getElementById("user-password-check");

const nicknameError = document.getElementById("is-user-nickname-error");
const userIdError = document.getElementById("is-user-id-error");
const passwordError = document.getElementById("is-user-password-error");
const passwordCheckError = document.getElementById(
  "is-user-password-check-error",
);

const signupBtn = document.getElementById("is-signup-btn");

signupBtn.addEventListener("click", function (e) {
  let hasError = false;

  nicknameError.textContent = "";
  userIdError.textContent = "";
  passwordError.textContent = "";
  passwordCheckError.textContent = "";

  nickname.classList.remove("is-error");
  userId.classList.remove("is-error");
  password.classList.remove("is-error");
  passwordCheck.classList.remove("is-error");

  if (nickname.value.trim() === "") {
    nicknameError.textContent = "닉네임을 입력해주세요.";
    nickname.classList.add("is-error");
    if (!hasError) nickname.focus();
    hasError = true;
  }

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
