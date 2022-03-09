// in class variable first letter is capital
class ErrorHandler extends Error{
    constructor (message,statusCode){
        super(message); //passing message 
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = ErrorHandler;