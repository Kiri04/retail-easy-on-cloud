import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  if (!request.url.startsWith('/api/')) {
    return next(request);
  }

  const apiRequest = request.clone({
    setHeaders: { Accept: 'application/json' },
  });

  return next(apiRequest);
};
