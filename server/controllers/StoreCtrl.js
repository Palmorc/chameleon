module.exports = {
  getItems: async(req,res) => {
    try {
      let db = req.app.get('db')
      let items = await db.getAllItems()
      res.send(items)
    } catch (e) {
      console.log('We lost all the lizards, bossman', e);
      res.status(500).send(e)
    }
  },

  getOne: async(req,res) => {
    try {
      let db = req.app.get('db')
      let item = await db.getOneItem(req.params.id)
      res.send(item)
    } catch (e) {
      console.log('*********Error getting single lizard************', e);
      res.status(500).send(e)
    }
  }
}
