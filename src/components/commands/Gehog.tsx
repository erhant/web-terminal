import { Match } from "solid-js";
import Prefix from "../Prefix";

const map = {
  "🦔": "🐿",
  "🐿": "🦔",
};

export default function CommandGehog(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "🦔" || props.cmd === "🐿"}>
      <Prefix cmd={props.cmd} />
      <code>{map[props.cmd as keyof typeof map]}</code>
      <br />
    </Match>
  );
}
