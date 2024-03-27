"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
    HttpStatusCode[HttpStatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["UN_AUTHORIZED"] = 401] = "UN_AUTHORIZED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["ALREADY_EXISTS"] = 409] = "ALREADY_EXISTS";
})(HttpStatusCode || (exports.HttpStatusCode = HttpStatusCode = {}));
//# sourceMappingURL=httpStatusCode.js.map