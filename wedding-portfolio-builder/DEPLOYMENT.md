# Deployment Instructions

1.  Create a project on Vercel and connect your GitHub repository.
2.  Set up a PostgreSQL database using Supabase or Vercel Postgres.
3.  Add the environment variables listed in `.env.example` to your Vercel project settings.
4.  Vercel will automatically detect the Next.js project and run the build command (`npm run build`).
5.  Set up the Prisma migration command in the build step, or run `npx prisma db push` / `npx prisma migrate deploy` locally to set up the database schema.
