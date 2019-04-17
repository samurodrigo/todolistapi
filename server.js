var express = require("express"),
app = express(),
port = process.env.PORT || 3000,
mongoose = require("mongoose"),
Task = require("./api/models/todoListModel"),
bodyParser = require("body-parser");

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Conectado ao mongo db");
    })
    .catch((error) => {
        console.log("Erro ao conectar ao mogodb. " + error);
    });
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res) => {
    res.status(404).json({url: req.originalUrl + " not found"});
});

const routes = require("./api/routes/todoListRoutes");
routes(app);

app.listen(port,function(){
    console.log(`TODO LIST Restful API server started on port:${port}`)
});