document.addEventListener("DOMContentLoaded", function () {
    let passwordInput = document.getElementById("password");
    let passwordProgress = document.querySelector(".password-progress");
    let text = document.getElementById("text");
    let lockIcon = document.getElementById("lock-icon");

    passwordInput.addEventListener('input', function (event) {
        let password = event.target.value;
        let strength = Math.min(password.length, 12);
        let strengthText = strength <= 4 ? 'Weak' : (strength <= 8 ? 'Medium' : 'Strong');
        let gradientColor = strength <= 4 ? '#ff2c1c' : (strength <= 8 ? '#ff9800' : '#12ff12');
        let bgColor = strength <= 4 ? '#ff2c1c88' : (strength <= 8 ? '#ff980088' : '#12ff1288');

        // Update progress bar
        passwordProgress.style.width = `${strength * 8.33}%`;
        passwordProgress.style.backgroundColor = gradientColor;

        // Update text
        text.textContent = strengthText;
        text.style.color = gradientColor;
        text.classList.remove("fade-in");
        void text.offsetWidth;  // Trigger reflow
        text.classList.add("fade-in");

        // Update input background gradient
        passwordInput.style.background = `linear-gradient(to right, ${gradientColor}, ${bgColor})`;
        passwordInput.style.transition = 'background 0.5s';

        // Add glow effect
        passwordInput.style.boxShadow = `0 0 10px ${gradientColor}`;

        // Update lock icon
        lockIcon.style.fill = gradientColor;

        // Shaking effect for weak password
        if (strength <= 4) {
            passwordInput.classList.add('shake');
            lockIcon.classList.add('shake');
        } else {
            passwordInput.classList.remove('shake');
            lockIcon.classList.remove('shake');
        }
    });
});