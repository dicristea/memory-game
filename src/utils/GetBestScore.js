export default function fetchBestScore(localStorageKey) {
  let localBestScore;

  if (window.localStorage.getItem(localStorageKey) !== null) {
    localBestScore = JSON.parse(window.localStorage.getItem(localStorageKey));
  } else localBestScore = 0;

  return localBestScore;
}
