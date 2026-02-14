import Database from 'better-sqlite3';
import { join } from 'path';

// Local DB path - stored in the project root or a dedicated data directory
// In production (if this were an Electron app), this would be in userData
const dbPath = join(process.cwd(), 'local.db');

export const db = new Database(dbPath, { 
  verbose: console.log 
});

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL');

export default db;
