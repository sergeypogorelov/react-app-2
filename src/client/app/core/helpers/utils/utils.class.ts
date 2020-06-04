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
      /\{([a-z]+)\}/gs,
      (fullMatch, match) => params[match]
    );
  }
}