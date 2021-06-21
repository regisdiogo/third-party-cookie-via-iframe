const express = require('express')
const app = express();

const PORT = process.env.PORT || 5000;

const renderIndexPage = (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <body>
    <h3>Hello third party cookie via iframe!</h3>
  </body>
</html>`);
}

express()
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))
  .get('/', renderIndexPage)
  .listen(PORT, () => console.log(`Listening on ${PORT}`))