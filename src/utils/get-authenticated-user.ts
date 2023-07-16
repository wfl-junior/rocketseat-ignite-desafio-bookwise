import { eq } from "drizzle-orm";
import * as jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { database } from "~/database";
import { User, users } from "~/database/schemas/users";
import { ACCESS_TOKEN_COOKIE_NAME } from "./constants";

export async function getAuthenticatedUser(): Promise<User | null> {
  const accessToken = cookies().get(ACCESS_TOKEN_COOKIE_NAME)?.value;

  if (!accessToken) {
    return null;
  }

  try {
    const { sub } = jwt.verify(accessToken, process.env.JWT_SECRET) as {
      sub: string;
    };

    const [user] = await database.select().from(users).where(eq(users.id, sub));
    return user ?? null;
  } catch (error) {
    console.error(error);
    cookies().delete(ACCESS_TOKEN_COOKIE_NAME);
    return null;
  }
}
