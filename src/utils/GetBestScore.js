export default function fetchBestScore(localStorageKey) {
  let localBestScore = 0;

  if (window.localStorage.getItem(localStorageKey) !== null) {
    localBestScore = JSON.parse(window.localStorage.getItem(localStorageKey));
  }

  return localBestScore;
}
