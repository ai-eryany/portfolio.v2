import type { JSX, ComponentProps, JSXElementConstructor } from "react";

export type Props<
  Type extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
  Type2 = object
> = ComponentProps<Type> & Type2;

export type SafePick<T, K extends keyof NonNullable<T>> = NonNullable<T>[K];
