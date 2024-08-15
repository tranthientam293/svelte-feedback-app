<script>
	import FeebackItem from './FeebackItem.svelte'
	export let feedback = []
</script>

{#each feedback as fb (fb.id)}
	<FeebackItem item={fb} on:delete-feedback />
{/each}
