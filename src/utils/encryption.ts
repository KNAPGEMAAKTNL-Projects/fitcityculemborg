/**
 * Encryption utilities for sensitive data (IBAN numbers)
 * Uses AES-GCM encryption with Web Crypto API
 */

/**
 * Derives an encryption key from a secret string
 */
async function deriveKey(secret: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: encoder.encode('fitcity-salt-2025'), // Static salt for consistency
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

/**
 * Encrypts a string (e.g., IBAN)
 * Returns base64-encoded encrypted data
 */
export async function encrypt(plaintext: string, encryptionSecret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await deriveKey(encryptionSecret);

  // Generate random IV (Initialization Vector)
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Encrypt the data
  const encryptedBuffer = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    encoder.encode(plaintext)
  );

  // Combine IV and encrypted data
  const combined = new Uint8Array(iv.length + encryptedBuffer.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(encryptedBuffer), iv.length);

  // Return as base64
  return btoa(String.fromCharCode(...combined));
}

/**
 * Decrypts an encrypted string
 * Takes base64-encoded encrypted data
 */
export async function decrypt(encryptedData: string, encryptionSecret: string): Promise<string> {
  const decoder = new TextDecoder();
  const key = await deriveKey(encryptionSecret);

  // Decode base64
  const combined = Uint8Array.from(atob(encryptedData), (c) => c.charCodeAt(0));

  // Extract IV and encrypted data
  const iv = combined.slice(0, 12);
  const data = combined.slice(12);

  // Decrypt
  const decryptedBuffer = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    data
  );

  return decoder.decode(decryptedBuffer);
}

/**
 * Masks an IBAN for display (shows only last 4 characters)
 * Example: NL91ABNA0417164300 -> NL** **** **** *4300
 */
export function maskIBAN(iban: string): string {
  const clean = iban.replace(/\s/g, '');
  if (clean.length < 8) return '****';

  const country = clean.slice(0, 2);
  const last4 = clean.slice(-4);
  const middleCount = Math.ceil((clean.length - 6) / 4);

  return `${country}${'** '.repeat(middleCount)}*${last4}`;
}
