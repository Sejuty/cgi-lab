function drawLine(x0, y0, x1, y1) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;
    let err = dx - dy;
  
    while (true) {
      drawPixel(x0, y0); // Replace this with your own function to draw a pixel
  
      if (x0 === x1 && y0 === y1) {
        break;
      }
  
      let e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x0 += sx;
      }
  
      if (e2 < dx) {
        err += dx;
        y0 += sy;
      }
    }
  }
  
  // Example usage:
  // Replace drawPixel function with your own implementation to draw pixels on your canvas or graphics context.
  function drawPixel(x, y) {
    // Replace this with your own code to draw a pixel at coordinates (x, y)
    console.log(`Drawing pixel at (${x}, ${y})`);
  }
  
// Example usage:
drawLine(0, 0, 10, 5);
  