const express = require("express");
const morganBody = require("morgan-body");
const bodyParser = require("body-parser");

const {
  handleGetAllContacts,
  handleGetByIdContact,
} = require("./controller")


const newPerson = {
  id: Date.now(),
  name: "Nick Fury",
  number: "69-4323435",
};

const app = express();
const port = 8080;
const date = Date();
// const people = persons.length;

app.use(bodyParser.json());
app.use(bodyParser.json());
morganBody(app);

app.get("/api/persons", handleGetAllContacts);
// app.get("/info", (req, res) =>
//   res.send(`Phonebook has info for ${people} people --  ${date}`)
// );
app.get("/api/persons/:id", handleGetByIdContact);

app.delete("/api/persons/:id", );

app.post("/api/persons", (req, res) => {
  persons.map((person)=>{
  if (newPerson.name === person.name) {
    return res.status(404).json({ message: "Person already exist" });
  } else if (newPerson.number === "") {
    return res.status(404).json({ message: "Number is empty" });
  }
})
  const newPersons = persons.concat(newPerson);
  return res.json(newPersons);
});


app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}!`)
);
