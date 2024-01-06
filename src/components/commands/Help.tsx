import { For, Match } from "solid-js";
import { allCommands } from "../../constants";
import Prefix from "../Prefix";

const helps: Record<Exclude<(typeof allCommands)[number], "">, string> = {
  about: "About me.",
  clear: "Clear the terminal",
  help: "Print this help message.",
  cv: "Open resume (curriculum vitae).",
  projects: "All of my projects.",
  papers: "My publications.",
  theme: "List all themes & change theme.",
  connect: "Connect with me.",
};

export default function CommandHelp(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "help"}>
      <Prefix cmd={props.cmd} />
      <pre>
        <For each={Object.entries(helps)}>
          {(help) => (
            <code>
              {"\n\t"}
              <span class="text-accent font-bold">{help[0].padEnd(10, " ")}</span>
              {help[1]}
            </code>
          )}
        </For>
        {"\n\n\n"}
      </pre>
    </Match>
  );
}
