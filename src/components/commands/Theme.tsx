import { Match, Show } from "solid-js";
import { themes } from "../../constants";
import Prefix from "../Prefix";

export default function CommandTheme(props: { cmd: string }) {
  const selection = () => props.cmd.slice("theme ".length);

  return (
    <Match when={props.cmd === "theme" || themes.includes(selection())}>
      <Prefix cmd={props.cmd} />
      <Show when={props.cmd === "theme"}>
        <div>
          <p>{"To change the theme, type:\n\n\ttheme <name>\n\n"}</p>
          <p>Available themes:</p>
          <br />
          <p class="text-accent font-bold">{themes.join(" ")}</p>
        </div>
        <br />
      </Show>
    </Match>
  );
}
