const SWELL_POPUP_ID = 'swell-popup';
const ERROR_MESSAGE = 'Could not find swell popup';

/**
 * @type {Promise}
 */
let promise;

/**
 * Resolve or reject promise when swell popup
 * @param {Function} resolve Promise resolve
 * @param {Function} reject Promise reject
 * @param {number} iteration Number of recursive calls
 */
const findSwellPopup = (resolve, reject, iteration = 0) => {
  if (iteration > 30) {
    reject(new Error(ERROR_MESSAGE));
    return;
  }

  const swellPopup = document.getElementById(SWELL_POPUP_ID);

  if (!swellPopup) {
    setTimeout(() => findSwellPopup(resolve, reject, iteration + 1), 200);
    return;
  }

  const swellPopupDoc = swellPopup.contentDocument;

  if (swellPopupDoc) {
    resolve(swellPopupDoc);
    return;
  }

  reject(new Error(ERROR_MESSAGE));
};

export default () => {
  if (!promise) {
    promise = new Promise((resolve, reject) => {
      findSwellPopup(resolve, reject);
    });
  }

  return promise;
};
