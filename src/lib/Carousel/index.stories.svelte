<script module>
	// Packages
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	// Components
	import Carousel from "./index.svelte";

	const { Story } = defineMeta({
		title: "Carousel",
		component: Carousel,
		tags: ["autodocs"],
		argTypes: {
			className: {
				control: "text",
				description: "Class that is applied to top level element."
			},
			items: {
				control: "object",
				description: "The collection of carousel items."
			}
		}
	});
</script>

<script lang="ts">
	const generateItems = (length: number) =>
		Array.from({ length }).map(() => ({
			cta: {
				href: "#",
				target: "_self" as const,
				title: faker.lorem.word()
			},
			description: faker.lorem.sentence(),
			id: uuid(),
			image: {
				alt: faker.lorem.words(2),
				src: faker.image.url({ height: 900, width: 1200 })
			},
			title: faker.lorem.words(3)
		}));
</script>

<Story args={{ items: generateItems(10) }} name="Basic" />

<Story
	args={{
		className: "h-screen",
		items: generateItems(10)
	}}
	name="FullScreenHeight"
/>
