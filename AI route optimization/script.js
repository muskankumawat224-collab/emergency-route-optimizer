function optimizeRoute() {
  const start = document.getElementById("start").value.trim();
  const end = document.getElementById("end").value.trim();
  const trafficValue = parseInt(document.getElementById("traffic").value, 10);
  const trafficLabels = {
    1: "Low",
    5: "Medium",
    10: "High"
  };

  if (!start || !end) {
    alert("Please enter both the start location and destination.");
    return;
  }

  const distance = Math.floor(Math.random() * 12) + 10;
  const trafficDelay = trafficValue * 2;
  const priorityBoost = 14;

  const normalTime = distance + trafficDelay;
  const optimizedTime = Math.max(5, normalTime - priorityBoost);
  const savedMinutes = normalTime - optimizedTime;
  const routeSummary = trafficValue <= 5 ? "Adaptive detour with low congestion." : "Priority corridor route through busy intersections.";

  document.getElementById("result").innerHTML = `
    <strong>Route summary</strong>
    <p>From <strong>${start}</strong> to <strong>${end}</strong></p>
    <p>Traffic intensity: <strong>${trafficLabels[trafficValue]}</strong></p>
    <p>Route note: ${routeSummary}</p>
    <hr>
    <p>Normal estimated travel time: <strong>${normalTime} mins</strong></p>
    <p>Optimized emergency travel time: <strong>${optimizedTime} mins</strong></p>
    <p>Estimated time saved: <strong>${savedMinutes} mins</strong></p>
  `;
}

function sendSignal() {
  const status = document.getElementById("signalStatus");
  status.textContent = "Green corridor activated — emergency traffic is prioritized through nearby intersections.";
  status.style.color = "#1a73e8";
}

function submitContact(event) {
  event.preventDefault();
  alert("Thanks! Your message has been submitted. We will reply soon.");
  event.target.reset();
}
