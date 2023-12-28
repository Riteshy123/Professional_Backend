class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }

// The ApiResponse class defined is a simple utility class for creating
//  consistent responses in your Express.js or similar web applications.
//   It helps encapsulate the structure of your API responses, 
//   making it easier to maintain a standard format throughout your application.
