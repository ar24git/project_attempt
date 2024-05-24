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

//will populate database for testing
//run resetDatabase in postgre
//and set insertData to true in order to populate db
import * as populate from "./populateDatabase.mjs"
const insertData = false;
if (insertData) {
  populate.insertData();
}


  export let getAllMatches = async() =>{
    let matches;
    const query = `
      SELECT 
        m.Category,
        m.Season,
        m.Association,
        m.MatchResult,
        p.Time,
        p.Date,
        f.Name AS FieldName,
        c1.Name AS HomeClubName,
        c2.Name AS AwayClubName,
        r.Id AS RefereeId,
        per.Name AS RefereeName
        FROM 
        Match m
    JOIN 
        Play p ON m.MatchId = p.MatchId
    JOIN 
        Field f ON p.FieldName = f.Name
    JOIN 
        Club c1 ON p.IdHome = c1.Name
    JOIN 
        Club c2 ON p.IdAway = c2.Name
    JOIN 
        Judges j ON m.MatchId = j.MatchId
    JOIN 
        Referee r ON j.RefereeId = r.Id
    JOIN 
        Person per ON r.Id = per.Id
    `;
    matches = await db.query(query);
    console.log(matches.rows);
    let formatedMatches = matches.rows.map(match=>{
      return {
        name: match.homeclubname+" : "+match.awayclubname,
        pitch: match.fieldname,
        date: match.date.toLocaleString('el-GR',{ dateStyle: 'short' }),
        time: match.time,
        referee: match.refereename,
        result: match.matchresult
      }
    })

    return formatedMatches;
  }





  