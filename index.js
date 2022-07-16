function getKey(key) {
    var key = document.getElementById("key").value;
    return key;
}
function getPlainText() {
    var plainText = document.getElementById("string").value;
    return plainText;
}
function processKey() {
    var key = getKey();
    key = key.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
    var result = [];
    var temp = '';
    var alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < key.length; i++){
        if(alphabet.indexOf(key[i]) !== -1){
            alphabet = alphabet.replace(key[i], '');
            temp += key[i];
        }
    }
    temp += alphabet;
    var result = [];
    temp = temp.split('');
    while(temp[0]){
        
    }
}
