export function debounce(fn: Function, ms: number, immediate?: Boolean) {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  return function (this: void) {
    let args = arguments;

    let later = function (this: void) {
      timeout = undefined;
      if (!immediate) fn.apply(this, args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, ms);
    if (callNow) fn.apply(this, args);
  };
}
