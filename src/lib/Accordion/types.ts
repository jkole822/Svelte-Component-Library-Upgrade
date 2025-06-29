import { Accordion } from "@ark-ui/svelte";
import type { HeadingLevels } from "../../types";
import type { PropsFn } from "@ark-ui/svelte/dist/types";
import type { Snippet } from "svelte";

export interface AccordionItem {
  id: string;
  content?: Snippet;
  description?: string;
  disabled?: boolean;
  title: string;
}

export interface Props {
  asChild?: Snippet<[PropsFn<'div'>]>;
  className?: string;
  collapsible?: boolean;
  defaultValue?: string[];
  disabled?: boolean;
  headingLevel: HeadingLevels;
  items: AccordionItem[];
  lazyMount?: boolean;
  value?: string[];
  multiple?: boolean;
  onFocusChange?: (details: Accordion.FocusChangeDetails) => void;
  onValueChange?: (details: Accordion.ValueChangeDetails) => void;
  unmountOnExit?: boolean;
}
