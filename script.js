const body = document.body;
const dialog = document.getElementById("myDialog");

// Открытие диалога
document.getElementById("openDialog").addEventListener("click", () => {
  if (dialog) {
    dialog.showModal();
  }

  body.classList.add("body-no-scroll");
});

// Закрытие диалога
document.getElementById("closeDialog").addEventListener("click", () => {
  dialog.close();
  body.classList.remove("body-no-scroll");
});
