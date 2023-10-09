<script lang="ts">
	export let question: string;
	export let answer: string;
	let shouldShowAnswer = false;	
	const toggle = () => {
		shouldShowAnswer = !shouldShowAnswer;
	};
</script>

<div class="quiz-container">
	<div class="quiz-question">{question}</div>
	{#if shouldShowAnswer}
		<div class="quiz-answer">{answer}</div>
	{/if}
	<button class="quiz-button" on:click={toggle} >
		{shouldShowAnswer ? 'Hide Answer' : 'shouldShowAnswer Answer'}
	</button>
</div>

<style>
</style>
