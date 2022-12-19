const btn = document.querySelector(".close");
const mainNav = document.querySelector(".main-nav");

AOS.init();

btn.addEventListener("click", () => {
  mainNav.classList.toggle("visible");
});


const form = document.querySelector("#recibe");
console.log(form);
const alert = document.querySelector(".alert");
const inputName = form.name;
const inputEmail = form.email;
const inputArea = form.message;



const send = () => {
  fetch("https://formsubmit.co/ajax/Mcorporan536@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: inputName.value,
      email: inputEmail.value,
      message: inputArea.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {

      alert.textContent = "su mensaje se envio correctamente";
      alert.classList.add("success");
      console.log(data);
      setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove("success");
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      alert.classList.add("error");
      alert.textContent = "hubo un error";
      setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove("");
      }, 5000);
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  send();
});
