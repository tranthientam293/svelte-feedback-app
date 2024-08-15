<script>
	export let /** @type {number} */ count
	export let /** @type {number} */ average
</script>

<div class="feedback-stats">
	<h4>{count} Reviews</h4>
	<h4>Ratings Average: {average}</h4>
</div>

<style>
	.feedback-stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
