import { createTransactionEvent } from "forta-agent";
import agent from "./agent";

describe("handleTransaction", () => {
  it("returns empty findings if no matched events are found", async () => {
    const mockTxEvent = createTransactionEvent({
      transaction: {
        data: "0x",
      } as any,
      block: {} as any,
      logs: {} as any,
      contractAddress: {} as any,
    });
    mockTxEvent.filterLog = jest.fn().mockReturnValue([]);

    const findings = await agent.handleTransaction(mockTxEvent);

    expect(findings).toStrictEqual([]);
    expect(mockTxEvent.filterLog).toHaveBeenCalledTimes(2);
  });
});
