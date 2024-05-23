import pg from "pg";
import env from "dotenv";


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

  export let getAllMatches = async() =>{
    const match = {
        name: 'Match 1',
        pitch: 'Pitch A',
        date: '2024-05-21',
        time: '14:00',
        referee: 'Referee 1',
        result: '2-1'
      };
    
    const matches = [];
      matches.push(match);
      matches.push(match);
      matches.push(match);
    return matches;
  }