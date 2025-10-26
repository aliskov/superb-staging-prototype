import { describe, it, expect } from 'vitest'
import { validateQRCode, generateQRCode, parseQRCode } from '../../../utils/qrCode'

describe('validateQRCode', () => {
  it('returns true for valid QR code format', () => {
    expect(validateQRCode('QR-1234')).toBe(true)
    expect(validateQRCode('QR-9999')).toBe(true)
  })

  it('returns false for invalid format', () => {
    expect(validateQRCode('QR1234')).toBe(false)  // missing dash
    expect(validateQRCode('1234')).toBe(false)     // missing QR prefix
    expect(validateQRCode('QR-ABC')).toBe(false)   // non-numeric
    expect(validateQRCode('QR-12')).toBe(false)    // too short
  })

  it('returns false for empty or null', () => {
    expect(validateQRCode('')).toBe(false)
    expect(validateQRCode(null)).toBe(false)
    expect(validateQRCode(undefined)).toBe(false)
  })
})

describe('generateQRCode', () => {
  it('generates unique QR codes', () => {
    const code1 = generateQRCode()
    const code2 = generateQRCode()

    expect(code1).not.toBe(code2)
    expect(validateQRCode(code1)).toBe(true)
    expect(validateQRCode(code2)).toBe(true)
  })

  it('generates codes in correct format', () => {
    const code = generateQRCode()
    expect(code).toMatch(/^QR-\d{4}$/)
  })
})

describe('parseQRCode', () => {
  it('extracts number from valid QR code', () => {
    expect(parseQRCode('QR-1234')).toBe(1234)
    expect(parseQRCode('QR-5678')).toBe(5678)
  })

  it('returns null for invalid codes', () => {
    expect(parseQRCode('invalid')).toBe(null)
    expect(parseQRCode('QR-ABC')).toBe(null)
  })
})
