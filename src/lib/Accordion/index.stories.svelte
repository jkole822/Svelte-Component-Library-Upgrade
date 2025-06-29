<script module>
	// Components
	import AccordionStory from "./story.svelte";

	// Styles
	import { IconStyles } from "../../styles";

	// Types
	import { HeadingLevelEnum } from "../../types";
	import { defineMeta } from "@storybook/addon-svelte-csf";

	const { Story } = defineMeta({
		title: "Accordion",
		component: AccordionStory,
		tags: ["autodocs"],
		args: {
			collapsible: false,
			disabled: false,
			headingLevel: HeadingLevelEnum.Three,
			lazyMount: false,
			unmountOnExit: false
		},
		argTypes: {
			asChild: {
				control: "boolean",
				description:
					"Whether to render the accordion as a child component (e.g., within a custom wrapper)."
			},
			className: {
				control: "text",
				description:
					"Additional CSS class names to apply to the accordion container."
			},
			collapsible: {
				control: "boolean",
				description:
					"Allow closing all items so that none are expanded."
			},
			defaultValue: {
				control: "object",
				description:
					"The keys of the items that should be expanded by default (uncontrolled mode).",
				table: {
					type: { summary: "string[]" },
					defaultValue: { summary: "[]" }
				}
			},
			disabled: {
				control: "boolean",
				description: "Disable the entire accordion."
			},
			headingLevel: {
				control: "select",
				description:
					"The heading level to use for accessibility (e.g., h2, h3).",
				options: [
					HeadingLevelEnum.One,
					HeadingLevelEnum.Two,
					HeadingLevelEnum.Three,
					HeadingLevelEnum.Four,
					HeadingLevelEnum.Five,
					HeadingLevelEnum.Six
				]
			},
			items: {
				control: "object",
				description:
					"Array of accordion item data including value, trigger, and content.",
				table: {
					type: { summary: "AccordionItem[]" }
				}
			},
			lazyMount: {
				control: "boolean",
				description:
					"Whether to mount the content only when the item is expanded for the first time."
			},
			multiple: {
				control: "boolean",
				description:
					"Allow multiple accordion items to be open at the same time."
			},
			value: {
				control: "object",
				description:
					"The keys of the items that are currently expanded (controlled mode)."
			},
			unmountOnExit: {
				control: "boolean",
				description:
					"Whether to unmount content when the item is collapsed."
			}
		}
	});
</script>

<script lang="ts">
	// Packages
	import { faker } from "@faker-js/faker";

	// Types
	import type { Snippet } from "svelte";

	const generateItems = (length: number, content: Snippet) =>
		Array.from({ length }).map((_, index) => ({
			content,
			description: faker.lorem.sentence(),
			disabled: index === 2,
			id: `item-${index + 1}`,
			title: faker.lorem.words(3)
		}));
</script>

{#snippet content()}
	<span class="mr-2">{faker.lorem.word()}</span>
	<i aria-hidden="true" class={IconStyles}></i>
{/snippet}

<Story
	args={{
		defaultValue: ["item-1"],
		items: generateItems(5, content)
	}}
	name="Single With Default"
/>

<Story
	args={{
		items: generateItems(5, content),
		multiple: true
	}}
	name="Multiple"
/>

<Story
	args={{
		items: generateItems(5, content),
		multiple: true,
		defaultValue: ["item-1", "item-2"]
	}}
	name="Multiple With Default"
/>
