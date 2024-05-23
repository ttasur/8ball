const answers = ["Yes", "No", "Looks fishy", "Maybe"];

function shakeBall() {
    const ball = document.getElementById('ball');
    const answerElem = document.getElementById('answer');

    // Shake animation
    ball.style.animation = 'shake 0.5s';

    // After the animation, display the answer
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        answerElem.innerText = answer;
        ball.style.animation = '';
    }, 500);
}
