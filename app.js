(() => {
  const buttons = [
    { button: document.querySelector('#deleteBtn'), label: 'Delete' },
    { button: document.querySelector('#clearBtn'), label: 'Clear' }
  ];
  const hint = document.querySelector('#hint');
  const timers = new WeakMap();

  function replay(button, label) {
    const oldTimer = timers.get(button);
    if (oldTimer) {
      clearTimeout(oldTimer);
      clearTimeout(oldTimer.reset);
    }

    button.classList.remove('is-deleting', 'is-done');
    // Restart CSS keyframes even on consecutive clicks.
    void button.offsetWidth;
    button.classList.add('is-deleting');
    hint.innerHTML = `<b>${label}</b> animation is playing…`;

    const finishTimer = setTimeout(() => {
      button.classList.remove('is-deleting');
      button.classList.add('is-done');
      hint.innerHTML = `<b>${label}</b> animation complete. Click again to replay.`;

      finishTimer.reset = setTimeout(() => {
        button.classList.remove('is-done');
        hint.innerHTML = 'Click <b>Delete</b> or <b>Clear</b> to replay the animation.';
      }, 1450);
    }, 560);

    timers.set(button, finishTimer);
  }

  buttons.forEach(({ button, label }) => {
    button.addEventListener('click', () => replay(button, label));
  });
})();