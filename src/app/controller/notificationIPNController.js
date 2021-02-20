
module.exports = {
    create(req, res) {
        const {id, topic} = req.body;
        console.log(id, topic);
    }
}