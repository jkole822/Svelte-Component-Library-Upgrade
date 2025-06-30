import { Checkbox } from "@ark-ui/svelte/checkbox";
import type { PropsFn } from "@ark-ui/svelte/dist/types";
import type { Snippet } from "svelte";
import type { ValidationState } from "../../types";

export interface Props {
	asChild?: Snippet<[PropsFn<"div">]>;
	checked?: boolean;
	className?: string;
	defaultChecked?: boolean;
	description?: string;
	disabled?: boolean;
	errorMessage?: string;
	form?: string;
	name: string;
	onCheckedChange?: (details: Checkbox.CheckedChangeDetails) => void;
	readOnly?: boolean;
	required?: boolean;
	validationState?: ValidationState;
	value?: string;
	withField?: boolean;
}
