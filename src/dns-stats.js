const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let counts = {};

  // Step 1: Count occurrences of each domain and subdomain
  for (let domain of domains) {
    const parts = domain.split('.').reverse();
    let current = '';
    for (let part of parts) {
      current = `${part}${current ? '.' : ''}${current}`;
      counts[current] = (counts[current] || 0) + 1;
    }
  }

  // Step 2: Construct the hierarchical structure with the correct format
  const result = {};
  for (let key in counts) {
    let formattedKey = `.${key.split('.').reverse().join('.')}`;
    result[formattedKey] = counts[key];
  }

  return result;
}

module.exports = {
  getDNSStats
};
