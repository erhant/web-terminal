import { For, Match } from "solid-js";
import { publications } from "../../contents/projects";
import Prefix from "../Prefix";

export default function CommandPapers(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "papers"}>
      <Prefix cmd={props.cmd} />
      <div>
        <For each={publications}>
          {(paper) => (
            <p class="text-wrap">
              {"\n"}
              <span class="text-primary font-medium">{paper.title}</span>
              {" ("}
              <a class="link link-hover text-success" href={paper.githubURL}>
                code
              </a>

              {" | "}
              <a class="link link-hover text-info" href={paper.paperURL}>
                paper
              </a>
              {")"}
              {paper.content()}
            </p>
          )}
        </For>
        <br />
      </div>
    </Match>
  );
}
