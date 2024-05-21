import pg from "pg";
import env from "dotenv";

const app = express();

env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  })

try{
    db.connect();
} catch (error){
    throw Error('Failure connecting to database');
}
