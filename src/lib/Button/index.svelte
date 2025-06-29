<script lang="ts">
	// Components
	import StarVector from "./starVector.svelte";

	// Styles
	import {
		FillButtonStyles,
		LineOneButtonStyles,
		LineTwoButtonStyles,
		OutlineButtonStyles
	} from "./styles";

	// Types
	import { ButtonVariantsEnum } from "./types";
	import type { Props } from "./types";

	// Props
	let {
		ariaControls,
		ariaExpanded,
		ariaHaspopup,
		ariaHidden,
		ariaLabel,
		children,
		className = "",
		href,
		onclick,
		showBottomGlow = false,
		target = "_self",
		type = "button",
		variant = ButtonVariantsEnum.Fill,
		...rest
	}: Props = $props();

	// State
	let active = $state(false);

	// Derived State
	const element = $derived(!!href ? "a" : "button");
	const isFillButton = $derived(variant === ButtonVariantsEnum.Fill);
	const rel = $derived(
		!!href && target === "_blank" ? "noreferrer" : undefined
	);
	const variantStyles = $derived(
		isFillButton
			? FillButtonStyles({ active })
			: variant === ButtonVariantsEnum.Outline
				? OutlineButtonStyles({ showBottomGlow })
				: variant === ButtonVariantsEnum.LineOne
					? LineOneButtonStyles
					: variant === ButtonVariantsEnum.LineTwo
						? LineTwoButtonStyles
						: ""
	);

	// Helpers
	const handleClick = () => {
		active = true;
		if (!!onclick) onclick();
	};

	// Effects
	$effect(() => {
		if (active) {
			setTimeout(() => {
				active = false;
			}, 1000);
		}
	});
</script>

<svelte:element
	this={element}
	{...rest}
	aria-controls={ariaControls}
	aria-expanded={ariaExpanded}
	aria-haspopup={ariaHaspopup}
	aria-hidden={ariaHidden}
	aria-label={ariaLabel}
	class={[className, variantStyles]}
	onclick={handleClick}
	{href}
	{rel}
	{target}
	{type}
>
	{@render children()}
	{#if isFillButton}
		<div>
			{#each Array.from({ length: 6 }) as _, index (index)}
				<div class={`star star-${index}`}>
					<StarVector />
				</div>
			{/each}
		</div>
	{/if}
</svelte:element>
