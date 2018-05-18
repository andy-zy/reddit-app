/**
 * Facade over the interface for fetching resources
 * Just an abstraction layer in order to be able flexibly replace FETCH in the future
 */
const api = {
  get: (url, params) => fetch(url, params),
  /* post, put, delete etc. */
}

export default api