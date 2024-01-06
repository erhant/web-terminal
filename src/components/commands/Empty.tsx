import { Match } from "solid-js";
import Prefix from "../Prefix";

export default function CommandEmpty(props: { cmd: string }) {
  return (
    <Match when={props.cmd === ""}>
      <Prefix cmd={props.cmd} />
    </Match>
  );
}
