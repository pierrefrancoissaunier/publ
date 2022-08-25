function encrypt(message){
    let crypted;
    for (let i = 0; i < message.length; i++) {
        crypted = crypted + String.fromCharCode(message.charCodeAt(i)+1);
    }

    return(crypted)
};