import { MarkdownPostProcessorContext } from 'obsidian';
import { quiz, mcq } from './model';
import QuizComponent from './QuizComponent.svelte';
import MultipleChoiceQuestion from './MultipleChoiceQuestion.svelte';


const sourceToQuiz = (source: string): quiz => {
	const [question, answer] = source.split('---').map(s => s.trim());
	return {
		question: question,
		answer: answer
	};
}

const sourceToMCQ = (source: string): mcq => {
	const [question, choices, answer] = source.split('---').map(s => s.trim());
	return {
		question: question,
		choices: choices.split(',').map(s => s.trim()),
		answer: answer
	};
}

export async function processQuizBlock(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
	const quiz = sourceToQuiz(source);
	new QuizComponent({
		target: el,
		props: {
			question: quiz.question,
			answer: quiz.answer,
		}
	});
}


export async function processMCQBlock(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
	const mcq = sourceToMCQ(source);
	new MultipleChoiceQuestion({
		target: el,
		props: {
			question: mcq.question,
			choices: mcq.choices,
			answer: mcq.answer,
		}
	});
}
