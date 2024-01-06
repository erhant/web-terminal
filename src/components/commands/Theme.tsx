import { Match, Show } from "solid-js";
import { themes } from "../../constants";
import Prefix from "../Prefix";

export default function CommandTheme(props: { cmd: string }) {
  const selection = () => props.cmd.slice("theme ".length);

  return (
    <Match when={props.cmd === "theme" || themes.includes(selection())}>
      <Prefix cmd={props.cmd} />
      <Show when={props.cmd === "theme"}>
        <pre>
          <code>{"To change the theme, type:\n\n\ttheme <name>\n\n"}</code>
          <code>{"Available themes:"}</code>
          <br />
          <code class="text-secondary font-bold text-wrap">
            {themes.join(" ")}
          </code>
          {"\n\n"}
        </pre>
      </Show>
    </Match>
  );
}
