export enum ErrorCode {
  IncorrectCredentials = 1,
}

export type ActionError = {
  code: ErrorCode;
  message: string;
};

export type ActionResult<T> =
  | { error: ActionError }
  | ({ error: undefined } & T);

export class Transaction {
  private constructor(
    private readonly _started: boolean,
    private readonly _done: boolean,
    public readonly error?: ActionError,
  ) {}

  public get ok(): boolean {
    return this._started && this._done && !this.error;
  }

  public static create(): Transaction {
    return new Transaction(false, false);
  }

  public static start(): Transaction {
    return new Transaction(true, false);
  }

  public static finish(error?: ActionError): Transaction {
    return new Transaction(true, true, error);
  }
}
