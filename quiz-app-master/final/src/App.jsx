import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'What is the largest planet in our solar system?',
			answerOptions: [
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Jupiter', isCorrect: true },
				{ answerText: 'Saturn', isCorrect: false },
				{ answerText: 'Mars', isCorrect: false },
			],
		},
		{
			questionText: 'Which element has the chemical symbol O?',
			answerOptions: [
				{ answerText: 'Oxygen', isCorrect: true },
				{ answerText: 'Gold', isCorrect: false },
				{ answerText: 'Osmium', isCorrect: false },
				{ answerText: 'Oxide', isCorrect: false },
			],
		},
		{
			questionText: 'Who painted the Mona Lisa?',
			answerOptions: [
				{ answerText: 'Vincent van Gogh', isCorrect: false },
				{ answerText: 'Pablo Picasso', isCorrect: false },
				{ answerText: 'Leonardo da Vinci', isCorrect: true },
				{ answerText: 'Claude Monet', isCorrect: false },
			],
		},
		{
			questionText: 'What is the square root of 64?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: '12', isCorrect: false },
			],
		},
		{
			questionText: 'Which country is known as the Land of the Rising Sun?',
			answerOptions: [
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Japan', isCorrect: true },
				{ answerText: 'Thailand', isCorrect: false },
				{ answerText: 'South Korea', isCorrect: false },
			],
		},
		{
			questionText: 'What is the smallest unit of life?',
			answerOptions: [
				{ answerText: 'Atom', isCorrect: false },
				{ answerText: 'Cell', isCorrect: true },
				{ answerText: 'Molecule', isCorrect: false },
				{ answerText: 'Organism', isCorrect: false },
			],
		},
		{
			questionText: 'What is the fastest land animal?',
			answerOptions: [
				{ answerText: 'Lion', isCorrect: false },
				{ answerText: 'Cheetah', isCorrect: true },
				{ answerText: 'Leopard', isCorrect: false },
				{ answerText: 'Tiger', isCorrect: false },
			],
		}
	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
