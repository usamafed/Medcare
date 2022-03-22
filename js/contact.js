const namee = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("msg");
const submitBtn = document.getElementById("btn");

const sendForm = () => {
  const obj = {
    name: namee.value,
    email: email.value,
    message: message.value,
  };

  fetch("https://usama-d1848-default-rtdb.firebaseio.com/contact.json", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("Your Query has been succesfuly received!");
  namee.value = email.value = message.value = "";
};

submitBtn.addEventListener("click", sendForm);
