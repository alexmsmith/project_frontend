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
        const authReq = request.clone({ 
            setHeaders: { 
                'Authorization': `Bearer ${this.authToken}`
            }
        });

        return next.handle(authReq);
    };
}