import { For, Switch, createEffect, createSignal, onMount } from "solid-js";
import { themeChange } from "theme-change";

import { themes } from "./constants";

import Input from "./components/Input";
import Unknown from "./components/Unknown";

import CommandAbout from "./components/commands/About";
import CommandHelp from "./components/commands/Help";
import CommandProjects from "./components/commands/Projects";
import CommandPapers from "./components/commands/Papers";
import CommandTheme from "./components/commands/Theme";
import CommandEmpty from "./components/commands/Empty";
import CommandCV from "./components/commands/CV";
import CommandDate from "./components/commands/Date";
import CommandGehog from "./components/commands/Gehog";

export default function App() {
  const [commands, setCommands] = createSignal<string[]>(["help"]);
  const [theme, setTheme] = createSignal(localStorage.getItem("theme") || "dark");

  // see: https://stackoverflow.com/questions/76671464/how-to-use-ref-in-solid-js
  let inputRef: HTMLInputElement | undefined;
  let mainRef: HTMLElement | undefined;

  // update theme
  createEffect(() => {
    localStorage.setItem("theme", theme());

    if (mainRef) {
      mainRef.setAttribute("data-theme", theme());
    }
  });

  // https://github.com/saadeghi/theme-change?tab=readme-ov-file#js
  onMount(async () => {
    themeChange();
  });

  function processCommand(cmd: string) {
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
      onClick={() => inputRef && inputRef.focus()}
      ref={(ref) => (mainRef = ref)}
    >
      <div class="p-2 whitespace-pre-wrap text-wrap">
        {/* print commands */}
        <For each={commands()}>
          {(command) => (
            <Switch fallback={<Unknown cmd={command} />}>
              <CommandEmpty cmd={command} />
              <CommandHelp cmd={command} />
              <CommandAbout cmd={command} />
              <CommandTheme cmd={command} />
              <CommandCV cmd={command} />
              <CommandProjects cmd={command} />
              <CommandPapers cmd={command} />
              <CommandDate cmd={command} />
              <CommandGehog cmd={command} />
            </Switch>
          )}
        </For>

        {/* prompt */}
        <Input handleCommand={processCommand} takeInputRef={(ref) => (inputRef = ref)} />
      </div>
    </main>
  );
}
