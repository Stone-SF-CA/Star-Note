const db = require('../db')

module.exports = {
  get: function (req, res) {
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
    console.log('REq.query._id: ', req.query._id)
    db.del(req.query._id)
      .then(data => res.send(data))
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
    console.log('REq.query._id: ', req.query._id)
    db.delNotebook(req.query._id)
      .then(data => res.send(data))
      .catch(err => console.log(err))
  },
}