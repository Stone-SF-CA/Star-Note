const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/entries');


const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  summary: String,
  description: String,
  photos: Array,
  date: { type: Date, default: Date.now },
  notebookId: String
});

const Entry = mongoose.model('Entry', blogSchema);

const notebooks = new Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
});

const Notebook = mongoose.model('Notebook', notebooks);

module.exports = {
  getAll: function (obj) {
    return Entry.find({ notebookId: obj.notebookId }).sort({ date: -1 })
  },
  create: function (obj) {
    return Entry.create(obj)
  },
  edit: function (obj) {
    return Entry.findOneAndUpdate({ _id: obj._id }, obj)
  },
  del: function (id) {
    return Entry.deleteOne({ _id: id })
  },
  deleteAllEntriesInANotebook: function (id) {
    return Entry.deleteMany({ notebookId: id })
  },
  deleteAllEntries: function () {
    return Entry.deleteMany({})
  },
  getAllNotebooks: function () {
    return Notebook.find({}).sort({ date: -1 })
  },
  createNotebook: function (obj) {
    return Notebook.create(obj)
  },
  editNotebook: function (obj) {
    return Notebook.findOneAndUpdate({ _id: obj._id }, obj)
  },
  delNotebook: function (id) {
    return Notebook.deleteOne({ _id: id })
  },
}