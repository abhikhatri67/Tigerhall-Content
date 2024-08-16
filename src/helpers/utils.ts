/**
 * Inserts /resize/244x120 after the hostname in a given URL.
 * @param uri - The original URL as a string.
 * @returns The modified URL with /resize/244x120 inserted.
 */
export function addResizeToUri(uri: string, height: number = 244, width: number = 120): string {
  try {
    const parsedUrl = new URL(uri);
    const hostname = parsedUrl.origin;
    const path = parsedUrl.pathname;

    const modifiedUrl = `${hostname}/resize/${height}x${width}${path}`;
    return modifiedUrl;
  } catch (error) {
    console.error("Invalid URL:", error);
    return uri; // Return the original URL or placeholder URL.
  }
}

type DebounceFunction = (...args: unknown[]) => void;

export function debounce(func: DebounceFunction, wait: number): DebounceFunction {
  let timeoutId: number | null = null;

  return function (this: any, ...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
