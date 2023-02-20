const notFound = (req, res, next) => {
    const error = new Error(`Không tồn tại - ${req.originalUrl}`);
    res.status(404);
    next(error);
};
const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.status(404);
    next(error);
};
