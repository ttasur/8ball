function getAnswer() {
    let answers = [
        "Yes",
        "No",
        "Maybe",
        "Try again later",
        "Definitely"
    ];
    let randomIndex = Math.floor(Math.random() * answers.length);
    let answer = answers[randomIndex];
    document.getElementById('answer').innerText = answer;
}
