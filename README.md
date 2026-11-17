# Delete Button Animation — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/delete-button-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A screen-based reconstruction of the uploaded 6.03-second video (720 × 1280, 30 fps).

## Run
1. Extract `delete-button-animation.zip`.
2. Open `index.html` in Chrome, Edge, Firefox or Safari.
3. No npm install or build step is required.

Optional local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## What the video shows
- Black / near-black background.
- Centered heading: **Delete Button Animation**.
- A compact dark demo panel containing two buttons:
  - Purple **Delete** button with a trash-can icon.
  - Warm off-white **Clear** button with a trash-can icon.
- Clicking the button animates the can lid and the word label, visually making the label drop into the bin.
- Three source preview panels at the bottom: `index.html`, `app.css`, and `app.js`.
- The code preview carries the creator handle `_code_and_chill_`.

## Code legibly visible in the video

The video includes three readable source panels. The following content is transcribed from the visible screen; line wrapping has been normalized.

### `index.html`
The comment describes drawing the word twice, animating it once, and using a twin inside the bin so the letters that enter appear as holes in the button face. Visible markup includes:
```html
<button class="maw__btn">
  <span class="maw__seat"></span>
  <span class="maw__label">
    Delete
  </span>
  <span class="maw__can">
    <span class="maw__body">
      <span class="maw__twin"></span>
      <i class="maw__slot"></i>
      <i class="maw__slot"></i>
    </span>
    <span class="maw__lid"></span>
  </span>
</button>
```

### `app.css`
The visible comments explain that the can's mouth should remain fixed at the body's top edge while the bin expands downwards, and that the twin is solved from the label rather than tweened independently. Visible declarations include:
```css
.maw__can {
  transform-origin: var(--pivot-x) var(--pivot-y);
  transform: translateX(var(--shift)) scale(var(--z));
}

.maw__twin {
  --gy: calc(var(--anchor-y) + var(--my) - var(--can-y) - var(--pivot-y));
  transform: scale(calc(1/var(--z)))
    translate(var(--gx), var(--gy))
    rotate(var(--wrot));
}
```

### `app.js`
The visible code calculates a fixed bin width from `--body-w` and `--z-open`, computes the available word room, measures the rotated word extent, limits the scale and centers the text inside the bin:
```js
const bin = num('--body-w') * num('--z-open');
const room = bin * num('--word-fill');

const ext = lw * Math.cos(tip) + lh * Math.sin(tip);
const sc = Math.min(
  num('--word-sc-max'), room / ext
);

set('--word-x',
  w / 2 - bboxL - ext * sc / 2);
```

The video only exposes these portions of the original source. The original complete project and the helper definitions (`num`, `set`, measurements and animation orchestration) are not shown. The supplied runnable files recreate the visible effect and preserve the visible class names and code ideas; they are not represented as an exact copy of the unseen repository.

## Included interactions
- Click **Delete** to animate the trash-can lid and drop the word into the bin.
- Click **Clear** to play the same interaction with the off-white button.
- Click either button again to replay.
- Responsive layout and reduced-motion support.

## Files
- `index.html` — demo UI and source-preview panels.
- `style.css` — dark page, purple/cream buttons, trash icon and drop animation.
- `app.js` — replayable button interaction.
- `README.md` — source transcription and run guide.

## Limitations
The interaction is a visual CSS/JavaScript demo only. It does not delete files, records, messages or any real data. The video does not show a backend or real delete operation.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
