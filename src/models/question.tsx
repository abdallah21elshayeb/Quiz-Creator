import Answer from "./answer";

interface Question {
    id: number | null;
    text: string;
    feedback_true: string;
    feedback_false: string;
    answers: Answer[];
  }

  export default Question;