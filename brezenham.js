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
  let sx = x0 < x1 ? 1 : -1;
  let sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    if (!isDotted || (isDotted && (x0 + y0) % dotSpacing === 0)) {
      drawPixel(x0, y0, "yellow");
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

function drawBCircle(centerX, centerY, radius, isDotted, dotSpacing, color) {
  var x = radius;
  var y = 0;
  var err = 0;

  while (x >= y) {
    if (!isDotted || (isDotted && y % dotSpacing === 0)) {
      drawPixel(centerX + x, centerY - y, color);
      drawPixel(centerX - x, centerY - y, color);
      drawPixel(centerX + x, centerY + y, color);
      drawPixel(centerX - x, centerY + y, color);
      drawPixel(centerX + y, centerY - x, color);
      drawPixel(centerX - y, centerY - x, color);
      drawPixel(centerX + y, centerY + x, color);
      drawPixel(centerX - y, centerY + x, color);
    }

    y++;

    if (err <= 0) {
      err += 2 * y + 1;
    }

    if (err > 0) {
      x--;
      err -= 2 * x + 1;
    }
  }
}

function drawMCircle(centerX, centerY, radius, isDotted, dotSpacing, color) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    if (!isDotted || (isDotted && y % dotSpacing === 0)) {
      drawPixel(centerX + x, centerY - y, color);
      drawPixel(centerX - x, centerY - y, color);
      drawPixel(centerX + x, centerY + y, color);
      drawPixel(centerX - x, centerY + y, color);
      drawPixel(centerX + y, centerY - x, color);
      drawPixel(centerX - y, centerY - x, color);
      drawPixel(centerX + y, centerY + x, color);
      drawPixel(centerX - y, centerY + x, color);
    }

    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

function drawUpperHalfCircle(
  centerX,
  centerY,
  radius,
  isDotted,
  dotSpacing,
  color
) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    if (!isDotted || (isDotted && y % dotSpacing === 0)) {
      drawPixel(centerX + x, centerY - y, color);
      drawPixel(centerX + y, centerY - x, color);
      drawPixel(centerX - y, centerY - x, color);
      drawPixel(centerX - x, centerY - y, color);
    }

    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

function drawLeftHalfCircle(
  centerX,
  centerY,
  radius,
  isDotted,
  dotSpacing,
  color
) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    if (!isDotted || (isDotted && y % dotSpacing === 0)) {
      drawPixel(centerX - x, centerY - y, color);
      drawPixel(centerX - y, centerY - x, color);
      drawPixel(centerX - y, centerY + x, color);
      drawPixel(centerX - x, centerY + y, color);
    }
    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

function drawRightHalfCircle(
  centerX,
  centerY,
  radius,
  isDotted,
  dotSpacing,
  color
) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    if (!isDotted || (isDotted && y % dotSpacing === 0)) {
      drawPixel(centerX + x, centerY - y, color);
      drawPixel(centerX + y, centerY - x, color);
      drawPixel(centerX + y, centerY + x, color);
      drawPixel(centerX + x, centerY + y, color);
    }
    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}
function drawBottomHalfCircle(
  centerX,
  centerY,
  radius,
  isDotted,
  dotSpacing,
  color
) {
  var x = radius;
  var y = 0;
  var decision = 1 - radius;

  while (x >= y) {
    if (!isDotted || (isDotted && y % dotSpacing === 0)) {
      drawPixel(centerX + x, centerY + y, color);
      drawPixel(centerX + y, centerY + x, color);
      drawPixel(centerX - y, centerY + x, color);
      drawPixel(centerX - x, centerY + y, color);
    }
    y++;

    if (decision <= 0) {
      decision += 2 * y + 1;
    } else {
      x--;
      decision += 2 * (y - x) + 1;
    }
  }
}

const canvas = document.getElementById("myCanvas");
canvas.addEventListener("click", function (event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  console.log("Clicked at coordinates: (" + x + ", " + y + ")");
});

function drawPixel(x, y, color) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color || "black";
  ctx.fillRect(x, y, 1, 1);
}
