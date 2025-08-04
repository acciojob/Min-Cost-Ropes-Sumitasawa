function mincost(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  let totalCost = 0;

  while (arr.length > 1) {
    arr.sort((a, b) => a - b);

    const first = arr.shift();
    const second = arr.shift();

    const cost = first + second;
    totalCost += cost;
    arr.push(cost);
  }

  return totalCost;
}

function handleMinCost() {
  const input = document.getElementById("inputArr").value;
  const arr = input.split(",").map(Number).filter(n => !isNaN(n) && n > 0);

  if (arr.length === 0) {
    document.getElementById("result").textContent = "Please enter valid rope lengths.";
    return;
  }

  const result = mincost(arr);
  document.getElementById("result").textContent = `Minimum cost: ${result}`;
}
