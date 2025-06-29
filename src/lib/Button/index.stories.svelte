<script module>
	// Packages
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { faker } from "@faker-js/faker";

	// Components
	import Button from "./index.svelte";

	// Styles
	import { IconStyles } from "../../styles";

	// Types
	import { ButtonVariantsEnum } from "./types";

	const { Story } = defineMeta({
		title: "Button",
		component: Button,
		args: {
			disabled: false,
			type: "button",
			variant: ButtonVariantsEnum.Fill
		},
		argTypes: {
			ariaControls: {
				control: "text",
				description:
					"`aria-controls` identifies the element whose contents or presence are controlled by the button."
			},
			ariaExpanded: {
				control: "boolean",
				description:
					"`aria-expanded` indicates the expandable state of the target element."
			},
			ariaHaspopup: {
				control: "select",
				options: [
					"false",
					"true",
					"dialog",
					"menu",
					"grid",
					"listbox",
					"tree"
				],
				description:
					"`aria-haspopup` indicates that the button opens a popup menu or dialog."
			},
			ariaHidden: {
				control: "boolean",
				description:
					"`aria-hidden` indicates whether the element is visible to screen readers."
			},
			ariaLabel: {
				control: "text",
				description: "Provides an accessible label for the button."
			},
			className: {
				control: "text",
				description: "CSS class for styling the button."
			},
			disabled: {
				control: "boolean",
				description: "Disables the button."
			},
			href: {
				control: "text",
				description:
					"Turns the button into a link (renders as `<a>` tag)."
			},
			id: {
				control: "text",
				description: "HTML id for the button element."
			},
			onclick: {
				action: "onclick",
				description: "Callback fired on button click.",
				table: {
					category: "Events"
				}
			},
			showBottomGlow: {
				control: "boolean",
				description:
					"Applies a decorative glow beneath the button when using `outline` variant."
			},
			tabIndex: {
				control: "number",
				description: "Tab index for focus order."
			},
			target: {
				control: "select",
				options: ["_self", "_blank", "_parent", "_top", "_unfencedTop"],
				description:
					"Specifies where to open the linked document when `href` is used."
			},
			type: {
				control: "select",
				options: ["button", "submit", "reset"],
				description: "Button type attribute."
			},
			variant: {
				control: {
					type: "select"
				},
				description: "Visual variant of the button.",
				options: [
					ButtonVariantsEnum.Fill,
					ButtonVariantsEnum.Outline,
					ButtonVariantsEnum.LineOne,
					ButtonVariantsEnum.LineTwo
				]
			}
		}
	});
</script>

{#snippet children()}
	<span class="mr-2">{faker.lorem.word()}</span>
	<i aria-hidden="true" class={IconStyles}></i>
{/snippet}

<Story name="Fill" args={{ children }} />

<Story
	name="Outline"
	args={{ children, variant: ButtonVariantsEnum.Outline }}
/>

<Story
	name="LineOne"
	args={{
		children,
		href: "https://svelte.dev/",
		target: "_self",
		variant: ButtonVariantsEnum.LineOne
	}}
/>

<Story
	name="LineTwo"
	args={{
		children,
		href: "https://svelte.dev/",
		target: "_blank",
		variant: ButtonVariantsEnum.LineOne
	}}
/>
