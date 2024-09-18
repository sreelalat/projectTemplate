export function isSuccessCode(
  statusCode: number,
  successDigit: number = 2
): boolean {
  return String(statusCode).startsWith(String(successDigit));
}
