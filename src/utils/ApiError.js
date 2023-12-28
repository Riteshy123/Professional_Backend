class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}


// The ApiError class you've defined is an extension of the built-in JavaScript Error class. 
// This custom error class is designed to represent errors that can occur in your API.
//  It provides additional properties like statusCode, errors, and success to help standardize error responses in your application.