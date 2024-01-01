import { For } from "solid-js";

const connections = {
  github: "https://github.com/erhant",
  linkedin: "https://www.linkedin.com/in/erhan-tezcan/",
  twitter: "https://www.x.com/0xerhant/",
};

export default function CommandHelp() {
  return (
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
  );
}
