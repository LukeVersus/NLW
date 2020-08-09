const database = require('sqlite-async')
database.open(__dirname + '/database.sqlite').then(execute)
function execute(db){
    db.exec(`
       
        CREATE TABLE IF NOT EXISTIS proffys(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );
       
        CREATE TABLE IF NOT EXISTIS classes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );
        
        CREATE TABLE IF NOT EXISTIS class_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}