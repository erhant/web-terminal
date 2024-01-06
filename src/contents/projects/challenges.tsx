import type { ProjectType } from "../types";

export const challengeProjects: ProjectType[] = [
  {
    title: "Cryptopals",
    githubURL: "https://github.com/erhant/cryptopals",
    content: () => (
      <p>
        <a class="link link-hover" href="https://cryptopals.com/" target="_blank">
          Cryptopals
        </a>{" "}
        challenges using Go.
      </p>
    ),
    tech: ["go"],
  },
  {
    title: "Ethernaut & EVM Puzzles",
    githubURL: "https://github.com/erhant/ethernaut-evm-challenges",
    tech: ["solidity"],
    content: () => (
      <p>
        Solutions to various{" "}
        <a class="link link-hover" href="https://ethernaut.openzeppelin.com/" target="_blank">
          Ethernaut
        </a>{" "}
        & EVM puzzles using Foundry.
      </p>
    ),
  },
  {
    title: "Advent of TypeScript 2023",
    githubURL: "https://github.com/erhant/aot-2023",
    webURL: "https://dev.to/erhant/series/25850",
    tech: ["typescript"],
    content: () => (
      <p>
        Solutions to{" "}
        <a class="link link-hover" href="https://typehero.dev/aot-2023" target="_blank">
          Advent of TypeScript 2023
        </a>
        , with detailed walkthroughs.
      </p>
    ),
  },
];
