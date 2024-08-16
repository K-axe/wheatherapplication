import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
 const db = new pg.Client({

    user:"postgres",
    host:"localhost",
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.DBPORT,
});

export default db ;