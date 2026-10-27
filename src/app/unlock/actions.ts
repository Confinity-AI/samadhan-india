"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GATE_COOKIE, gatePassword, gateToken, safeNextPath } from "@/lib/gate";

export async function unlockSite(_prev: { error?: string }, formData: FormData) {
  const next = safeNextPath(formData.get("next"));
  const password = String(formData.get("password") ?? "");

  if (password !== gatePassword()) {
    return { error: "That password is not right." };
  }

  const jar = await cookies();
  jar.set(GATE_COOKIE, await gateToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(next);
}
