import ConflictError from "./ConflictError";

export default class EmailAlreadyRegistered extends ConflictError {
  constructor(email: string) {
    super(`Email "${email}" is being used by another user!`);
    this.name = "EmailAlreadyRegistered";
  }
}