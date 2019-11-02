first.addEventListener("click", firstFunction);
second.addEventListener("click", secondFunction);
third.addEventListener("click", thirdFunction);

function firstFunction() {
  document.getElementById("sometext").innerText = "You clicked First button";
  console.log("capturing", this.tagName);
}

function secondFunction() {
  document.getElementById("sometext").innerText = "You clicked Second button";
  console.log("capturing", this.tagName);
}

function thirdFunction() {
  document.getElementById("sometext").innerText = "You clicked Third button";
  console.log("capturing", this.tagName);
}
