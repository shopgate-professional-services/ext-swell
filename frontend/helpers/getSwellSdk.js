import config from '../config';

const { swellSdkUrl } = config;
const SWELL_SDK_SCRIPT_ID = 'swell-sdk-script';

/**
 * Mount sdk javascript
 * @param {string} sdkSrc Javascript src
 */
const mountScript = (sdkSrc) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = sdkSrc;
  script.id = SWELL_SDK_SCRIPT_ID;
  const parent = document.getElementsByTagName('head')[0];
  parent.appendChild(script);
};

/**
 * Resolve or reject promise when script mounts
 * @param {Function} resolve Promise resolve
 * @param {Function} reject Promise reject
 * @param {number} iteration Number of recursive calls
 */
const checkScript = (resolve, reject, iteration = 0) => {
  console.warn('checkScript');
  if (window.spapi && window.swellAPI) {
    resolve({ spapi: window.spapi, swellAPI: window.swellAPI });
    return;
  }

  if (iteration > 15) {
    reject(new Error('SDK failed to mount'));
    return;
  }

  setTimeout(() => checkScript(resolve, reject, iteration + 1), 20);
};

/**
 * @type {Promise}
 */
let promise;

/**
 * Get swell javascript sdk
 * @return {Promise}
 */
export default () => {
  if (!promise) {
    mountScript(swellSdkUrl);
    promise = new Promise((resolve, reject) => {
      checkScript(resolve, reject);
    });
  }

  return promise;
};
