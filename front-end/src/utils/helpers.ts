export function calcWPM(allChars: number, timeInSec: number): number {
  const timeInMinutes = timeInSec / 60;
  const words = allChars / 5;
  const wpm = words / timeInMinutes;
  return Math.floor(wpm);
}
export function calcAccuracy(
  correctChars: number,
  totalCharsAttempted: number
): number {
  const accuracy = (correctChars / totalCharsAttempted) * 100;
  return Number(accuracy.toFixed(2));
}
