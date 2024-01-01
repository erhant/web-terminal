import { For } from "solid-js";
import { themes } from "../../constants";

export default function CommandTheme() {
  return (
    <pre>
      <code>{"To change the theme, type:\n\n\ttheme <name>\n\n"}</code>
      <code>{"Available themes:\n"}</code>
      <For each={themes}>{(theme) => <code>{"\n\t" + theme}</code>}</For>
      {"\n\n"}
    </pre>
  );
}
