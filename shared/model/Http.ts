export interface Http {
  get: <T>(
    path: string,
    params?: Record<string, string>,
    headers?: Record<string, string>
  ) => Promise<T>;
  post: <T, D>(
    path: string,
    body?: D,
    params?: Record<string, string>,
    headers?: Record<string, string>
  ) => Promise<T>;
  put: <T, D>(
    path: string,
    body?: D,
    params?: Record<string, string>,
    headers?: Record<string, string>
  ) => Promise<T>;
  patch: <T, D>(
    path: string,
    body?: D,
    params?: Record<string, string>,
    headers?: Record<string, string>
  ) => Promise<T>;
  delete: <T>(
    path: string,
    params?: Record<string, string>,
    headers?: Record<string, string>
  ) => Promise<T>;
}
