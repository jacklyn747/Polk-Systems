import { db } from './client';

export const initSchema = () => {
    // audits table
    db.exec(`
    CREATE TABLE IF NOT EXISTS audits (
      id TEXT PRIMARY KEY,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      completed_at DATETIME,
      status TEXT CHECK(status IN ('started', 'completed', 'aborted'))
    );
  `);

    // form_responses table
    db.exec(`
    CREATE TABLE IF NOT EXISTS form_responses (
      id TEXT PRIMARY KEY,
      audit_id TEXT,
      question_id TEXT,
      answer_value TEXT,
      FOREIGN KEY(audit_id) REFERENCES audits(id)
    );
  `);

    // system_logs table
    db.exec(`
    CREATE TABLE IF NOT EXISTS system_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      event_type TEXT,
      details TEXT
    );
  `);

    console.log('Local schema initialized.');
};
