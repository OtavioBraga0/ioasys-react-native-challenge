export function emailIsValid(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export class Email {
  _email: string

  constructor(email: string) {
    if (!emailIsValid(email)) {
      throw new Error('Invalid Email')
    }

    this._email = email
  }

  equals(email: string): boolean {
    return this._email === email
  }

  toString(): string {
    return this._email
  }

  valueOf(): string {
    return this._email
  }

  validate(): boolean {
    return emailIsValid(this._email)
  }
}
