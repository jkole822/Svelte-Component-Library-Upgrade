<script lang="ts">
	// Components
	import Checkbox from "./index.svelte";

	// Styles
	import { ParagraphStyles, SubHeadingStyles } from "../../styles";

	// Types
	import type { Props } from "./types";

	// Props
	let props: Props = $props();

	// State
	let checked = $state(false);
</script>

<Checkbox {...props} {checked} onCheckedChange={details => checked = details.checked} />
<p class={SubHeadingStyles}>Binding Check</p>
<p class={ParagraphStyles}>{checked ? "Checked" : "Not Checked"}</p>
