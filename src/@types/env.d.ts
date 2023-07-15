declare namespace NodeJS {
  interface ProcessEnv {
    GITHUB_CLIENT_SECRET: string;
    NEXT_PUBLIC_GITHUB_CLIENT_ID: string;
    DATABASE_CONNECTION_STRING: string;
    JWT_SECRET: string;
  }
}
