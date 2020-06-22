declare let __PRELOADED_STATE__: any;

export class SSR {
  static preventRequests: boolean;

  static get isOnClient(): boolean {
    return !SSR.isOnServer;
  }

  static get isOnServer(): boolean {
    return typeof window === 'undefined';
  }

  static get isBeingHydrated(): boolean {
    return (
      typeof __PRELOADED_STATE__ !== 'undefined' && __PRELOADED_STATE__ !== null
    );
  }

  static getPreloadedState() {
    if (SSR.isOnServer) {
      throw new Error('Preloaded state can be loaded only on client side.');
    }

    return __PRELOADED_STATE__;
  }

  static deletePreloadedState() {
    if (SSR.isOnServer) {
      throw new Error('Preloaded state can be deleted only on client side.');
    }

    __PRELOADED_STATE__ = null;
  }
}
