function start() {
    alert("alert\nYou got the script running.")
}

const NAME_FIELD = document.getElementById("nameField");
let userName = NAME_FIELD.value;

function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  let userName = NAME_FIELD.value;
  alert("Your name is "+userName+" .")
}

function useInput() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("welcomeMessage").innerHTML =
    "Hello " + name;
}