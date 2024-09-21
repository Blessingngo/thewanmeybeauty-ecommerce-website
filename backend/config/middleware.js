// Middleware for logging requests
const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}' at ${new Date().toISOString()}`);
    next();
};

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
};

// Middleware for handling 404 errors
const notFound = (req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
};

module.exports = {
    logger,
    errorHandler,
    notFound,
};
