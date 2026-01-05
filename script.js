function generate() {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById("result").textContent = "Invalid range";
    return;
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("result").textContent = "Result: " + random;
}
