<script>
	import FeedbackList from '@/components/FeedbackList.svelte'
	import { data } from '@/assets/data'
	import FeedbackStats from './components/FeedbackStats.svelte'
	import FeedbackForm from './components/FeedbackForm.svelte'

	let feedback = [...data]

	/** @type {(e: CustomEvent<number>) => void} */
	function deleteFeedback(e) {
		const itemId = e.detail
		feedback = feedback.filter((f) => f.id !== itemId)
	}

	$: count = feedback.length
	$: average = feedback.reduce((pre, curr) => pre + curr.rating, 0) / feedback.length

	/** @type {(e: CustomEvent) => void} */
	function createFeedback(e) {
		const newFeedback = e.detail

		feedback = [...feedback, newFeedback]
	}
</script>

<main class="container">
	<FeedbackForm on:add-feedback={createFeedback} />
	<FeedbackStats {count} {average} />
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
