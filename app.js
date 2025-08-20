let input = document.getElementById("pass");
let btn = document.querySelector("button");
btn.onclick = function () {
  let password = "";
  let numbers = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"`;
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * numbers.length);
    password += numbers[random];

    input.value = password;
  }
};
