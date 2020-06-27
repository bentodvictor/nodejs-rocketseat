//  Esquema (schema) para produtos
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});
//  Criação do plugin de páginas
ProductSchema.plugin(mongoosePaginate);

// Registro do modelo no banco de dados
mongoose.model('Product', ProductSchema);