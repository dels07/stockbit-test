import * as repo from "../src/repository.mjs";

describe("writeLog", () => {
  it("should not write log when endpoint or params empty", async () => {
    const endpoint = "";
    const params = "";

    const result = await repo.writeLog(endpoint, params);

    expect(result).toEqual(undefined);
  });
});
