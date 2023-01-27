import { HttpOptions } from '@core/types/http-core.type';
import { map } from 'rxjs';


export const resolveUrl = (
  baseUrl: string,
  options?: HttpOptions,
  ...args: string[]
): string => {
  const { urlRewrite, urlPostfix } = options || {};

  if (urlRewrite) {
    return urlRewrite;
  }

  let result = baseUrl;

  if (args && args.length > 0) {
    result += `/${args.join('/')}`;
  }

  if (urlPostfix) {
    result += `/${urlPostfix}`;
  }

  return result;
};


export const extractRequestOptions = (options?: any) => {
  if (!options || typeof options !== 'object') {
    return {};
  }

  return [
    'headers',
    'params',
    'observe',
    'reportProgress',
    'responseType',
    'withCredentials',
  ].reduce((requestOptions: any, key) => {
    const value = options[key];

    if (value !== undefined) {
      requestOptions[key] = value;
    }

    return requestOptions;
  }, {});
};


export const mapResponse = <T>(options?: HttpOptions) =>
  map((res: T) => (options?.mapFn ? options.mapFn(res) : res));
