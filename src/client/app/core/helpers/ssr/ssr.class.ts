export class SSR {
  static preventRequests: boolean;

  static get isOnClient(): boolean {
    return !SSR.isOnServer;
  }

  static get isOnServer(): boolean {
    return typeof window === 'undefined';
  }
}
