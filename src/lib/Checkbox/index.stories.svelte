<script module>
	// Packages
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { faker } from "@faker-js/faker";

	// Components
	import Checkbox from "./story.svelte";

	// Types
	import { ValidationStateEnum } from "../../types";

	const { Story } = defineMeta({
		title: "Checkbox",
		component: Checkbox,
		tags: ["autodocs"],
		args: {
			description: faker.lorem.sentence(),
			disabled: false,
			errorMessage: faker.lorem.sentence(),
			name: faker.lorem.word(),
			required: false,
			value: "on"
		},
		argTypes: {
			asChild: {
				control: "boolean",
				description: "Renders the component as a child element."
			},
			checked: {
				control: "boolean",
				description: "The controlled checked state."
			},
			className: {
				control: "text",
				description: "Class that is applied to top level element."
			},
			defaultChecked: {
				control: "boolean",
				description: "The initial checked state when rendered."
			},
			description: {
				control: "text",
				description:
					"Field description displayed when `withField` is `true`."
			},
			disabled: {
				control: "boolean",
				description: "Disables the checkbox."
			},
			errorMessage: {
				control: "text",
				description:
					"Field error message displayed when `withField` is true and `validationState` is `invalid`."
			},
			form: {
				control: "text",
				description: "The id of the form that the checkbox belongs to."
			},
			name: {
				control: "text",
				description: "Name attribute for form submission."
			},
			readOnly: {
				control: "boolean",
				description: "Whether the checkbox is read-only."
			},
			required: {
				control: "boolean",
				description: "Marks the checkbox as required."
			},
			validationState: {
				control: "select",
				description: "Indicates whether field is `valid` or `invalid`",
				options: [
					ValidationStateEnum.Valid,
					ValidationStateEnum.Invalid
				]
			},
			value: {
				control: "text",
				description: "Value attribute for form submission."
			},
			withField: {
				control: "boolean",
				description:
					"Use label, description, and error message with validation state."
			}
		}
	});
</script>

<Story name="Basic" />

<Story args={{ withField: true }} name="WithField" />
