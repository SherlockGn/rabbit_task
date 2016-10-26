function byte2char(bytes) {
    var s = "";
    for(var i = 0; i < bytes.length; i++){
        s += String.fromCharCode(bytes[i]);
    }
    return s;
}
/*
var str = 'aThis is a test page. The text is encrpyted by DES. The key is as the same as the password. 这里是中文测试。';
var s = BASE64.encoder(str);
var t = BASE64.decoder(s);
console.log(s);
console.log(t);
console.log(byte2char(t));
*/
var BASE64_MAPPING = [
        'A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X',
        'Y','Z','a','b','c','d','e','f',
        'g','h','i','j','k','l','m','n',
        'o','p','q','r','s','t','u','v',
        'w','x','y','z','0','1','2','3',
        '4','5','6','7','8','9','+','/', ' ', '='
    ];

function chaos() {
    var p = 13;
    var q = 41;
    var s = 7;
    for(var i = 0; i < 100; i++) {
        s = s % BASE64_MAPPING.length;
        var s2 = (s * p + q) % BASE64_MAPPING.length;
        var tp = BASE64_MAPPING[s];
        BASE64_MAPPING[s] = BASE64_MAPPING[s2];
        BASE64_MAPPING[s2] = tp;
        s = s2;
    }
}

chaos();

function findMapIndex(ch) {
    
    for(var i = 0; i < BASE64_MAPPING.length; i++) {
        if(ch === BASE64_MAPPING[i]) return i;
    }
}

function vigenereEncrypt(plain, key) {
    var s = '';
    for(var i = 0; i < plain.length; i++) {
        var p = findMapIndex(plain[i]);
        var q = findMapIndex(key[i % key.length]);
//      console.log("p = " + p + ", q = " + q);
        s += BASE64_MAPPING[(p + q) % BASE64_MAPPING.length]
    }
    return s;
}

function vigenereDecrypt(cipher, key) {
    var s = '';
    for(var i = 0; i < cipher.length; i++) {
        var p = findMapIndex(cipher[i]);
        var q = findMapIndex(key[i % key.length]);
        s += BASE64_MAPPING[(p + BASE64_MAPPING.length - q) % BASE64_MAPPING.length]
    }
    return s;
}

function replaceAll(str, substr1, substr2) {
    return str.replace(new RegExp(substr1, "mg"), substr2);
}

function encryptString(plain, key) {
    var s = BASE64.encoder(plain);
    return replaceAll(vigenereEncrypt(s, key), ' ', '_');
}

function decryptString(cipher, key) {
    var s = vigenereDecrypt(replaceAll(cipher, '_', ' '), key);
    return byte2char(BASE64.decoder(s));
}