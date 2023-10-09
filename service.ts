import { MarkdownPostProcessorContext } from 'obsidian';
import { quiz } from './model';
import QuizComponent from './QuizComponent.svelte';


const sourceToQuiz = (source: string): quiz => {
	const [question, answer] = source.split('---').map(s => s.trim());
	return {
		question: question,
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
