export const PROJECT_API_URL = Object.freeze({
  // GET_MANY: () => '/projects',
  GET_MANY: () => 'https://jsonplaceholder.typicode.com/posts?_limit=10',
  CREATE_ONE: () => '/projects',
  GET_ONE: (id) => `/projects/${id}`,
  UPDATE_ONE: (id) => `/projects/${id}`,
  DELETE_ONE: (id) => `/projects/${id}`,
});
