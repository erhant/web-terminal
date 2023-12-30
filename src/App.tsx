import { For, Match, Show, Switch, createSignal } from "solid-js";
import { themeChange } from "theme-change";

import Prefix from "./components/Prefix";
import CommandBanner from "./components/commands/Banner";
import CommandHelp from "./components/commands/Help";

export default function App() {
  const [commands, setCommands] = createSignal<string[]>(["banner"]);
  const [history, setHistory] = createSignal<string[]>([""]);
  let inputRef: HTMLInputElement;

  return (
    <main
      class="flex flex-col h-screen"
      // focus on input line wherever you click
      onClick={() => inputRef.focus()}
    >
      <div class="mx-2 mt-2 whitespace-pre-wrap">
        {/* history */}
        <For each={commands()}>
          {(command) => (
            <pre>
              {/* command input printed again */}
              <Prefix path="~" fail={false} />
              <code>{command + "\n"}</code>

              {/* command output */}
              <Switch fallback={<code>{"unknown command: " + command + "\n"}</code>}>
                <Match when={command === ""}>
                  <>{/* do nothing */}</>
                </Match>

                <Match when={command === "banner"}>
                  <CommandBanner />
                </Match>

                <Match when={command === "help"}>
                  <CommandHelp />
                </Match>
              </Switch>
            </pre>
          )}
        </For>

        {/* prompt */}
        <div class="flex">
          <Prefix path="~" />
          <input
            // @ts-expect-error
            ref={inputRef}
            type="text"
            id="main-input"
            class="bg-inherit flex-grow outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const cmd = e.currentTarget.value.toLowerCase();

                setHistory((cur) => [...cur, cmd]);

                if (cmd === "clear") {
                  setCommands([]);
                } else if (cmd === "exit") {
                  window.close();
                } else if (cmd === "cv") {
                  window.open("/cv.pdf", "_blank");
                } else {
                  setCommands((cur) => [...cur, cmd]);
                }

                e.currentTarget.value = "";
              }
            }}
          />
        </div>
      </div>
    </main>
  );
}
