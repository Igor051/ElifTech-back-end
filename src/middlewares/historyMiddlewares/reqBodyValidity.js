module.exports = {
    reqBodyValidity(req, res, next) {
        try{
            if(!req.body.email || !req.body.phone){
                res.status(400)
                res.send({message: "no email or phone number"})
                res.end()
            }else if(typeof req.body.email !== "string" || typeof req.body.phone !== "string"){
                res.status(400)
                res.send({message: "email and phone should be a string"})
                res.end()
            }
            else{
                next()
            }
        }catch (e) {
            res.status(500)
            res.send({message: e.message})
        }
    }
}