import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Quiz from '../models/quiz';

interface QuizState {
    quizzes: Quiz[];
}

const initialState: QuizState = {
    quizzes: [],
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        addQuiz: (state, action: PayloadAction<Quiz>) => {
            const newQuiz = { ...action.payload, id: Date.now() };
            state.quizzes.push(newQuiz);
        },
        editQuiz: (state, action: PayloadAction<Quiz>) => {
            const { id } = action.payload;
            const index = state.quizzes.findIndex(quiz => quiz.id === id);
            if (index !== -1) {
                state.quizzes[index] = action.payload;
            }
        },
        deleteQuiz: (state, action: PayloadAction<number>) => {
            state.quizzes = state.quizzes.filter(quiz => quiz.id !== action.payload);
        },
    },
});

export const { addQuiz, editQuiz, deleteQuiz } = quizSlice.actions;
export default quizSlice.reducer;