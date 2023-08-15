const token1 = '64cbeddd253549dc8b990b71';
const token2 = '64cbeddc2535491d86990b6e';


import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Escolher qual token usar
    const chosenToken = token1;

    // Clonar a requisição e adicionar o token no cabeçalho
    const authReq = req.clone({
      setHeaders: {
        'app-id': chosenToken,
      },
    });

    // Passar a nova requisição para o próximo manipulador
    return next.handle(authReq);
  }
}
