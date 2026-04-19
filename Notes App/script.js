const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

let currentContent = "";



noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;

  if (currentContent === newContent) {
    return;
  }

  currentContent = newContent;
  console.log(currentContent);

  statusEl.textContent = "Note saved successfully!";
});

noteEl.addEventListener("focus",()=>{
  statusEl.textContent = "";
});


window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});
