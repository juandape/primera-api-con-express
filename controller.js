const {
  getAllContacts,
  getContactsById,
  createContact,
  editContact,
  deleteContact,
} = require("./model");

function handleGetAllContacts(req, res) {
  const records = getAllContacts();
  res.json(records);
}

function handleGetByIdContact(req, res) {
  const { id } = req.params;
  const record = getContactsById(id);
  if (Object.keys(record).length === 0) {
    return res.status(404).json({ message: "COntact not found" });
  }
  return res.json(record);
}

function handleCreateContact(req, res) {
  const contact = req.body;
  const record = createContact(contact)
  return res.json(record);
}

//   persons.map((person)=>{
//   if (newPerson.name === person.name) {
//     return res.status(404).json({ message: "Person already exist" });
//   } else if (newPerson.number === "") {
//     return res.status(404).json({ message: "Number is empty" });
//   }
// })
//   const newPersons = persons.concat(newPerson);
//   return res.json(newPersons);

function handleEditContact(req, res) {
const {id} = req.params
const contact = req.body
const record = editContact(id, contact)
if (Object.keys(record).length === 0) {
  return res.status(404).json({ message: "Contact not found" });
}
return res.json(record)
}

function handleDeleteContact(req, res) {
  const { id } = req.params;
  deleteContact(id)
  return res.json({message: "Contact Deleted"})
}

module.exports = {
  handleGetAllContacts,
  handleGetByIdContact,
  handleCreateContact,
  handleEditContact,
  handleDeleteContact,
};
