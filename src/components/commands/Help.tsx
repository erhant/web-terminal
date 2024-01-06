import { For, Match } from "solid-js";
import Prefix from "../Prefix";

const helps = {
  about: "About me.",
  clear: "Clear the terminal",
  help: "Print this help message.",
  date: "Print todays date & time.",
  cv: "Open my resume.",
  projects: "All of my projects.",
  papers: "My publications.",
  theme: "List all themes & change theme.",
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
