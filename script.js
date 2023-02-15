// TODO: Selection of  all elements needed\
const formTag = document.querySelector("#form");
const errorParent = document.querySelector(".errors");
const ul = document.querySelector(".errors-list");
const userName = document.querySelector("#username");
const userEmail = document.querySelector("#email");

const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
let errMsg = "";

formTag.addEventListener("submit", (e) => {
  // e.preventDefault();
  clearErrors();
  const userUsername = userName.value;
  const userUserEmail = userEmail.value;

  const userPassword = password.value;
  const userPasswordConfirmation = passwordConfirmation.value;
  const userTerms = terms.checked;
  const errArray = [];

  //USERNAME
  if (userUsername.length < 6) {
    errArray.push("Ensure the username is at least 6 characters long");
  }
  //EMAIL

  const emailConvert = Array.from(userUserEmail); //Converting the string to Array
  const gmailSuffix = emailConvert.slice(-10).join("") === "@gmail.com";
  console.log(gmailSuffix);

  if (userUserEmail.length < 11 || !gmailSuffix) {
    console.log("it worked!");
    errArray.push(
      "Ensure the Email is at least 11 characters long and must end with '@gmail.com'"
    );
  }

  if (userPassword.length < 10) {
    //PASSWORD INPUT
    errArray.push("Ensure the password is at least 10 characters long");
  }
  // CONFIRM -PASSWORD INPUT\
  if (userPasswordConfirmation !== userPassword) {
    errArray.push("Ensure the password and confirmation password match");
  }

  //TERMS INPUT\
  if (!userTerms) {
    errArray.push("Ensure the terms checkbox is checked");
  }
  if (errArray.length > 0) {
    e.preventDefault();
    console.log("errr is positive");
    showErrors(errArray);
    console.log(errArray.length);
  } else {
    console.log("wetin hppen");
  }
});

function clearErrors() {
  ul.innerHTML = "";
  errorParent.classList.remove("show");
}

function showErrors(errorMessages) {
  for (const item of errorMessages) {
    const li = document.createElement("li");
    li.innerText = item;
    ul.append(li);
  }
  errorParent.classList.add("show");
}
