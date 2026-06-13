## There are four main stages of browser rendering pipeline (Layout (Reflow), Paint (Repaint), Composite, Render Tree update)

- 1. 🧱 Layout (Reflow)

👉 Browser har element ki position, size, width, height calculate karta hai.

- 2. 🎨 Paint (Repaint)

👉 Layout ke baad browser elements ko colors, text, borders, shadows ke saath draw karta hai (pixels banata hai).

- 3. 🧩 Composite

👉 Painted layers ko GPU use karke combine karke final screen image banata hai.

- 4. 🌳 Render Tree update

👉 DOM + CSSOM se milkar jo “visible UI structure” banta hai, usko update karta hai.