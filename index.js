const express = require("express");
const morganBody = require("morgan-body");
const bodyParser = require("body-parser");

const persons = [
  {
    id: 1,
    name: "Tony Stark",
    number: "25-344567",
  },
  {
    id: 2,
    name: "Steve Rogers",
    number: "24-334543",
  },
  {
    id: 3,
    name: "Natasha Romanoff",
    number: "45-643489",
  },
  {
    id: 4,
    name: "Bruce Banner",
    number: "76-904567",
  },
];

const newPerson = {
  id: Date.now(),
  name: "",
  number: "69-4323435",
};

const app = express();
const port = 8080;
const date = Date();
const people = persons.length;

app.use(bodyParser.json());
app.use(bodyParser.json());
morganBody(app);

app.get("/api/persons", (req, res) => res.json(persons));
app.get("/info", (req, res) =>
  res.send(`Phonebook has info for ${people} people --  ${date}`)
);
app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const person = persons.find((person) => person.id.toString() === id);
  if (!person) {
    return res.status(404).json({ message: "Person not found" });
  }
  return res.json(person);
});

app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const person = persons.find((person) => person.id.toString() === id);
  if (!person) {
    return res.status(404).json({ message: "Person not found" });
  }
  return res.send(`Person has been delete`);
});

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;
  if (!name || !number) {
    return res.status(400).json({ message: "Name or number is missing" });
  }
  const newPersons = persons.concat(newPerson);
  return res.json(newPersons);
});


// morgan.token("body", (req) => {
//   return JSON.stringify(req.body);
// });

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}!`)
);
