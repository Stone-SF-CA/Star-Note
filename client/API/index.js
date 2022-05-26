const axios = require('axios');

module.exports = {
  getEntries: function (obj) {
    console.log(obj)
    return axios.get('/entries?', { params: obj })
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  postEntry: function (obj) {
    return axios.post('/entries', obj)
      .then(data => this.getEntries())
      .catch(err => console.log(err))
  },
  editEntry: function (obj) {
    return axios.put('/entries', obj)
      .then(data => this.getEntries())
      .catch(err => console.log(err))
  },
  delEntry: function (obj) {
    return axios.delete('/entries?', { params: obj })
      .then(data => this.getEntries())
      .catch(err => console.log(err))
  },
  getNotebooks: function () {
    return axios.get('/notebooks')
      .then(data => {
        return data
      })
      .catch(err => console.log(err))
  },
  postNotebook: function (obj) {
    return axios.post('/notebooks', obj)
      .then(data => this.getEntries())
      .catch(err => console.log(err))
  },
  editNotebook: function (obj) {
    return axios.put('/notebooks', obj)
      .then(data => this.getEntries())
      .catch(err => console.log(err))
  },
  delNotebook: function (obj) {
    return axios.delete('/notebooks?', { params: obj })
      .then(data => this.getEntries())
      .catch(err => console.log(err))
  },
}
