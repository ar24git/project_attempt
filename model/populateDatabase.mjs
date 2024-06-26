import pg from "pg";
import env from "dotenv";


env.config();

const client = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  })

try{
    client.connect();
} catch (error){
    throw Error('Failure connecting to database');
}


// ('Charlie Black', '1988-01-15', 'M'),
// ('Daisy White', '1992-04-25', 'F'),
// ('Eve Green', '1983-07-11', 'F'),
// ('Frank Blue', '1978-12-05', 'M')

export const insertData = async () => {
    try {
        // Connect to the database
        
        let personResult;

        // comitee////////////////////////////////////
        // Insert into Person table
        personResult = await client.query(`
            INSERT INTO Person (Name, BirthDate, Sex) VALUES 
            ('John Doe', '1980-05-15', 'M'),
            ('Jane Smith', '1985-07-20', 'F'),
            ('Alice Johnson', '1990-03-10', 'F'),
            ('Bob Brown', '1975-09-25', 'M')
            RETURNING Id;
        `);
        console.log("id>>>"+personResult.rows[0].id);

        let personIds = personResult.rows.map(row => row.id);
        // Insert into Committee table
        await client.query(`
            INSERT INTO Committee (Type, Position, Person_Id) VALUES 
            ('Finance', 'Treasurer', $1),
            ('Event', 'Coordinator', $2),
            ('Management', 'Chairman', $3),
            ('Marketing', 'Manager', $4);
        `,personIds);



      //referee///////////////////////////////////
        personResult = await client.query(`
            INSERT INTO Person (Name, BirthDate, Sex) VALUES 
            ('John Doe', '1980-05-15', 'M'),
            ('Jane Smith', '1985-07-20', 'F'),
            ('Bob Brown', '1975-09-25', 'M')
            RETURNING Id;
        `);
        console.log("id>>>"+personResult.rows[0].id);

        let refereeIds = personResult.rows.map(row => row.id);
        // Insert into Referee table
        await client.query(`
            INSERT INTO Referee (Id) VALUES 
            ($1),
            ($2),
            ($3);
        `,refereeIds);


        //footballer////////////////////////////////////
        personResult = await client.query(`
        INSERT INTO Person (Name, BirthDate, Sex) VALUES 
        ('John Doe', '1980-05-15', 'M'),
        ('Jane Smith', '1985-07-20', 'F'),
        ('Alice Johnson', '1990-03-10', 'F'),
        ('Bob Brown', '1975-09-25', 'M')
        RETURNING Id;
      `);
      console.log("id>>>"+personResult.rows[0].id);

      let footballerIds = personResult.rows.map(row => row.id);

        // Insert into Footballer table
        await client.query(`
            INSERT INTO Footballer (Id) VALUES 
            ($1),
            ($2),
            ($3),
            ($4);
        `,footballerIds);



        //administrator/////////////////////////////////////////
        personResult = await client.query(`
        INSERT INTO Person (Name, BirthDate, Sex) VALUES 
        ('John Doe', '1980-05-15', 'M'),
        ('Alice Johnson', '1990-03-10', 'F'),
        ('Bob Brown', '1975-09-25', 'M')
        RETURNING Id;
    `);
    console.log("id>>>"+personResult.rows[0].id);

      personIds = personResult.rows.map(row => row.id);
        // Insert into Administrator table
        await client.query(`
            INSERT INTO Administrator (Id, password_hash, PhoneNum, Email, Address) VALUES 
            ($1, 'hashedpassword123', '123-456-7890', 'john@example.com', '123 Main St'),
            ($2, 'hashedpassword456', '987-654-3210', 'jane@example.com', '456 Elm St'),
            ($3, 'hashedpassword789', '555-555-5555', 'alice@example.com', '789 Oak St');
        `,personIds);




        // Insert into Club table
        await client.query(`
            INSERT INTO Club (Name, Email, Address) VALUES 
            ('Club A', 'cluba@example.com', '789 Maple Ave'),
            ('Club B', 'clubb@example.com', '101 Pine St'),
            ('Club C', 'clubc@example.com', '303 Cedar St'),
            ('Club D', 'clubd@example.com', '404 Birch St');
        `);

        // Insert into Field table
        await client.query(`
            INSERT INTO Field (Location, Name, Type, Capacity, ClubName) VALUES 
            ('Downtown', 'Field A', 'Grass', 10000, 'Club A'),
            ('Uptown', 'Field B', 'Synthetic', 15000, 'Club B'),
            ('Midtown', 'Field C', 'Grass', 12000, 'Club C'),
            ('Suburb', 'Field D', 'Synthetic', 8000, 'Club D');
        `);

        let matchResult;
        // Insert into Match table
        matchResult = await client.query(`
            INSERT INTO Match (Category, Season, Association, MatchResult) VALUES 
            ('Premier', '2023', 'Association A', '2-1'),
            ('Championship', '2023', 'Association B', '1-1'),
            ('League One', '2023', 'Association C', '3-0'),
            ('League Two', '2023', 'Association D', '0-0')
            RETURNING MatchId;
        `);
        let matchIds = matchResult.rows.map(row => row.matchid);

        // Insert into Belongs table
        await client.query(`
            INSERT INTO Belongs (StartDate, LastDate, FootballerId, ClubName) VALUES 
            ('2023-01-01', NULL, $1, 'Club A'),
            ('2022-05-10', '2023-05-10', $2, 'Club B'),
            ('2021-09-15', NULL, $3, 'Club C'),
            ('2020-11-20', '2022-11-20', $4, 'Club D');
        `,footballerIds);

      let judgesIds = refereeIds.concat(matchIds);
      judgesIds.splice(3,1);

        // Insert into Judges table
        await client.query(`
            INSERT INTO Judges (RefereeId, MatchId) VALUES 
            ($1, $4),
            ($2, $5),
            ($3, $6);
        `,judgesIds);

        let ParticipatesIds = footballerIds.concat(matchIds);
        // Insert into Participates table
        await client.query(`
            INSERT INTO Participates (MinutesPlayed, YellowCard, RedCard, Goals, OwnGoals, FootballerId, MatchId) VALUES 
            (90, 1, FALSE, 1, 0, $1, $5),
            (85, 0, FALSE, 2, 0, $2, $6),
            (75, 2, TRUE, 0, 1, $3, $7),
            (90, 1, FALSE, 3, 0, $4, $8);
        `,ParticipatesIds);

        // Insert into Play table
        await client.query(`
            INSERT INTO Play (IdHome, IdAway, Time, Date, FieldName, MatchId) VALUES 
            ('Club A', 'Club B', '18:00', '2023-05-15', 'Field A', $1),
            ('Club B', 'Club A', '20:00', '2023-06-20', 'Field B', $2),
            ('Club C', 'Club D', '19:00', '2023-07-10', 'Field C', $3),
            ('Club D', 'Club C', '21:00', '2023-08-25', 'Field D', $4);
        `,matchIds);

        console.log('Data inserted successfully.');
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        // Close the database connection
        await client.end();
    }
};
// Execute the data insertion function
