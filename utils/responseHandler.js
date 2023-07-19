
const handleSuccessResponse = (res, message, data) => {
    res.status(200).json({
        message,
        data
    });
};

const handleErrorResponse = (res, message, error) => {
    res.status(500).json({
        message,
        error
    });
};

module.exports = {
    handleSuccessResponse,
    handleErrorResponse
};
