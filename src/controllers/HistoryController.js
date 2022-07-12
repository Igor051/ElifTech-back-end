const {getOrdersByEmailPhone} = require("../services/Order")

module.exports = {
    async HistoryController(req, res) {
        try {
            const answer = await getOrdersByEmailPhone(req.body.email, req.body.phone)
            if (answer.length !== 0) {
                res.status(200)
                res.send(answer)
                res.end()
            } else {
                res.status(204)
                res.send()
                res.end()
            }
        } catch (e) {
            res.status(500)
            res.send({message: e.message})
            res.end()
        }

    }
}