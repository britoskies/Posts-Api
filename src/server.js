const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

// Environment
require("dotenv").config({ path: ".env" });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 4000);

app.use("/", router);

app.listen(app.get("port"), function () {
    console.log(
        `Server running on http://localhost:${app.get("port")}`,
    );
})