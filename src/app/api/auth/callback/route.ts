import axios from "axios";
import * as jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { database } from "~/database";
import { users } from "~/database/schemas/users";
import { ACCESS_TOKEN_COOKIE_NAME } from "~/utils/constants";
import { githubUserValidationSchema } from "~/validation/github-user";

const jwtDurationInSeconds = 60 * 60 * 24 * 7; // 7 days

interface AccessTokenResponse {
  access_token: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    const accessTokenResponse = await axios.post<AccessTokenResponse>(
      "https://github.com/login/oauth/access_token",
      undefined,
      {
        params: {
          code,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        },
        headers: {
          Accept: "application/json",
        },
      },
    );

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessTokenResponse.data.access_token}`,
      },
    });

    const userInfo = githubUserValidationSchema.parse(userResponse.data);

    const [user] = await database
      .insert(users)
      .values({
        name: userInfo.name,
        githubId: userInfo.id,
        avatarUrl: userInfo.avatar_url,
      })
      .onConflictDoUpdate({
        target: users.githubId,
        set: {
          name: userInfo.name,
          avatarUrl: userInfo.avatar_url,
        },
      })
      .returning({ id: users.id });

    const acessToken = jwt.sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: jwtDurationInSeconds,
    });

    return NextResponse.redirect(new URL("/home", request.url), {
      headers: {
        "Set-Cookie": `${ACCESS_TOKEN_COOKIE_NAME}=${acessToken}; Path=/; max-age=${jwtDurationInSeconds}; HttpOnly`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}
