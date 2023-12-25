const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


function getSeason(date) {

    
    if (date === undefined || date === null) {
        console.log('Input is undefined or null');
        return 'Unable to determine the time of year!';
    }
    const getTimestamp = () => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()).getTime();
    const proxyDate = {
        getMonth: () => new Date(getTimestamp()).getMonth(),
        getFullYear: () => new Date(getTimestamp()).getFullYear(),
        getDate: () => new Date(getTimestamp()).getDate(),
        getHours: () => new Date(getTimestamp()).getHours(),
        getMinutes: () => new Date(getTimestamp()).getMinutes(),
        getSeconds: () => new Date(getTimestamp()).getSeconds(),
        getMilliseconds: () => new Date(getTimestamp()).getMilliseconds(),
        getDay: () => new Date(getTimestamp()).getDay(),
        [Symbol.toStringTag]: 'Date'
    };

    try {
        const month = proxyDate.getMonth() + 1;  // Adjusting for JavaScript's 0-indexed months

        if (month >= 3 && month <= 5) {
            return 'spring';
        } else if (month >= 6 && month <= 8) {
            return 'summer';
        } else if (month >= 9 && month <= 11) {
            return 'autumn';
        } else {
            return 'winter';
        }
    } catch (error) {
        throw new Error("Invalid date!");
    }
  }

module.exports = {
  getSeason
};