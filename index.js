const express = require("express");
const morganBody = require("morgan-body");
const bodyParser = require("body-parser");

const {
  handleGetAllContacts,
  handleGetByIdContact,
  handleCreateContact,
  handleEditContact,
  handleDeleteContact,
} = require("./controller");

const app = express();
const port = 8080;
const date = Date();

app.use(express.json());
app.use(bodyParser.json());
morganBody(app);

const all = ()=>{
  app.get("/api/persons", handleGetAllContacts);
}
all()

app.get("/info", (req, res) =>
  res.send(`Phonebook has info for ${all.length} people --  ${date}`)
);

app.get("/api/persons/:id", handleGetByIdContact);

app.post("/api/persons", handleCreateContact);

app.patch("/api/persons/:id", handleEditContact);

app.delete("/api/persons/:id", handleDeleteContact);
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}!`)
);
