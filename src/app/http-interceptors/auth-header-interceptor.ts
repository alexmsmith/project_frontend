import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthHeaderInterceptor implements HttpInterceptor {
    authToken = "UNKNOWN";
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('Auth Intercept Provider');
        // Logic
        if (localStorage.getItem('auth_token')) {
            this.authToken = localStorage.getItem('auth_token');
        }
        // console.log(this.authToken);
        const authReq = request.clone({ 
            setHeaders: { Authorization: this.authToken }
        });

        return next.handle(authReq);
    };
}