import { For, Match } from "solid-js";
import Prefix from "../Prefix";

const connections = {
  github: "https://github.com/erhant",
  twitter: "https://www.x.com/0xerhant/",
  linkedin: "https://www.linkedin.com/in/erhan-tezcan/",
};

export default function CommandHelp(props: { cmd: string }) {
  return (
    <Match when={props.cmd === "connect"}>
      <Prefix cmd={props.cmd} />
      <pre>
        <For each={Object.entries(connections)}>
          {(connection) => (
            <code>
              {"\n\t"}
              <span class="text-primary font-bold">{connection[0].padEnd(10, " ")}</span>
              <a class="link link-hover" href={connection[1]} target="_blank">
                {connection[1]}
              </a>
            </code>
          )}
        </For>
        {"\n\n\n"}
      </pre>
    </Match>
  );
}
