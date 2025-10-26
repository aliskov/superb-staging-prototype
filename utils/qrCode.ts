const QR_PREFIX = 'QR-'
const QR_PATTERN = /^QR-\d{4}$/
const QR_MIN = 1000
const QR_MAX = 9999

export function validateQRCode(code: string | null | undefined): boolean {
  if (!code) return false
  return QR_PATTERN.test(code)
}

export function generateQRCode(): string {
  const randomNum = Math.floor(QR_MIN + Math.random() * (QR_MAX - QR_MIN + 1))
  return `${QR_PREFIX}${randomNum}`
}

export function parseQRCode(code: string): number | null {
  if (!validateQRCode(code)) return null
  return parseInt(code.replace(QR_PREFIX, ''), 10)
}
