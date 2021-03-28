// category HTML-elemens & variables

const container = document.querySelector("main");
const lineCount = 60;



// category functions

/**
 * Calculates difference of x- and y-coordinates
 * of DOM-element and cursor
 * @param {Number} x0 x-coordinate of element
 * @param {Number} y0 y-coordinate of element
 * @param {Number} x x-coordinate of cursor
 * @param {Number} y y-coordinate of cursor
 * @returns {Array<Number>} Array with dx and dy
 */
function calculateXYDiffs(x0, y0, x, y) {
  const dx = Math.round(x - x0);
  const dy = Math.round(y - y0);

  return [dx, dy];
}

/**
 * Calculates the "force" over dx and dy.
 * Logistic function used, as a max value is needed.
 * Used as width in %
 * @param {Number} dx Distance in x
 * @param {Number} dy Distance in y
 * @returns {Number} Adjusted force: range [30, 70]
 */
function calculateForce(dx, dy) {
  const r = Math.round(Math.sqrt(dx**2 + dy**2));

  // link https://en.wikipedia.org/wiki/Logistic_function
  return Math.round(-(70 / (1 + Math.E**(-.01*r))) + 100);
}

/**
 * Calculates the angle in a right angled triangle
 * where dx and dy are catheti
 * @param {Number} dx Length of cathetus 1
 * @param {Number} dy Length of cathetus 2
 * @returns {Number2} Angle between dx and dy in radians
 */
function calculateAngle(dx, dy) {
  return Math.atan2(dy, dx);
}

/**
 * Applies calculated style to 1 line
 * @param {Event} e Dispatched event
 * @param {HTMLElement} line The line to be styled
 * @returns {undefined}
 */
function styleLine(e, line) {
  // Calculate values
  const [dx, dy] = calculateXYDiffs(
    line.getBoundingClientRect().x,
    line.getBoundingClientRect().y,
    e.clientX,
    e.clientY
  );
  
  const r = calculateForce(dx, dy);
  const angle = calculateAngle(dx, dy);
  
  // Apply style
  line.style.width = r + "%"
  line.style.transform = `rotate(${angle}rad)`;
}



// category run initially

// create number of fieldLines corresponding to lineCount
const fieldLines = new Array(lineCount).fill(0).map(line => {
  const newLine = document.createElement("div");
  newLine.className = "line";
  return newLine;
});

// Append to DOM
fieldLines.forEach(line => container.appendChild(line))



// category event listeners

document.addEventListener("mousemove", e => {
  fieldLines.forEach(line => styleLine(e, line));
});
