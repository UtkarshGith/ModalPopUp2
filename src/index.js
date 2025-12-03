const modal = document.getElementById("modal");
const submit = document.getElementById("button");
const butt = document.getElementById("butt");
const openpopup = document.getElementById("open");
const overlay = document.getElementById("overlay");

butt.addEventListener("click", () => {
  console.log("fsdfs");
});

//this is for opening the pop up
openpopup.addEventListener("click", () => {
  modal.style.display = "block";
  butt.style.display = "block";
  openpopup.style.display = "none";
  overlay.style.display = "block";
  document.body.style.pointerEvents = "none";
  modal.style.pointerEvents = "auto";
  modal.focus();
});

//this is for closing the pop up

submit.addEventListener("click", () => {
  modal.style.display = "none";
  openpopup.style.display = "block";
  overlay.style.display = "none";
  document.body.style.pointerEvents = "auto";
});

//for closing the popup using esc key

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    submit.click();
  }
});
