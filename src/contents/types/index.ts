import type { JSXElement } from "solid-js";

export type ProjectType = {
  title: string;
  githubURL: string;
  paperURL?: string;
  webURL?: string;
  npm?: string;
  tech: string[];
  content: () => JSXElement;
};
