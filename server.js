const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/", function (req, res) {

    form = `<form action="/" method="GET">
            <input type="submit" value="przejdź do /data">
            </form>`
    res.send("<h1>My app on heroku! - zmiana w pliku</h1>" + form)
})

app.get("/data", function (req, res) {
    var obj = {
        imie: "Kamil",
        nazwisko: "Mróz",
        klasa: "3I1",
        grupa: "1"
    }
    res.send(obj)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})