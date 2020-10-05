let count = 0;
let countButton = document.getElementById("countButton");
let displayCount = document.getElementById("displayCount");
countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}