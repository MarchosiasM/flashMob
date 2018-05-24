var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";



MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flashmob_db");
    dbo.createCollection("USERS", function (err, res) {
        if (err) throw err;
        console.log("USERS Collection created!");
    })
    // dbo.createCollection("SETS", function (err, res) {
    //     if (err) throw err;
    //     console.log("SETS Collection created!");
    // })

    // dbo.createCollection("CARDS", function (err, res) {
    //     if (err) throw err;
    //     console.log("CARDS Collection created!");
    // })
    db.close();
});