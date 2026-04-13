export const url = (path) =>
  `${import.meta.env.BASE_URL}${path}`.replace(/\/+/g, "/");
