let taps = 0;
document.getElementById("btn").addEventListener("click", () => {
  taps++;
  document.getElementById("count").textContent = "Taps: " + taps;
});
