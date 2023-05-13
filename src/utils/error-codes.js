const clientErrorCodes = Object.freeze({
    BAD_REQUEST : 400,
    UNAUTHORIZED : 401,
    NOT_FOUND : 404
});

const serverErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED : 501
});

const successCodes = Object.freeze({
    OK : 200,
    CREATED : 201
});

module.exports = {
    clientErrorCodes,
    serverErrorCodes,
    successCodes
}



