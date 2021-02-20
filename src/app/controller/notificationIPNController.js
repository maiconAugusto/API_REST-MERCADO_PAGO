
module.exports = {
    create(req, res) {
        const {id} = req.query;
        console.log(id);
        console.log('hehe')
        return res.status(200)
    }
}