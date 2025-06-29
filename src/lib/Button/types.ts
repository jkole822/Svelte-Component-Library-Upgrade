import type { Snippet } from "svelte";

export enum ButtonVariantsEnum {
  Fill = "fill",
  LineOne = "lineOne",
  LineTwo = "lineTwo",
  Outline = "outline",
}

export type ButtonVariants =
  | ButtonVariantsEnum.Fill
  | ButtonVariantsEnum.LineOne
  | ButtonVariantsEnum.LineTwo
  | ButtonVariantsEnum.Outline;

export interface Props {
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaHaspopup?:
    | boolean
    | "dialog"
    | "menu"
    | "grid"
    | "listbox"
    | "tree"
    | "false"
    | "true"
    | undefined;
  ariaHidden?: boolean;
  ariaLabel?: string;
  children: Snippet;
  className?: string;
  disabled?: boolean;
  href?: string;
  id?: string;
  onclick?: () => void;
  showBottomGlow?: boolean;
  tabIndex?: number;
  target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariants;
}
