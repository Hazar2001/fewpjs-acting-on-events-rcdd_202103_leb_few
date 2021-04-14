let dodger = document.getElementById("dodger");

function moveDodgerRight() {
  let right.Numbers = dodger.style.right.replace("px", "");
  let right = parseInt(leftNumbers, 10);

  if (right > 0) {
    dodger.style.right = `${right +1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left -1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerRight();
  }
});