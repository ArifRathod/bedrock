module.exports = function(req, res, next) {
    const Stores = sails.models.store;
    var nonce = req.get("nonce");

    if (nonce === req.session.store.nonce) {
        res.locals.store = req.session.store;
        next();
    } else {
        return res.render("403");
    }
};
