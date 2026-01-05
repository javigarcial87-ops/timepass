const express = require('express');
const router = express.Router();
const horaMiddleware = require('../middlewares/horaMiddleware');

router.get('/', horaMiddleware, (req, res) => {
  const mensaje = req.query.mensaje || '';

  res.send(`
    <h1>Bienvenido a la página principal</h1>
    <p>Hora actual: ${req.horaActual}:00</p>

    ${mensaje ? `<p style="color:red;">${mensaje}</p>` : ''}

    <a href="/endroute">
      <button>Ir a la página final</button>
    </a>
  `);
});

module.exports = router;