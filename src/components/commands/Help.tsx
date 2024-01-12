import { For, Match } from "solid-js";
import Prefix from "../Prefix";

const helps = {
  about: "Who am I, what do I do & where to find me.",
  projects: "All of my projects.",
  papers: "My publications.",
  theme: "List all themes, or change the theme.",
  cv: "Open my resume.",
  clear: "Clear the terminal.",
  date: "Print todays date & time.",
  echo: "Talk to yourself.",
  help: "Print this help message.",
};

export default function CommandHelp(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "help"}>
      <Prefix cmd={props.cmd} />
      <div class="my-4">
        <For each={Object.entries(helps)}>
          {(help) => (
            <p>
              {"\t"}
              <span class="text-accent font-bold">{help[0].padEnd(10, " ")}</span>
              {help[1]}
            </p>
          )}
        </For>
      </div>
    </Match>
  );
}
