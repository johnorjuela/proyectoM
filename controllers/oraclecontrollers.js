export const consulta = (req,res)=>{
    console.log(req.body);
    res.json({ok:"Consulta BD OK"});
}