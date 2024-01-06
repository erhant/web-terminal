import { Match } from "solid-js";
import Prefix from "../Prefix";

export default function CommandCV(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "cv"}>
      <Prefix cmd={props.cmd} />
    </Match>
  );
}
