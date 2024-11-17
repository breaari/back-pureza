require("dotenv").config();
const { Sequelize } = require("sequelize");
const CarritoModel = require("./Models/Carrito");
const CategoriaModel = require("./Models/Categoria");
const PedidoModel = require("./Models/Pedido");
const ProductoModel = require("./Models/Producto");
const UsuarioModel = require("./Models/Usuario");
const TipoModel = require("./Models/Tipo");
const SubcategoriaModel = require("./Models/Subcategoria");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

// Define los modelos
const Tipo = TipoModel(sequelize);
const Carrito = CarritoModel(sequelize);
const Categoria = CategoriaModel(sequelize);
const Subcategoria = SubcategoriaModel(sequelize);
const Pedido = PedidoModel(sequelize);
const Producto = ProductoModel(sequelize);
const Usuario = UsuarioModel(sequelize);
const Descuento = require('./models/descuento')(sequelize);

// Define las relaciones
Usuario.hasOne(Tipo);
Tipo.belongsTo(Usuario);

Usuario.belongsToMany(Pedido, {
  through: 'UsuarioPedidos', // Nombre de la tabla intermedia
  foreignKey: 'usuarioId', // Clave foránea en la tabla intermedia que referencia a Usuario
  otherKey: 'pedidoId', // Clave foránea en la tabla intermedia que referencia a Pedido
});

Pedido.belongsToMany(Usuario, {
  through: 'UsuarioPedidos', // Nombre de la tabla intermedia
  foreignKey: 'pedidoId', // Clave foránea en la tabla intermedia que referencia a Pedido
  otherKey: 'usuarioId', // Clave foránea en la tabla intermedia que referencia a Usuario
});

Usuario.hasOne(Carrito);

Carrito.belongsTo(Usuario);

Producto.belongsToMany(Categoria, {
  through: 'ProductoxCategoria',
  foreignKey: 'productoId',
  otherKey: 'categoriaId',
});

Categoria.belongsToMany(Producto, {
  through: 'ProductoxCategoria',
  foreignKey: 'categoriaId',
  otherKey: 'productoId',
});

Subcategoria.belongsToMany(Producto, {
  through: 'SubcategoriaProductos', // Nombre de la tabla intermedia
  foreignKey: 'subcategoriaId', // Clave foránea en la tabla intermedia que referencia a Subcategoria
  otherKey: 'productoId', // Clave foránea en la tabla intermedia que referencia a Producto
});

Producto.belongsToMany(Subcategoria, {
  through: 'SubcategoriaProductos', // Nombre de la tabla intermedia
  foreignKey: 'productoId', // Clave foránea en la tabla intermedia que referencia a Producto
  otherKey: 'subcategoriaId', // Clave foránea en la tabla intermedia que referencia a Subcategoria
});

Categoria.belongsToMany(Subcategoria, {
  through: 'CategoriaxSubcategoria', // Nombre de la tabla de unión
  foreignKey: 'categoriaId', // Clave foránea en la tabla de unión que referencia a Categoria
  otherKey: 'subcategoriaId', // Clave foránea en la tabla de unión que referencia a Subcategoria
});

Subcategoria.belongsToMany(Categoria, {
  through: 'CategoriaxSubcategoria', // Nombre de la tabla de unión
  foreignKey: 'subcategoriaId', // Clave foránea en la tabla de unión que referencia a Subcategoria
  otherKey: 'categoriaId', // Clave foránea en la tabla de unión que referencia a Categoria
});

// Sincroniza los modelos con la base de datos
sequelize.sync({ force: false, alter: true })
  .then(() => {
    console.log('Tablas sincronizadas');
  })
  .catch(err => {
    console.error('Error sincronizando las tablas:', err);
  });

module.exports = {
  Tipo,
  Carrito,
  Categoria,
  Subcategoria,
  Pedido,
  Producto,
  Usuario,
  Descuento,
  conn: sequelize,
};
