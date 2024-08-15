<script>
	import FeebackItem from './FeebackItem.svelte'
	import { FeedbackStore } from '@/stores'
</script>

{#each $FeedbackStore as fb (fb.id)}
	<FeebackItem item={fb} on:delete-feedback />
{/each}
