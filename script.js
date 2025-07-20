let balance = 0;

function updateDisplay() {
  document.getElementById("balance").innerText = balance.toFixed(3);
}

function addUSDT() {
  balance += 0.001;
  updateDisplay();
}

function withdraw() {
  if (balance >= 15) {
    window.open("https://www.profitableratecpm.com/ycgu0idvy?key=e8e724900b9daaaef26d9cf1bbd26b09", "_blank");
    balance = 0;
    updateDisplay();
  } else {
    alert("🚫 You need at least 15 USDT to withdraw.");
  }
}

function share() {
  if (navigator.share) {
    navigator.share({
      title: 'USDT Mining',
      text: 'Check out this USDT Mining site and earn rewards!',
      url: window.location.href
    })
    .then(() => {
      balance += 0.5;
      updateDisplay();
      alert("🎉 Thanks for sharing! You earned 0.5 USDT.");
    })
    .catch(() => {
      alert("Share cancelled, no reward.");
    });
  } else {
    alert("Sharing not supported on this device.");
  }
}

updateDisplay();
