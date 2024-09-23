import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    // TODO use a real secret from the environment
    // here
    secrets: ["s3cr3t5"],
    secure: import.meta.env.DEV,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;
