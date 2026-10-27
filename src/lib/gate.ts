export const GATE_COOKIE = "samadhan_preview";

export function gatePassword() {
  return process.env.SITE_PASSWORD || "firstlight";
}

export async function gateToken(password = gatePassword()) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`samadhan-preview:${password}`));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function isValidGateToken(value?: string) {
  if (!value) return false;
  const expected = await gateToken();
  if (value.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= value.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return mismatch === 0;
}

export function safeNextPath(value: unknown) {
  if (typeof value !== "string") return "/";
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("://")) return "/";
  if (value.startsWith("/unlock")) return "/";
  return value;
}
