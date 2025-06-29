<script lang="ts">
	// Components
	import Accordion from "./index.svelte";

	// Styles
	import { ParagraphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	const props: Props = $props();

	// State
	let value = $state<string[] | undefined>();
</script>

<Accordion
	{...props}
	onValueChange={details => (value = details.value)}
	{value}
/>
<p class={SubHeadingStyles}>Binding Check</p>
<p class={ParagraphStyles}>{value}</p>
