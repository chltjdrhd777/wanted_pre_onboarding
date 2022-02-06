export default function debounce(debounceFn, delay = 300) {
  let debounceId;

  return function () {
    if (debounceId) {
      clearTimeout(debounceId);
    }

    debounceId = setTimeout(debounceFn, delay);
  };
}
