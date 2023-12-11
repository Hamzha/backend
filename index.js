const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());
//ejs
app.set("view engine", "ejs");

//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/add", (request, response) => {
  const data = request.body;
  try {
    const { number1, number2, currency } = data;

    if (
      number1 !== undefined &&
      number2 !== undefined &&
      currency !== undefined
    ) {
      const addNumbers = Number.parseInt(number1) + Number.parseInt(number2);
      if (currency === "USD")
        response.send({
          result: {
            usd: addNumbers.toFixed(2),
            eur: (addNumbers * 0.93).toFixed(2),
          },
        });
      else
        response.status(200).send({
          result: {
            usd: (addNumbers * 1.08).toFixed(2),
            eur: addNumbers.toFixed(2),
          },
        });
    } else {
      response.status(400).send({ result: "Wrong input" });
    }
  } catch (error) {
    console.log({ error });
    response.status(400).send({ result: `something went wrong!` });
  }
});

app.post("/subtract", (request, response) => {
  const data = request.body;
  try {
    const { number1, number2, currency } = data;

    if (
      number1 !== undefined &&
      number2 !== undefined &&
      currency !== undefined
    ) {
      const addNumbers = Number.parseInt(number1) - Number.parseInt(number2);
      if (currency === "USD")
        response.send({
          result: {
            usd: addNumbers.toFixed(2),
            eur: (addNumbers * 0.93).toFixed(2),
          },
        });
      else
        response.status(200).send({
          result: {
            usd: (addNumbers * 1.08).toFixed(2),
            eur: addNumbers.toFixed(2),
          },
        });
    } else {
      response.status(400).send({ result: "Wrong input" });
    }
  } catch (error) {
    console.log({ error });
    response.status(400).send({ result: `something went wrong!` });
  }
});
app.post("/multiply", (request, response) => {
  const data = request.body;
  try {
    const { number1, number2, currency } = data;

    if (
      number1 !== undefined &&
      number2 !== undefined &&
      currency !== undefined
    ) {
      const addNumbers = Number.parseInt(number1) * Number.parseInt(number2);
      if (currency === "USD")
        response.send({
          result: {
            usd: addNumbers.toFixed(2),
            eur: (addNumbers * 0.93).toFixed(2),
          },
        });
      else
        response.status(200).send({
          result: {
            usd: (addNumbers * 1.08).toFixed(2),
            eur: addNumbers.toFixed(2),
          },
        });
    } else {
      response.status(400).send({ result: "Wrong input" });
    }
  } catch (error) {
    console.log({ error });
    response.status(400).send({ result: `something went wrong!` });
  }
});
app.post("/divide", (request, response) => {
  const data = request.body;
  try {
    const { number1, number2, currency } = data;

    if (
      number1 !== undefined &&
      number2 !== undefined &&
      currency !== undefined
    ) {
      const addNumbers = Number.parseInt(number1) / Number.parseInt(number2);
      if (currency === "USD")
        response.send({
          result: {
            usd: addNumbers.toFixed(2),
            eur: (addNumbers * 0.93).toFixed(2),
          },
        });
      else
        response.status(200).send({
          result: {
            usd: (addNumbers * 1.08).toFixed(2),
            eur: addNumbers.toFixed(2),
          },
        });
    } else {
      response.status(400).send({ result: "Wrong input" });
    }
  } catch (error) {
    console.log({ error });
    response.status(400).send({ result: `something went wrong!` });
  }
});
//port
app.listen(3000, console.log("Listening at port 3000..."));
