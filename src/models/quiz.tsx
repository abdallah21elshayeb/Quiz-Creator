import Question from "./question";

interface Quiz {
    id: number | null;
    title: string;
    description: string;
    score: number | null;
    url: string;
    questions_answers: Question[];
}

export default Quiz;