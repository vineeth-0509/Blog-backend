import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';


const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()

app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);


export default app

//postgresql://vineeththungani:6V8cUpovJYbD@ep-plain-forest-a58qfjs5.us-east-2.aws.neon.tech/medium?sslmode=require
//npm install @prisma/client@latest @prisma/extension-accelerate