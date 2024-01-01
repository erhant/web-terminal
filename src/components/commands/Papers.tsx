import { For } from "solid-js";
import { publications } from "../projects";

export default function CommandPapers() {
  return (
    <pre>
      <For each={publications}>
        {(paper) => (
          <code class="text-wrap">
            {"\n"}
            <span class="text-primary font-medium">{paper.title}</span>
            {" ("}
            <a class="link link-hover text-success" href={paper.paperURL}>
              paper
            </a>
            {" | "}
            <a class="link link-hover text-error" href={paper.githubURL}>
              code
            </a>
            {")"}
            {paper.content()}
          </code>
        )}
      </For>
      {"\n\n"}
    </pre>
  );
}
