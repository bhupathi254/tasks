export default (err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        res.badRequest(err.error.details.map(p => p.message));
        return;
    }
    next(err);
};
