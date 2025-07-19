



function share() {
  const shareUrl = window.location.href;
  const shareText = "Check out this USDT Mining site and earn rewards!";

  if (navigator.share) {
    navigator.share({
      title: 'USDT Mining',
      text: shareText,
      url: shareUrl,
    })
    .then(() => {
      // User confirmed share
      balance += 0.5;
      updateDisplay();
      alert("🎉 Thanks for sharing! You earned 0.5 USDT.");
    })
    .catch(() => {
      // User cancelled or share failed
      alert("Share cancelled or failed, no reward given.");
    });
  } else {
    alert("Sharing not supported on this device/browser. Unable to confirm share, so no reward.");
  }
}
