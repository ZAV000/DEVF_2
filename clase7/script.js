document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const generateBtn = document.getElementById("generate");
    const copyBtn = document.getElementById("copy");

    function generatePassword(length = 12) {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
    }

    generateBtn.addEventListener("click", function () {
        passwordField.value = generatePassword();
    });

    copyBtn.addEventListener("click", function () {
        if (passwordField.value) {
            navigator.clipboard.writeText(passwordField.value);
            alert("Contraseña copiada al portapapeles");
        }
    });
});
