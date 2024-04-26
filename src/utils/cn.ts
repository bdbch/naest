import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: (string | false | undefined)[]) =>
  twMerge(clsx(...classes));
