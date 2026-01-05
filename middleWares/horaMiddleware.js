module.exports = (req, res, next) => {
  const fecha = new Date();
  req.horaActual = fecha.getHours();
  next();
};