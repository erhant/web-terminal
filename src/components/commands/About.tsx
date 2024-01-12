import { For, Match, createMemo, createSignal, onCleanup } from "solid-js";
import Prefix from "../Prefix";

const connections = {
  github: { url: "https://github.com/erhant", label: "erhant" },
  twitter: { url: "https://www.x.com/0xerhant/", label: "0xerhant" },
  linkedin: { url: "https://www.linkedin.com/in/erhan-tezcan/", label: "erhan-tezcan" },
  ethereum: { url: "https://app.ens.domains/erhant.eth", label: "erhant.eth" },
};

const tech =
  ["typescript", "go", "rust", "circom", "solidity", "huff", "react", "solid", "docker", "git", "bash"].join(" - ") +
  " - "; // add to connect end ~ start
const techShowLength = 45;

export default function CommandAbout(props: { cmd: string }) {
  const [idx, setIdx] = createSignal(0);
  const techStr = createMemo(() => {
    const l = idx();
    const r = (idx() + techShowLength) % tech.length;
    if (l < r) {
      return tech.slice(l, r);
    } else {
      return tech.slice(l) + tech.slice(0, r);
    }
  });
  const interval = setInterval(() => setIdx((idx) => (idx + 1) % tech.length), 192);
  onCleanup(() => clearInterval(interval));

  return (
    <Match when={props.cmd === "about"}>
      <Prefix cmd={props.cmd} />
      {/* who dis */}
      <div>
        <br />
        <p>
          I'm a Full-Stack Blockchain Developer from Istanbul, Turkey. I build &amp; engineer computer software; driven
          by a thirst for knowledge and with respect to standards, security and scalability. You can see the tech I make
          use of below.
        </p>
      </div>

      <br />

      {/* tech stack */}
      <div>
        <p class="text-center text-info font-semibold">
          {"<||"}
          {techStr()}
          {"||>"}
        </p>
      </div>

      <br />

      {/* connections */}
      <div>
        <p>You can connect with me at:</p>
        <br />
        <For each={Object.entries(connections)}>
          {(connection) => (
            <p>
              {"\t"}
              <span class="text-primary font-bold">{connection[0].padEnd(10, " ")}</span>
              <a class="link link-hover" href={connection[1].url} target="_blank">
                {connection[1].label}
              </a>
            </p>
          )}
        </For>
      </div>
      <br />
    </Match>
  );
}
