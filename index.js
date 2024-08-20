

let jsonServer = require('json-server')
let morgan = require('morgan')

let server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(morgan('dev'));
server.use((req, res, next) => {
  // Middleware to disable CORS
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
server.use(router);



server.listen(7000, () => {
  console.log(`JSON Server is running at port 7000`);
});