const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor() {
    // Initialization if needed
}

encrypt(message, key) {
    if (!message || !key) {
        throw new Error('Both message and key are required.');
    }

    let encrypted = '';
    const keyLength = key.length;
    for (let i = 0, j = 0; i < message.length; i++) {
        const char = message[i];
        if (char.match(/[a-zA-Z]/)) {
            const shift = key[j % keyLength].toLowerCase().charCodeAt(0) - 97;
            const base = char.charCodeAt(0) < 97 ? 65 : 97;
            encrypted += String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
            j++;
        } else {
            encrypted += char;
        }
    }

    return encrypted.toUpperCase();
}

decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
        throw new Error('Both encrypted message and key are required.');
    }

    let decrypted = '';
    const keyLength = key.length;
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        if (char.match(/[a-zA-Z]/)) {
            const shift = key[j % keyLength].toLowerCase().charCodeAt(0) - 97;
            const base = char.charCodeAt(0) < 97 ? 65 : 97;
            decrypted += String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
            j++;
        } else {
            decrypted += char;
        }
    }

    return decrypted.toUpperCase();
}
}

module.exports = {
  VigenereCipheringMachine
};
