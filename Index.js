const Quiz = [
    {
        Question: "Who has the record of 100 Century in International Cricket?",
        a: "MahendraSingh Dhoni",
        b: "Sachin Tendulkar",
        c: "Virat Kohli",
        d: "Rohit Sharma",
        correct: "b"
    },
    {
        Question: "Who has hit the Highest ODI Score ?",
        a: "Martin Guptil",
        b: "Rohit Sharma",
        c: "Virat Kohli",
        d: "Chris Gayle",
        correct: "b"
    },
    {
        Question: "Who has the record of highest numbers of double century in Itl. ODI cricket ?",
        a: "Martin Guptil",
        b: "Sachin Tendulka",
        c: "Virat Kohli",
        d: "Rohit Sharma",
        correct : "d"
    },
    {
        Question: "As a captain Who has all three formats ICC trophies ?",
        a: "MS Dhoni",
        b: "Virat Kohli",
        c: "Kapil Dev",
        d: "Kumar Sangakara",
        correct: "a"
    },
    {
        Question: "Who is Indian team captain in Intl. cricket ? ",
        a: "Rohit Sharma",
        b: "Virat Kohli",
        c: "Ajinkya Rahane",
        d: "Shikhar Dhawan",
        correct: "b"
    }
];

const QUIZ = document.getElementById('QUIZ');
const Answers = document.querySelectorAll('.Answer');
const Question = document.getElementById('Question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const NextBtn = document.getElementById('next');

let currentQuiz = 0;
let score = 0;

LoadQuiz();

function LoadQuiz() {
    DeSelected();
    const currentQuizData = Quiz[currentQuiz];
    Question.innerText = currentQuizData.Question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}



function DeSelected() {
    Answers.forEach((answers) => {
        answers.checked = false;
    })
}

function GetSelected() {
    let answer = undefined;

    Answers.forEach((answers) => {
        if (answers.checked) {
            answer = answers.id;
        }
    })

    return answer;
}

NextBtn.addEventListener("click", () => {
    const answer = GetSelected();

    if (answer) {
        if (answer === Quiz[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz>Quiz.length-2){
            NextBtn.innerHTML = `<button id="submit">Submit</button>`
        }
        if (currentQuiz < Quiz.length) {
            LoadQuiz();
        }
        else {
            QUIZ.innerHTML = `<h2>You Scored ${score}/${Quiz.length}</h2>
            <button onclick="location.reload()" class="Button" style="height: 30px;
            color: white;
            font-weight: 500;
            border: 2px solid rgb(7, 15, 128);
            background-color: rgb(14, 27, 218);
            cursor: pointer;
            width: 100%;
            border-radius: 0px 0px 2px 2px;">Reload</button>`
        }
    }
    else {
        alert('Please select an answer');
    }
})