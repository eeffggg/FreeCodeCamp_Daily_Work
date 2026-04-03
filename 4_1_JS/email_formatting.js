let email = "abc@abc.com";
const maskEmail = email => email.replace(email.slice(1,email.indexOf('@')-1), '*'.repeat(email.indexOf('@')-2));

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));

