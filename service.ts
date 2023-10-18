import { MarkdownPostProcessorContext } from 'obsidian';
import { sourceToQuiz, sourceToMCQ } from './parser';
import QuizComponent from './QuizComponent.svelte';
import MultipleChoiceQuestion from './MultipleChoiceQuestion.svelte';

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
