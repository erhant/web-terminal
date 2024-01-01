import { For, JSXElement, Match, Switch, createEffect, createSignal, onMount } from "solid-js";
import { themeChange } from "theme-change";

import Prefix from "./components/Prefix";
import { allCommands, basicCommands, silentCommands, themes } from "./constants";

// command-specific components
import CommandAbout from "./components/commands/About";
import CommandWelcome from "./components/commands/Welcome";
import CommandHelp from "./components/commands/Help";
import CommandConnect from "./components/commands/Connect";
import CommandProjects from "./components/commands/Projects";
import CommandPapers from "./components/commands/Papers";
import CommandTheme from "./components/commands/Theme";

const basics: Record<(typeof basicCommands)[number], () => JSXElement> = {
  about: CommandAbout,
  welcome: CommandWelcome,
  help: CommandHelp,
  connect: CommandConnect,
  projects: CommandProjects,
  papers: CommandPapers,
  theme: CommandTheme,
};

export default function App() {
  const [commands, setCommands] = createSignal<string[]>(["welcome"]);
  const [theme, setTheme] = createSignal(localStorage.getItem("theme") || "dark");
  let inputRef: HTMLInputElement;
  let mainRef: HTMLElement;

  // update theme
  createEffect(() => {
    localStorage.setItem("theme", theme());
    mainRef.setAttribute("data-theme", theme());
  });

  // https://github.com/saadeghi/theme-change?tab=readme-ov-file#js
  onMount(async () => {
    themeChange();
  });

  function processCommand(cmd: string) {
    cmd = cmd.trim();
    setCommands((cur) => [...cur, cmd]);

    if (cmd === "clear") {
      setCommands([]);
    } else if (cmd === "cv") {
      window.open("/cv.pdf", "_blank");
    } else if (cmd.startsWith("theme")) {
      const newTheme = cmd.slice("theme ".length);
      if (theme() !== newTheme && themes.includes(newTheme)) {
        setTheme(newTheme);
      }
    }
  }

  return (
    <main
      // reverse so that it always scrolls to the bottom
      class="flex flex-col-reverse h-screen overflow-scroll"
      // focus on input line wherever you click
      onClick={() => inputRef.focus()}
      // @ts-expect-error
      ref={mainRef}
    >
      <div class="p-2 whitespace-pre-wrap text-wrap">
        {/* print commands */}
        <For each={commands()}>
          {(command) => (
            <pre>
              {/* command input */}
              <Prefix path="~" fail={!allCommands.includes(command as any)} />
              <code>{command + "\n"}</code>

              {/* command output */}
              <Switch fallback={<code>{"unknown command: " + command + "\n"}</code>}>
                {/* silent commands */}
                <Match when={silentCommands.includes(command as (typeof silentCommands)[number])}>
                  <>{/* do nothing */}</>
                </Match>

                <Match when={command.startsWith("theme") && themes.includes(command.slice("theme ".length))}>
                  <>{/* do nothing on theme change */}</>
                </Match>

                {/* basic commands */}
                <For each={Object.entries(basics)}>
                  {(basicCommand) => <Match when={command === basicCommand[0]}>{basicCommand[1]()}</Match>}
                </For>
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
                processCommand(e.currentTarget.value.toLowerCase());
                e.currentTarget.value = "";
              }
            }}
          />
        </div>
      </div>
    </main>
  );
}
