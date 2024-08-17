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

type DebounceFunction<T extends (...args: any[]) => any> = (...args: Parameters<T>) => void;

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): DebounceFunction<T> {
  let timeoutId: number | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
