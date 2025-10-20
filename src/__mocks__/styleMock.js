const styleMock = new Proxy(
  {},
  {
    get: (_, prop) => prop,
  },
);
export default styleMock;
