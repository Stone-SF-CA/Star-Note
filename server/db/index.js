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
  color: String,
  starred: Number
});

const Notebook = mongoose.model('Notebook', notebooks);

module.exports = {
  getAll: function (obj) {
    return obj.term ?
      Entry.find({ notebookId: obj.notebookId, title: { '$regex': obj.term, '$options': 'i' } }).sort({ date: -1 })
      : Entry.find({ notebookId: obj.notebookId }).sort({ date: -1 })
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
  deleteAllSelectedEntries: function (ids) {
    console.log('hit deleteSelected, ', ids)
    return Entry.deleteMany({ _id: { $in: ids } })
  },
  deleteAllEntriesInANotebook: function (obj) {
    return Entry.deleteMany({ notebookId: obj.notebookId })
  },
  deleteAllEntries: function () {
    return Entry.deleteMany({})
  },
  getAllNotebooks: function () {
    return Notebook.find({}).sort({ starred: -1, date: -1 })
  },
  createNotebook: function (obj) {
    return Notebook.create(obj)
  },
  editNotebook: function (obj) {
    console.log('EditNotebook: ', obj)
    return Notebook.findOneAndUpdate({ _id: obj._id }, obj)
  },
  delNotebook: function (id) {
    return Notebook.deleteOne({ _id: id })
  },
}