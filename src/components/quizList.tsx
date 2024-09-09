import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';

const QuizList = () => {
    const quizzes = useSelector((state: RootState) => state.quiz.quizzes);
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <h1 className="text-2xl text-center font-bold mb-4">All Quizzes</h1>
            <button
                onClick={() => navigate('/create')}
                className="bg-blue-500 text-white px-4 py-2 rounded "
            >
                Add New Quiz
            </button>
            <ul className="mt-4">
                {quizzes.map((quiz) => (
                    <li key={quiz.id} className="border p-2 my-2">
                        <h2 className='font-bold text-orange-500'>{quiz.title}</h2>
                        <p>{quiz.description}</p>
                        <button
                            onClick={() => navigate(`/edit/${quiz.id}`)}
                            className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizList;
