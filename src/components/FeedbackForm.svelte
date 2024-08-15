<script>
	import Button from './Button.svelte'
	import { v4 as uuidv4 } from 'uuid'
	import Card from './Card.svelte'
	import RatingSelect from './RatingSelect.svelte'
	import { FeedbackStore } from '@/stores'

	let text = ''
	let message = ''
	let btnDisabled = true
	let rating = '10'
	const min = 10

	function handleInput() {
		if (text.trim().length <= min) {
			message = `Text must be at least ${min} characters`
			btnDisabled = true
		} else {
			message = null
			btnDisabled = false
		}
	}

	/**
	 * @param {CustomEvent<string>} e
	 * */
	function handleSelect(e) {
		rating = e.detail
	}

	function handleSubmit() {
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating: Number(rating),
				id: uuidv4()
			}

			FeedbackStore.update((prev) => [...prev, newFeedback])
			text = ''
			btnDisabled = true
		}
	}
</script>

<Card>
	<header>
		<h2>How would you rate your service with us?</h2>
	</header>
	<form on:submit|preventDefault={handleSubmit}>
		<RatingSelect on:rating-select={handleSelect} />
		<div class="input-group">
			<input
				type="text"
				on:input={handleInput}
				bind:value={text}
				placeholder="Tell us something that keeps you coming back"
			/>
			<Button disabled={btnDisabled} type="submit">Send</Button>
		</div>
		{#if message}
			<div class="message">
				{message}
			</div>
		{/if}
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}

	header h2 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}

	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 15px;
	}

	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}

	input:focus {
		outline: none;
	}

	.message {
		padding-top: 10px;
		text-align: center;
		color: rebeccapurple;
	}
</style>
