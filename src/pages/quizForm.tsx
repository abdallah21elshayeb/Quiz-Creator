import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuiz } from '../store/quizSlice';

const QuizForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(addQuiz({
            id: null,
            title,
            description,
            score: null,
            url,
            questions_answers: [],
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block mb-2 p-2 border"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block mb-2 p-2 border"
            />
            <input
                type="text"
                placeholder="YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="block mb-2 p-2 border"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Add Quiz
            </button>
        </form>
    );
};

export default QuizForm;
