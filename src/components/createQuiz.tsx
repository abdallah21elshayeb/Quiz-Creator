import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addQuiz } from '../store/quizSlice';

const CreateQuiz = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Form state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [questions, setQuestions] = useState([
        { text: '', answers: [{ text: '', is_true: false }], feedback_true: '', feedback_false: '' },
    ]);

    // Handle adding new questions
    const addQuestion = () => {
        setQuestions([
            ...questions,
            { text: '', answers: [{ text: '', is_true: false }], feedback_true: '', feedback_false: '' },
        ]);
    };

    // Handle adding answers
    const addAnswer = (qIndex: number) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers.push({ text: '', is_true: false });
        setQuestions(newQuestions);
    };

    // Handle form submission
    const handleSubmit = () => {
        const newQuiz = {
            id: null,
            title,
            description,
            url,
            score: null,
            questions_answers: questions,
        };
        dispatch(addQuiz(newQuiz));
        navigate('/');
    };

    return (
        <div className="p-8 border border-green-400 m-6 rounded-lg">
            <h1 className="text-2xl text-center font-bold mb-4">Create New Quiz</h1>
            <input
                type="text"
                placeholder="Quiz Title"
                className="border p-2 mb-4 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Quiz Description"
                className="border p-2 mb-4 w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="YouTube URL"
                className="border p-2 mb-4 w-full"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            {questions.map((q, qIndex) => (
                <div key={qIndex} className="border p-4 mb-4">
                    <input
                        type="text"
                        placeholder="Question Text"
                        className="border p-2 mb-4 w-full"
                        value={q.text}
                        onChange={(e) =>
                            setQuestions(
                                questions.map((question, i) =>
                                    i === qIndex ? { ...question, text: e.target.value } : question,
                                ),
                            )
                        }
                    />
                    {q.answers.map((answer, aIndex) => (
                        <div key={aIndex} className="flex items-center mb-2">
                            <input
                                type="text"
                                placeholder="Answer Text"
                                className="border p-2 w-full"
                                value={answer.text}
                                onChange={(e) =>
                                    setQuestions(
                                        questions.map((question, i) =>
                                            i === qIndex
                                                ? {
                                                    ...question,
                                                    answers: question.answers.map((a, j) =>
                                                        j === aIndex ? { ...a, text: e.target.value } : a,
                                                    ),
                                                }
                                                : question,
                                        ),
                                    )
                                }
                            />
                            <input
                                type="checkbox"
                                checked={answer.is_true}
                                className="ml-2"
                                onChange={(e) =>
                                    setQuestions(
                                        questions.map((question, i) =>
                                            i === qIndex
                                                ? {
                                                    ...question,
                                                    answers: question.answers.map((a, j) =>
                                                        j === aIndex ? { ...a, is_true: e.target.checked } : a,
                                                    ),
                                                }
                                                : question,
                                        ),
                                    )
                                }
                            />
                        </div>
                    ))}
                    <button
                        onClick={() => addAnswer(qIndex)}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Add Answer
                    </button>
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="True Feedback"
                            className="border p-2 mb-4 w-full"
                            value={q.feedback_true}
                            onChange={(e) =>
                                setQuestions(
                                    questions.map((question, i) =>
                                        i === qIndex ? { ...question, feedback_true: e.target.value } : question,
                                    ),
                                )
                            }
                        />
                        <input
                            type="text"
                            placeholder="False Feedback"
                            className="border p-2 w-full"
                            value={q.feedback_false}
                            onChange={(e) =>
                                setQuestions(
                                    questions.map((question, i) =>
                                        i === qIndex ? { ...question, feedback_false: e.target.value } : question,
                                    ),
                                )
                            }
                        />
                    </div>
                </div>
            ))}
            <div className='flex justify-center mt-16'>
                <button onClick={addQuestion} className="bg-blue-500 text-white px-4 py-2 mx-2 rounded">
                    Add Question
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Save Quiz
                </button>
            </div>
        </div>
    );
};

export default CreateQuiz;
