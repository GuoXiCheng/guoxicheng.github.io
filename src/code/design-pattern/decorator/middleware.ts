export {};

interface WebService {
    handleRequest(request: string): string;
}

class BasicWebService implements WebService {
    handleRequest(request: string): string {
        // 处理请求的核心逻辑
        return `Response to ${request}`;
    }
}

abstract class MiddlewareDecorator implements WebService {
    protected wrappedService: WebService;

    constructor(service: WebService) {
        this.wrappedService = service;
    }

    handleRequest(request: string): string {
        return this.wrappedService.handleRequest(request);
    }
}

class AuthenticationMiddleware extends MiddlewareDecorator {
    handleRequest(request: string): string {
        console.log("Authentication Middleware: Checking authentication");
        // 添加身份验证逻辑
        return super.handleRequest(request);
    }
}

class ErrorHandlingMiddleware extends MiddlewareDecorator {
    handleRequest(request: string): string {
        try {
            return super.handleRequest(request);
        } catch (error) {
            return "ErrorHandling Middleware: An error occurred";
        }
    }
}

class LoggingMiddleware extends MiddlewareDecorator {
    handleRequest(request: string): string {
        console.log(`Logging Middleware: Received request ${request}`);
        const response = super.handleRequest(request);
        console.log(`Logging Middleware: Sending response ${response}`);
        return response;
    }
}

let service: WebService = new BasicWebService();
service = new AuthenticationMiddleware(service);
service = new ErrorHandlingMiddleware(service);
service = new LoggingMiddleware(service);

const response = service.handleRequest("user request");
console.log(response);