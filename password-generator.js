const generator = require('generate-password');

const password = generator.generate({
    length: 8,
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
});


console.log("generated password: ", password);

