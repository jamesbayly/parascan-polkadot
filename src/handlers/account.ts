import { Account } from "../types";

export async function ensureAccount(accountID: string): Promise<void> {
  accountID = accountID.toLowerCase();
  let entity = await Account.get(accountID);
  if (!entity) {
    entity = new Account(accountID);
    await entity.save();
  }
}
