import { Match } from "solid-js";
import Prefix from "../Prefix";

export default function CommandAbout(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "about"}>
      <Prefix cmd={props.cmd} />
      <pre>
        <code>{`
I'm a Full-Stack Blockchain Developer from Istanbul, Turkey. 
I build & engineer computer software; driven by a thirst for knowledge and with respect to standards, security and scalability.

I main TypeScript most of the time with Express and React, and I have occasionally worked with Solidity and Go.
As for zero-knowledge applications, I make use of the lovely Circom.
`}</code>
      </pre>
    </Match>
  );
}
