export class Utils {
  static stringInterpolate(
    template: string,
    params?: Record<string, string>
  ): string {
    if (!template) {
      throw new Error('Template is not specified.');
    }

    if (!params) {
      return template;
    }

    return template.replace(
      /\{([a-zA-Z]+)\}/,
      (fullMatch, match) => params[match]
    );
  }

  static arrayEqual<T>(arr1: T[], arr2: T[]): boolean {
    if (!arr1) {
      throw new Error('Arr1 is not specified.');
    }

    if (!arr2) {
      throw new Error('Arr2 is not specified.');
    }

    if (arr1.length !== arr2.length) {
      return false;
    }

    return arr1.every((value, index) => value === arr2[index]);
  }

  static deepCopy<T>(source: T): T {
    return JSON.parse(JSON.stringify(source));
  }
}
