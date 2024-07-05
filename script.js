//your JS code here. If required.
function getDomLevel(element) {
  let level = 0;
  while (element.parentNode) {
    level++;
    element = element.parentNode;
  }
  return level;
}

// Example usage:
const childElement = document.getElementById("level");
const domLevel = getDomLevel(childElement);
alert(`The level of the element is: ${domLevel}`);
