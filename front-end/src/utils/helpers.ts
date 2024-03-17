function calcWPM(totalChars: number, timeInSec: number): number {
  const timeInMinutes = timeInSec / 60;
  const words = totalChars / 5;
  const wpm = words / timeInMinutes;
  return wpm;
}
function calculateAccuracy(correctChars: number, totalCharsAttempted: number) {
  const accuracy = (correctChars / totalCharsAttempted) * 100;
  return accuracy.toFixed(2);
}
