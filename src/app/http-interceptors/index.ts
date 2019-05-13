import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.http-interceptor';

export const httpInceptorsProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
];
