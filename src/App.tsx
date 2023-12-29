import { For, createSignal } from "solid-js";
import { themeChange } from "theme-change";
import Code from "./components/Code";

import Prefix from "./components/Prefix";

export default function App() {
  const [commands, setCommands] = createSignal<
    [command: string, color: string][]
  >([
    ["Welcome to my page.", "success"],
    ["Enter a prompt below.", "success"],
  ]);

  /**
   * see: https://terminal.satnaing.dev/
   * add commands:
   * - donate
   * -
   */

  function processCommand(command: string) {
    switch (command) {
      case "clear": {
        setCommands([]);
        break;
      }
      case "help": {
        setCommands((cur) => [...cur, ["help\nhelp me", "success"]]);
        break;
      }
      case "🦔": {
        setCommands((cur) => [...cur, ["🦔\ntis", "success"]]);
        break;
      }
      default:
        setCommands((cur) => [...cur, [command, "error"]]);
        break;
    }
  }

  return (
    <main>
      <div class="ml-2 mt-2 whitespace-pre-wrap">
        {/* history */}
        <For each={commands()}>
          {([command, color]) => {
            return (
              <pre>
                {/* <Code color={cmd[1]}>{"> "}</Code> */}
                {/* <code class={textColor()}>{PROMPT}</code> */}
                <Prefix path="~" success={true} />
                <code>{command}</code>
              </pre>
            );
          }}
        </For>

        {/* prompt */}
        <Prefix path="~" success={true} />
        <input
          type="text"
          id="main-input"
          class="bg-inherit outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              processCommand(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </main>
  );
}
