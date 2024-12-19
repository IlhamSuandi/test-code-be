import { Request, Response } from "express";
import db from "../config/connection";

class Meeting {
  showall = (req: Request, res: Response) => {
    const sql = `SELECT * FROM meeting LIMIT 1000`;
    db.query(sql, (err, fields) => {
      if (err) throw err;
      return res.send(fields);
    });
  };

  insert = (req: Request, res: Response) => {
    const {
      unit,
      meeting_room,
      capacity,
      date,
      start,
      end,
      total_attendance,
      type_consumption,
      total_consumption,
    } = req.body;

    // Insert data query
    const insertQuery = `
      INSERT INTO meeting (unit, meeting_room, capacity, date, start_time, end_time, total_attendance, type_consumption, total_consumption)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `;

    // Values array for parameterized query
    const values = [
      unit,
      meeting_room,
      capacity,
      date,
      start,
      end,
      total_attendance,
      type_consumption,
      total_consumption,
    ];

    // Then insert the data
    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error("Error executing INSERT query:", err);
        return res.status(500).send("Server error while inserting data");
      }

      return res.send("Data berhasil ditambahkan");
    });
  };
}

export default new Meeting();
