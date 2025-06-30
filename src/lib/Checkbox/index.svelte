<script lang="ts">
	// Packages
	import { Checkbox } from "@ark-ui/svelte/checkbox";
	import { Field } from "@ark-ui/svelte/field";

	// Styles
	import {
		ContainerStyles,
		InputStyles,
		LabelStyles,
		PathStyles,
		VectorStyles
	} from "./styles";
	import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

	// Types
	import { ValidationStateEnum } from "../../types";
	import type { Props } from "./types";

	// Props
	const {
		className = "",
		description,
		disabled,
		errorMessage,
		name,
		readOnly,
		required,
		validationState,
		withField,
		...rest
	}: Props = $props();
</script>

{#snippet children()}
	<Checkbox.Root {...rest} class={InputStyles} {disabled}>
		<svg class={VectorStyles} viewBox="0 0 64 64" height="2em" width="2em">
			<path
				class={PathStyles}
				d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
				pathLength="575.0541381835938"
			></path>
		</svg>
		<Checkbox.HiddenInput />
		<Checkbox.Label class={LabelStyles}>{name}</Checkbox.Label>
	</Checkbox.Root>
	{#if withField}
		<div class="ml-2 mt-1">
			{#if description}
				<Field.HelperText class={DescriptionStyles}>
					{description}
				</Field.HelperText>
			{/if}
			{#if errorMessage}
				<Field.ErrorText class={ErrorMessageStyles}>
					{errorMessage}
				</Field.ErrorText>
			{/if}
		</div>
	{/if}
{/snippet}

{#if withField}
	<Field.Root
		class={[className, ContainerStyles]}
		invalid={validationState === ValidationStateEnum.Invalid}
		{disabled}
		{readOnly}
		{required}
	>
		{@render children()}
	</Field.Root>
{:else}
	<div class={[className, ContainerStyles]}>
		{@render children()}
	</div>
{/if}
