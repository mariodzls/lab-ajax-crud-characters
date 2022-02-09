class APIHandler {
  constructor() {
    this.axiosApp = axios.create({
        baseURL: 'https://minions-api.herokuapp.com/'
    })
}

  getFullList () {
    return this.axiosApp.get('/characters')
  }

  getOneRegister (id) {
    return this.axiosApp.get(`/characters/${id}`)
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
