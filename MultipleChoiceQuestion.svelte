<script lang="ts">
	export let question: string;
	export let answer: string;
	export let choices: string[];
	let selectedChoice: string | null = null;
	
	let handleChoiceChange = (event) => {
		const target = event.target;
		if (target.checked) {
			selectedChoice = target.value;
		} else {
			selectedChoice = null;
		}
	};
</script>

<div class="quiz-container">
	<!-- Question -->
	<div class="quiz-question">{question}</div>
	<!-- Choices -->
	{#each choices as choice}
		<div>
			<input
				type="radio"
				id={choice}
				name="choices"
				value={choice}
				on:change={handleChoiceChange}
			/>
			<label for={choice}>{choice}</label>
		</div>
	{/each}
	<!-- Answer -->
	{#if selectedChoice !== null && selectedChoice !== undefined}
		{#if selectedChoice === answer}
			<div class="quiz-answer">Correct!</div>
		{:else}
			<div class="quiz-answer">Wrong!</div>
		{/if}
	{/if}
</div>

<style>
</style>
