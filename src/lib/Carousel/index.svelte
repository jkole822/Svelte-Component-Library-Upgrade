<script lang="ts">
	// Packages
	import { onMount } from "svelte";

	// Components
	import Button from "../Button/index.svelte";

	// Styles
	import {
		ButtonContainerStyles,
		ButtonIconStyles,
		ButtonStyles,
		CardContentStyles,
		CardStyles,
		CarouselStyles,
		ContainerStyles,
		DescriptionStyles,
		HeadingStyles
	} from "./styles";

	// Utils
	import { useMediaQuery } from "../../utils";

	// Types
	import { ButtonVariantsEnum } from "../Button/types";
	import type { Props } from "./types";

	// Props
	let { className = "", items }: Props = $props();

	// Hooks
	const isTwoExtraSmall = useMediaQuery("(min-width: 384px)");
	const isSmall = useMediaQuery("(min-width: 640px)");
	const isLarge = useMediaQuery("(min-width: 1024px)");

	// State
	let cards = $state([...items]);

	// Derived State
	let displacement = $derived($isLarge ? 220 : $isSmall ? 170 : 140);

	// Helpers
	const handleNext = () => {
		cards = [...cards.slice(1), cards[0]];
	};

	const handlePrevious = () => {
		cards = [cards[items.length - 1], ...cards.slice(0, -1)];
	};

	// Life Cycle
	onMount(() => {
		const ids = items.map(item => item.id);
		const hasDuplicates = ids.length !== new Set(ids).size;
		if (hasDuplicates) {
			console.warn("Duplicate item IDs detected in carousel items.");
		}
	});
</script>

<div aria-roledescription="carousel" class={[className, ContainerStyles]}>
	<div class={CarouselStyles}>
		{#each cards as { cta, description, id, image, title }, index (id)}
			<div
				aria-hidden={index !== 1}
				class={CardStyles}
				style:background-image="url('{image.src}')"
				style:left={index >= 2
					? `calc(${$isTwoExtraSmall ? "50%" : "20px"} + ${(index - 2) * displacement}px)`
					: 0}
			>
				<div class={CardContentStyles}>
					<h2 class={HeadingStyles}>{title}</h2>
					<p class={DescriptionStyles}>{description}</p>
					{#if cta}
						<Button {...cta} variant={ButtonVariantsEnum.Outline}>
							{cta.title}
						</Button>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<div class={ButtonContainerStyles}>
		<Button
			ariaLabel="Previous slide"
			className={ButtonStyles}
			onclick={handlePrevious}
			variant={ButtonVariantsEnum.Fill}
		>
			<i aria-hidden="true" class={ButtonIconStyles}></i>
		</Button>
		<Button
			ariaLabel="Next slide"
			className={ButtonStyles}
			onclick={handleNext}
			variant={ButtonVariantsEnum.Fill}
		>
			<i aria-hidden="true" class={[ButtonIconStyles, "rotate-180"]}></i>
		</Button>
	</div>
</div>
