const buttons = document.querySelectorAll(".action-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Restart the animation even when the same button is clicked repeatedly.
    button.classList.remove("is-animating");
    void button.offsetWidth;
    button.classList.add("is-animating");

    window.setTimeout(() => {
      button.classList.remove("is-animating");
    }, 850);
  });
});
