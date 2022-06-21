function encrypt(text, n) {
  if (n <= 0 || text == null){
    return text
  } else {
    let encrypted = '';
    
    for (let i = 1; i < text.length; i+=2){
      encrypted += text.charAt(i)
    }
    
    for (let i = 0; i < text.length; i+=2){
      encrypted += text.charAt(i)
    }
    
    return encrypt(encrypted, n-1)
    
  }
}

function decrypt(encryptedText, n) {
  if (n<=0 || encryptedText ==null){
    return encryptedText
  } else {
    let decrypted = ''
    let even;
    
    if (encryptedText.length % 2 ==0){
      even = encryptedText.length/2
      for (let i = 0; i < even; i++){
        decrypted += `${encryptedText.charAt(i+even)}${encryptedText.charAt(i)}`
      } 
    } else {
      even = Math.floor(encryptedText.length/2)
      for (let i = 0; i < even; i++) {
        decrypted += `${encryptedText.charAt(i+even)}${encryptedText.charAt(i)}`
      }
      decrypted += encryptedText.charAt(encryptedText.length-1)
    }
    return decrypt(decrypted, n-1)
  }
}