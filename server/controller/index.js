const db = require('../db')

module.exports = {
  get: function (req, res) {
    console.log('Search: ', req.query)
    db.getAll(req.query)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  post: function (req, res) {
    db.create(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  put: function (req, res) {
    db.edit(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  delete: function (req, res) {
    db.del(req.query._id)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  deleteAll: function (req, res) {
    console.log('hit deleteAll, ', req.query.notebookId)
    db.deleteAllEntriesInANotebook(req.query)
      .then(data => res.send('Deleted all entries for that notebook:'))
      .catch(err => console.log(err))
  },
  deleteSelected: function (req, res) {
    db.deleteAllSelectedEntries(req.query.ids)
      .then(data => res.send('Deleted selected entries for that notebook:'))
      .catch(err => console.log(err))
  },
  getNotebooks: function (req, res) {
    db.getAllNotebooks()
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  postNotebook: function (req, res) {
    db.createNotebook(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  putNotebook: function (req, res) {
    db.editNotebook(req.body)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
  deleteNotebook: function (req, res) {
    db.delNotebook(req.query._id)
      .then(data => console.log('Success'))
      .catch(err => console.log(err))
  },
  moveSelected: function (req, res) {
    console.log('moveSelected', req.body)
    // db.moveSelected(req.body)
    //   .then(data => res.send(data))
    //   .catch(err => console.log(err))
  },
}