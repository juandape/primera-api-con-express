const { getAllContacts, getContactsById } = require("./model");

function handleGetAllContacts(req, res) {
  const records = getAllContacts();
  res.json(records);
}

function handleGetByIdContact(req, res) {
  const { id } = req.params;
  const record = getContactsById(id)
  if (!record) {
    return res.status(404).json({ message: "Person not found" });
  }
  return res.json(record);
}

function handleDeleteContact(req, res){
  const { id } = req.params;
}


module.exports = {
  handleGetAllContacts,
  handleGetByIdContact,
};

// (req, res) => {
//   const { id } = req.params;
//   const person = persons.find((person) => person.id.toString() === id);
//   if (!person) {
//     return res.status(404).json({ message: "Person not found" });
//   }
//   return res.send(`Person has been delete`);
// }
