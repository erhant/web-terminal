import { For, Match, Show } from "solid-js";
import { themes } from "../../constants";
import Prefix from "../Prefix";

export default function CommandTheme(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "theme" || themes.includes(props.cmd.slice("theme ".length))}>
      <Prefix cmd={props.cmd} />
      <Show when={props.cmd === "theme"}>
        <pre>
          <code>{"To change the theme, type:\n\n\ttheme <name>\n\n"}</code>
          <code>{"Available themes:\n"}</code>
          <For each={themes}>{(theme) => <code>{"\n\t" + theme}</code>}</For>
          {"\n\n"}
        </pre>
      </Show>
    </Match>
  );
}
