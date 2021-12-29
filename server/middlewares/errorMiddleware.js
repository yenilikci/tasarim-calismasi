//requested not found
const notFound = (req, res, next) => {
    const err = new Error(`Not Found: ${req.originalUrl}`)
    res.status(404);
    next(err);
};

//generic error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack //default development
    });
};

module.exports = { notFound, errorHandler};
