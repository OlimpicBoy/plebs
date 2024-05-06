document.addEventListener("DOMContentLoaded", function () {
  const max = window.innerWidth < 600 ? 5 : 20;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const maxRects = max;
  const maxWidthHeight = max; // Max size for any dimension
  const phi = (1 + Math.sqrt(5)) / 2; // Golden Ratio
  const availableSizes = [2, 3, 5, 8, 13, 21]; // Fibonacci numbers
  // Adjust canvas size to window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function drawRectangles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Generate and draw rectangles
    for (let i = 0; i < maxRects; i++) {
      let width = getRandomItemFromArray(availableSizes);
      let height = width * phi;
      if (height > maxWidthHeight) {
        height = maxWidthHeight;
        width = height / phi;
      }

      let x = Math.random() * (canvas.width - width);
      let y = Math.random() * (canvas.height - height);

      // ctx.fillStyle =  white or black
      const random = Math.random();
      ctx.fillStyle =
        random > 0.9 ? "rgb(0, 255, 0)" : random > 0.45 ? "white" : "black";
      ctx.fillRect(x, y, width, height);
    }
  }
  drawRectangles();
  setInterval(drawRectangles, 11000); // Redraw every 2 seconds
});
