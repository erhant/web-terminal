import { Match } from "solid-js";
import Prefix from "../Prefix";

export default function CommandDate(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "date"}>
      <Prefix cmd={props.cmd} />
      <code>{Date()}</code>
      <br />
    </Match>
  );
}
