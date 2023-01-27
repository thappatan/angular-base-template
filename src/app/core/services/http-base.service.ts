import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

import { NgxSpinnerService } from 'ngx-spinner';

import { HttpConfig } from '@core/models/http-config.model';
import {
  HttpAddOptions,
  HttpDeleteOptions,
  HttpGetListOptions,
  HttpGetSingleOptions,
  HttpMethod,
  HttpUpdateOptions,
} from '@core/types/http-core.type';
import {
  extractRequestOptions,
  resolveUrl,
  mapResponse,
} from '@core/constants/http.constant';

export class BaseService {
  private readonly http: HttpClient;
  private readonly spinner: NgxSpinnerService;

  constructor(protected httpConfig: HttpConfig) {
    this.http = inject(HttpClient);
    this.spinner = inject(NgxSpinnerService);
  }

  get url(): string {
    const { baseUrl, resourceName } = this.httpConfig;
    return `${baseUrl}/${resourceName}`;
  }

  getHttpClient(): HttpClient {
    return this.http;
  }

  list<T>(options: HttpGetListOptions = { spinner: true }): Observable<T> {
    if (options?.spinner) {
      this.spinner.show();
    }
    const method: HttpMethod = 'GET';
    const url = resolveUrl(this.url, options);
    const requestOptions = extractRequestOptions(options);

    return this.http.request<T>(method, url, requestOptions).pipe(
      tap(() => {
        if (options?.spinner) {
          this.spinner.hide();
        }
      }),
      mapResponse(options),
      catchError((err) => {
        if (options?.spinner) {
          this.spinner.hide();
        }
        return this.handleError(err);
      })
    );
  }

  single<T>(
    id: string | number,
    options: HttpGetSingleOptions = { spinner: true }
  ): Observable<T> {
    if (options?.spinner) {
      this.spinner.show();
    }
    const method: HttpMethod = 'GET';
    const url = resolveUrl(this.url, options, id.toString());
    const requestOptions = extractRequestOptions(options);

    return this.http
      .request<T>(method, url, requestOptions)
      .pipe(mapResponse(options), catchError(this.handleError));
  }

  add<T>(
    body: any,
    options: HttpAddOptions = { spinner: true }
  ): Observable<T> {
    const method: HttpMethod = 'POST';
    const url = resolveUrl(this.url, options);
    const requestOptions = { ...extractRequestOptions(options), body };

    return this.http.request<T>(method, url, requestOptions).pipe(
      tap(() => {
        if (options?.spinner) {
          this.spinner.hide();
        }
      }),
      mapResponse(options),
      catchError((err) => {
        if (options?.spinner) {
          this.spinner.hide();
        }
        return this.handleError(err);
      })
    );
  }

  update<T>(
    id: string | number,
    body: any,
    options: HttpUpdateOptions = { spinner: true }
  ): Observable<T> {
    if (options?.spinner) {
      this.spinner.show();
    }
    const method: HttpMethod = options?.method || 'PUT';
    const url = resolveUrl(this.url, options, id.toString());
    const requestOptions = { ...extractRequestOptions(options), body };

    return this.http.request<T>(method, url, requestOptions).pipe(
      tap(() => {
        if (options?.spinner) {
          this.spinner.hide();
        }
      }),
      mapResponse(options),
      catchError((err) => {
        if (options?.spinner) {
          this.spinner.hide();
        }
        return this.handleError(err);
      })
    );
  }

  updateWithoutID<T>(
    body: any,
    options: HttpUpdateOptions = { spinner: true }
  ): Observable<T> {
    if (options?.spinner) {
      this.spinner.show();
    }
    const method: HttpMethod = options?.method || 'PUT';
    const url = resolveUrl(this.url, options);
    const requestOptions = { ...extractRequestOptions(options), body };

    return this.http.request<T>(method, url, requestOptions).pipe(
      tap(() => {
        if (options?.spinner) {
          this.spinner.hide();
        }
      }),
      mapResponse(options),
      catchError((err) => {
        if (options?.spinner) {
          this.spinner.hide();
        }
        return this.handleError(err);
      })
    );
  }

  delete<T>(
    id: string | number,
    options: HttpDeleteOptions = { spinner: true }
  ): Observable<T> {
    if (options?.spinner) {
      this.spinner.show();
    }
    const method: HttpMethod = 'DELETE';
    const url = resolveUrl(this.url, options, id.toString());
    const requestOptions = extractRequestOptions(options);

    return this.http.request<T>(method, url, requestOptions).pipe(
      tap(() => {
        if (options?.spinner) {
          this.spinner.hide();
        }
      }),
      mapResponse(options),
      catchError((err) => {
        if (options?.spinner) {
          this.spinner.hide();
        }
        return this.handleError(err);
      })
    );
  }

  deleteWithoutID<T>(
    options: HttpDeleteOptions = { spinner: true }
  ): Observable<T> {
    if (options?.spinner) {
      this.spinner.show();
    }
    const method: HttpMethod = 'DELETE';
    const url = resolveUrl(this.url, options);
    const requestOptions = extractRequestOptions(options);

    return this.http.request<T>(method, url, requestOptions).pipe(
      tap(() => {
        if (options?.spinner) {
          this.spinner.hide();
        }
      }),
      mapResponse(options),
      catchError((err) => {
        if (options?.spinner) {
          this.spinner.hide();
        }
        return this.handleError(err);
      })
    );
  }

  protected handleError(error: Error | HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }
}
