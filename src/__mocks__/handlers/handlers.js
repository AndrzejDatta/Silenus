import { rest } from "msw";
import { plants } from "__mocks__/data/plants";

//define endpoints
export const handlers = [
  rest.get("/plants", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ plants }));
  }),
];
