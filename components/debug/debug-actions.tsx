"use server";

import { unstable_headers } from "expo-router/rsc/headers";

export async function pingServer() {
  return "pong";
}
export async function pingServerError() {
  throw new Error("test error");
}

export async function getRequestHeaders() {
  const headers = await unstable_headers();
  return Object.fromEntries([...headers.entries()]);
}
