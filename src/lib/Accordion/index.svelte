<script lang="ts">
	// Packages
	import { Accordion } from "@ark-ui/svelte/accordion";
	import { onMount } from "svelte";

	// Styles
	import {
		ButtonStyles,
		ContainerStyles,
		ContentStyles,
		DescriptionStyles,
		HeadingStyles,
		ItemContentStyles,
		SectionStyles
	} from "./styles";

	// Types
	import type { Props } from "./types";

	// Props
	let {
		className = "",
		headingLevel,
		items,
		...rest
	}: Props = $props();

	// Life Cycle
	onMount(() => {
		const ids = items.map(item => item.id);
		const hasDuplicates = ids.length !== new Set(ids).size;
		if (hasDuplicates) {
			console.warn("Duplicate item IDs detected in accordion items.");
		}
	});
</script>

<Accordion.Root {...rest} class={[className, ContainerStyles]}>
	{#each items as item (item.id)}
		<Accordion.Item
			class={SectionStyles}
			disabled={item.disabled}
			value={item.id}
		>
			<Accordion.ItemTrigger class={ButtonStyles}>
				<svelte:element this={headingLevel} class={HeadingStyles}>
					{item.title}
				</svelte:element>
				<Accordion.ItemIndicator>
					<i
						aria-hidden="true"
						class="accordion-trigger-icon fa-solid fa-chevron-down"
					></i>
				</Accordion.ItemIndicator>
			</Accordion.ItemTrigger>
			<Accordion.ItemContent class={ContentStyles}>
				{#if item.description}
					<p class={DescriptionStyles}>
						{item.description}
					</p>
				{/if}
				{#if item.content}
					<div class={ItemContentStyles}>
						{@render item.content()}
					</div>
				{/if}
			</Accordion.ItemContent>
		</Accordion.Item>
	{/each}
</Accordion.Root>
