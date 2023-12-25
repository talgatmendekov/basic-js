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
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        if (!message || !key) {
            throw new Error('Both message and key are required.');
        }

        let encrypted = '';
        for (let i = 0, j = 0; i < message.length; i++) {
            const char = message[i];
            if (char.match(/[a-zA-Z]/)) {
                const shift = key[j % key.length].toLowerCase().charCodeAt(0) - 97;
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
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }

        if (!encryptedMessage || !key || key.length === 0) {
            throw new Error('Both encrypted message and key are required.');
        }

        let decrypted = '';
        for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
            const char = encryptedMessage[i];
            if (char.match(/[a-zA-Z]/)) {
                const shift = key[j % key.length].toLowerCase().charCodeAt(0) - 97;
                const base = char.charCodeAt(0) < 97 ? 65 : 97;
                decrypted += String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
                j++;
            } else {
                decrypted += char;
            }
        }
        return decrypted;
    }
    doubleReverseEncrypt(message, key) {
    if (!message || !key) {
        throw new Error('Both message and key are required.');
    }

    // Step 1: Reverse the message
    let reversed = message.split('').reverse().join('');

    // Step 2: Encrypt the reversed message
    let encrypted = this.encrypt(reversed, key);

    // Step 3: Reverse the encrypted result
    let doubleReversed = encrypted.split('').reverse().join('');

    return doubleReversed.toUpperCase();
}

doubleReverseDecrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
        throw new Error('Both encrypted message and key are required.');
    }

    // Step 1: Reverse the encrypted message
    let reversed = encryptedMessage.split('').reverse().join('');

    // Step 2: Decrypt the reversed encrypted message
    let decrypted = this.decrypt(reversed, key);

    // Step 3: Reverse the decrypted result
    let doubleReversed = decrypted.split('').reverse().join('');

    return doubleReversed;
}
}




module.exports = {
    VigenereCipheringMachine
};
