import * as SQLite from 'expo-sqlite';

// connect or create a db 
const db = SQLite.openDatabase('places.db');

export const init = ()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
            [],
            ()=>{
                // success function
                resolve();
            },
            (_,err)=>{
                reject(err);
            }
            )
        });
    });
    return promise; 
    
}