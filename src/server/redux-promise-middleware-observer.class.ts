export class ReduxPromiseMiddlewareObserver {
  get enabled(): boolean {
    return this._enabled;
  }

  constructor() {
    this.init();
  }

  start() {
    this._enabled = true;
  }

  stop() {
    this._enabled = false;
  }

  registerPromise(promise: Promise<any>) {
    if (this.enabled) {
      this._promises.push(promise);
    }
  }

  waitForAllPromisesDone(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.handlePromises(resolve, reject);
    });
  }

  private _enabled: boolean;

  private _promises: Promise<any>[];

  private handlePromises(resolve: () => void, reject: (err: any) => void) {
    if (this._promises.length > 0) {
      const promises = this._promises.splice(0, this._promises.length);

      Promise.all(promises)
        .then(() => {
          if (this._promises.length > 0) {
            this.handlePromises(resolve, reject);
          } else {
            resolve();
          }
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      resolve();
    }
  }

  private init() {
    this._enabled = false;
    this._promises = [];
  }
}
