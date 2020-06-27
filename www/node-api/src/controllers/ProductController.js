//  Controller para as requisoções das todas
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  // GET ALL
  async index(req, res) {
    const {page =  1} = req.query;
    const products = await Product.paginate({/* condições/filtros */}, 
    {
      page, 
      limit: 10
    });
    return res.json(products);
  },

  //  GET ID
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  //  POST
  async store(req, res){
    const product = await Product.create(req.body);
    return res.json(product);
  },

  // PUT
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(product);

  },

  // DELETE
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  }
};