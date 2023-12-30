import { For } from "solid-js";

const commands = [
  ["about", "Details about me."],
  ["clear", "Clear terminal."],
  ["banner", "Display banner."],
];

export default function CommandHelp() {
  return (
    <pre>
      <For each={commands}>
        {(command) => (
          <code>
            {"\n\t"}
            <span class="text-accent font-bold">{command[0]}</span>
            {"\t" + command[1]}
          </code>
        )}
      </For>
      {"\n\n"}
    </pre>
  );
}
