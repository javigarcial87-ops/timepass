module.exports= (req,resp,next)=>{
    const fechaActual = new Date ()
    const horaActual = fechaActual.gethours()

    req.horaActual = horaActual

    next()
}