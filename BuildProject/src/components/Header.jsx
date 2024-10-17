import quizlogo from '../assets/quiz-logo.png';

export default function Header(){
    return (
        <header>
            <img src={quizlogo} alt="react quiz logo"></img>
            <h1 >
                ReactQuiz
            </h1>
        </header>

    );
}