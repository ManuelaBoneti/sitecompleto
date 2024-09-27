function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    })
}

function playSound(){
    let clickSound = document.getElementById('selecionarsom');
    clickSound.play();
}

function submitQuiz() {

    let correctAnswers = {
        q1: "B",
        q2: "C",
        q3: "A",
        q4: "A",
        q5: "C",
        q6: "B",
        q7: "B",
        q8: "C",
        q9: "B",
        q10:"C",

    // add as respostas corretas para as outras perguntas

    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers){
        let userAnswer = form.elements[key].value
        if(userAnswer === correctAnswers[key]){
            score++;

        }
    }
     
    let result = document.getElementById('result');
    
    // tocar som se todas as respostas estiverem corretas
    if(score ===107) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
        result.innerHTML = `Você acertou ${score} de 10 perguntas`;
    }
    else{
        let failSound = document.getElementById('perdeusom');
        failSound.play();
        result.innerHTML = `Você acertou ${score} de 10 perguntas`;
    }

    document.getElementById('enviar').setAttribute('disabled', true);
    document.getElementById('reenviar').removeAttribute('disabled');

}

function replayQuiz() {
    score = 0;
    document.getElementById('enviar').removeAttribute('disabled');
    document.getElementById('reenviar').setAttribute('disabled', true);
    result.innerHTML = " ";
    document.getElementById('quiz-form').reset();
    let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
 
}