import { quiz, mcq } from './model';

const sourceToQuiz = (source: string): quiz => {
	const [question, answer] = source.split(/\n-{3,}\n/).map(s => s.trim());
	return {
		question: question,
		answer: answer
	};
}

const sourceToMCQ = (source: string): mcq => {
	const [question, answer, choices] = source.split(/\n-{3,}\n/).map(s => s.trim());
	return {
		question: question,
		choices: choices.split('\n').map(s => s.trim()).filter(s => s.length > 0),
		answer: answer
	};
}

export { sourceToQuiz, sourceToMCQ };
