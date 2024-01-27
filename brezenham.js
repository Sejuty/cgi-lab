function vLine(x0, y0, x1) {
  let x = x0;
  while (x <= x1) {
      drawPixel(x, y0);
      x++;
  }
}
function hLine(x0, y0, y1) {
  let y = y0;
  while (y <= y1) {
      drawPixel(x0, y);
      y++;
  }
}
function drawLine(x0, y0, x1, y1, isDotted, dotSpacing) {
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let sx = (x0 < x1) ? 1 : -1;
  let sy = (y0 < y1) ? 1 : -1;
  let err = dx - dy;

  while (true) {
      if (!isDotted || (isDotted && (x0 + y0) % dotSpacing === 0)) {
          drawPixel(x0, y0,"yellow");
      }

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

function drawCircle(centerX, centerY, radius, dotSpacing, isDotted) {
  let x = radius;
  let y = 0;
  let radiusError = 1 - x;

  while (x >= y) {
      // Draw pixels only at intervals defined by dotSpacing
      if (!isDotted || (isDotted && y % dotSpacing === 0)) {
          drawPixel(centerX + x, centerY - y);
          drawPixel(centerX - x, centerY - y);
          drawPixel(centerX + x, centerY + y);
          drawPixel(centerX - x, centerY + y);
          drawPixel(centerX + y, centerY - x);
          drawPixel(centerX - y, centerY - x);
          drawPixel(centerX + y, centerY + x);
          drawPixel(centerX - y, centerY + x);
      }

      y++;

      if (radiusError < 0) {
          radiusError += 2 * y + 1;
      } else {
          x--;
          radiusError += 2 * (y - x) + 1;
      }
  }
}



function drawPixel(x, y, color) {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color || 'black';
  ctx.fillRect(x, y, 1, 1);
}