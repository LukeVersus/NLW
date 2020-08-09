const database = require('sqlite-async')
databese.open(__dirname + '/database.sqlite').then(execute)
function execute(db){
    db.exec(`
        CREATE TABLE IF NOT EXISTIS proffys(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );
        
    `)
}