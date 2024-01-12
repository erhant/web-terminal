import { Match } from "solid-js";
import Prefix from "../Prefix";

export default function CommandEcho(props: { cmd: string }) {
  return (
    <Match when={props.cmd.startsWith("echo")}>
      <Prefix cmd={props.cmd} />
      <p>{props.cmd.slice("echo ".length)}</p>
    </Match>
  );
}
