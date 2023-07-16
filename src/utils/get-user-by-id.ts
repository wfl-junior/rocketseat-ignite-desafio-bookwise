import { eq } from "drizzle-orm";
import { database } from "~/database";
import { User, users } from "~/database/schemas/users";

export async function getUserById(userId: User["id"]): Promise<User | null> {
  try {
    const [user] = await database
      .select()
      .from(users)
      .where(eq(users.id, userId));

    return user ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
