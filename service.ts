import { MarkdownPostProcessorContext } from 'obsidian';
import { quiz } from './model';


const sourceToQuiz = (source: string): quiz => {
	const [question, answer] = source.split('---').map(s => s.trim());
	return {
		question: question,
		answer: answer
	};
}

export async function processQuizBlock(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
	const quiz = sourceToQuiz(source);

	const questionDiv = el.createDiv();
	questionDiv.setText(quiz.question);
	// add css class to questionDiv
	questionDiv.addClass('quiz-question');

	const answerDiv = el.createDiv({ cls: 'hidden-answer' });
	answerDiv.setText(quiz.answer);
	// add css class to answerDiv
	answerDiv.addClass('quiz-answer');

	// add css class to container element
	el.addClass('quiz-container');

	const toggleButton = el.createEl('button', { text: 'Show Answer' });

	toggleButton.addEventListener('click', () => {
		if (answerDiv.classList.contains('hidden-answer')) {
			// initialView to answerView
			answerDiv.classList.remove('hidden-answer');
			toggleButton.innerText = 'Hide Answer';
		} else {
			// answerView to initialView
			answerDiv.classList.add('hidden-answer');
			toggleButton.innerText = 'Show Answer';
		}
	});
}
