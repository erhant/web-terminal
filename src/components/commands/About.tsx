import { For, Match } from "solid-js";
import Prefix from "../Prefix";

const connections = {
  github: { url: "https://github.com/erhant", label: "erhant" },
  twitter: { url: "https://www.x.com/0xerhant/", label: "0xerhant" },
  linkedin: { url: "https://www.linkedin.com/in/erhan-tezcan/", label: "erhan-tezcan" },
  ethereum: { url: "https://app.ens.domains/erhant.eth", label: "erhant.eth" },
};

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
      <br />
      <div>
        <code>You can connect with me at:</code>
        <br />
        <For each={Object.entries(connections)}>
          {(connection) => (
            <code>
              <br />
              {"\t"}
              <span class="text-primary font-bold">{connection[0].padEnd(10, " ")}</span>
              <a class="link link-hover" href={connection[1].url} target="_blank">
                {connection[1].label}
              </a>
            </code>
          )}
        </For>
      </div>
      <br />
    </Match>
  );
}
