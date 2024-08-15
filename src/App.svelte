<script>
	import FeedbackList from '@/components/FeedbackList.svelte'
	import { data } from '@/assets/data'

	let feedback = [...data]

	/** @type {(e: CustomEvent<number>) => void} */
	function deleteFeedback(e) {
		const itemId = e.detail
		feedback = feedback.filter((f) => f.id !== itemId)
		console.log(e)
	}
</script>

<main class="container">
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
