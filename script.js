const quizzes = {
  html: [
    { q: 'What does HTML stand for?', answers: ['a) Hyper Text Markup Language','b) High Text Machine Language','c) Hyperlinks Text Mark Language'], correct: 'a) Hyper Text Markup Language' },
    { q: 'Which tag is used for headings?', answers: ['a) <h1>','b) <p>','c) <div>'], correct: 'a) <h1>' },
    { q: 'How do you create a link?', answers: ['a) <a>','b) <link>','c) <href>'], correct: 'a) <a>' },
    { q: 'Which tag is for a paragraph?', answers: ['a) <p>','b) <h1>','c) <div>'], correct: 'a) <p>' },
    { q: 'What does <a> do?', answers: ['a) Creates a link','b) Adds an image','c) Creates a table'], correct: 'a) Creates a link' }
  ],
  css: [
    { q: 'What does CSS stand for?', answers: ['a) Cascading Style Sheets','b) Colorful Style Sheets','c) Creative Style Syntax'], correct: 'a) Cascading Style Sheets' },
    { q: 'Which property changes text color?', answers: ['a) color','b) font-color','c) text-color'], correct: 'a) color' },
    { q: 'Which property changes font size?', answers: ['a) font-size','b) text-size','c) size-font'], correct: 'a) font-size' },
    { q: 'Which property sets outer spacing?', answers: ['a) margin','b) padding','c) border'], correct: 'a) margin' },
    { q: 'How do you make text bold?', answers: ['a) font-weight: bold','b) text-style: bold','c) font-style: bold'], correct: 'a) font-weight: bold' }
  ],
  js: [
    { q: 'What does JS stand for?', answers: ['a) JavaScript','b) JustScript','c) JavaSystem'], correct: 'a) JavaScript' },
    { q: 'How do you declare a variable?', answers: ['a) let x = 5;','b) var x = 5;','c) Both are correct'], correct: 'c) Both are correct' },
    { q: 'How do you write a comment?', answers: ['a) // Comment','b) /* Comment */','c) Both are correct'], correct: 'c) Both are correct' },
    { q: 'What is a function?', answers: ['a) A reusable block of code','b) A variable','c) A loop'], correct: 'a) A reusable block of code' },
    { q: 'How do you create an array?', answers: ['a) let arr = [1,2,3];','b) let arr = {1,2,3};','c) let arr = (1,2,3);'], correct: 'a) let arr = [1,2,3];' }
  ]
};

const userQuiz = document.querySelectorAll('.quizBtn');
const quizContainer = document.getElementById('quizContainer');
const questionList = document.getElementById('questionList');
const userResult = document.getElementById('userResult');

let score = 0;
let currentQuestion = 0;
let selectedQuiz = null;

userQuiz.forEach(function(btn){
    btn.addEventListener('click', function(){
        quizContainer.classList.add('visible');
        selectedQuiz = this.dataset.quiz;
        score = 0;
        currentQuestion = 0;
        showQuestion();
    })
});

function showResult(){
    questionList.innerHTML = "";
    userResult.innerHTML = `Score: ${score} / ${quizzes[selectedQuiz].length}`;
    questionList.appendChild(userResult);
}

function showQuestion(){
    questionList.innerHTML = "";
    const current = quizzes[selectedQuiz][currentQuestion];

    const qHead = document.createElement('h4');
    qHead.classList.add('question-text');
    qHead.textContent = current.q;
    questionList.appendChild(qHead);

    current.answers.forEach(function(answer) {
        const btn = document.createElement('button');
        btn.classList.add("answer-choices");
        btn.textContent = answer;
        questionList.appendChild(btn);

        btn.addEventListener('click', checkAnswer);
    });
}

function checkAnswer(e){
    const selected = e.target.textContent;
    const correctAnswer = quizzes[selectedQuiz][currentQuestion].correct;
    if (selected === correctAnswer){
        score++;
    } 
    currentQuestion++;
    if (currentQuestion < quizzes[selectedQuiz].length){
        showQuestion();
    } else{
        showResult();
    }
}