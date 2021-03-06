declare namespace bcrypt {
  /**
   * @param rounds the cost of processing the data. (default - 10)
   * @param cb a callback to be fired once the salt has been generated. uses eio making it asynchronous.
   */
  export function genSalt (cb: (err: Error | void, salt: string) => void): void;
  export function genSalt (rounds: number, cb: (err: Error | void, salt: string) => void): void;

  /**
   * @param data the data to be encrypted.
   * @param salt the salt to be used to hash the password. if specified as a number then a salt will be generated with the specified number of rounds and used.
   * @param cb a callback to be fired once the data has been encrypted. uses eio making it asynchronous.
   */
  export function hash (data: string, salt: string | number, cb: (err: Error | void, encrypted: string) => void): void;

  /**
   * @param data data to compare.
   * @param encrypted data to be compared to.
   * @param cb a callback to be fired once the data has been compared. uses eio making it asynchronous.
   */
  export function compare (data: string, encrypted: string, cb: (err: Error | void, same: boolean) => void): void;

  /**
   * @param rounds the cost of processing the data. (default - 10)
   */
  export function genSaltSync (rounds?: number): string;

  /**
   * @param data the data to be encrypted.
   * @param salt the salt to be used to hash the password. if specified as a number then a salt will be generated with the specified number of rounds and used.
   */
  export function hashSync (data: string, salt: string | number): string;

  /**
   * @param data data to compare.
   * @param encrypted data to be compared to.
   */
  export function compareSync (data: string, encrypted: string): string;

  /**
   * Return the number of rounds used to encrypt a given hash.
   *
   * @param encrypted hash from which the number of rounds used should be extracted.
   */
  export function getRounds (encrypted: string): number;
}

export = bcrypt;
