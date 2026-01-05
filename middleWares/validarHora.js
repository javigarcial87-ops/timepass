module.exports = (req, res, next) => {
  const hora = req.horaActual;

  if (hora >= 12 && hora <= 23) {
    next();
  } else {
    const mensaje = 'Aún no son las 12 de la mañana';
    return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
  }
};