import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "__mocks__/handlers/handlers";

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
