import type { ProjectType } from "../types";

export const sideProjects: ProjectType[] = [
  {
    title: "Moonmath",
    githubURL: "https://github.com/erhant/moonmath",
    content: () => <p>Solutions to a few exercises & code examples for MoontMath Manual to zkSNARKs.</p>,
    tech: ["markdown", "sage"],
  },
  {
    title: "Cryptography Notes",
    githubURL: "https://github.com/erhant/crypto-notes",
    webURL: "https://crypto.erhant.me",
    content: () => <p>Various notes related to cryptography, number theory and zkSNARKs.</p>,
    tech: ["markdown"],
  },
  {
    title: "Blockchatting",
    githubURL: "https://github.com/erhant/blockchatting",
    webURL: "https://blockchatting.vercel.app/",
    tech: ["typescript", "next", "react", "solidity"],
    content: () => (
      <p>
        A decentralized chatting application using smart contracts. Users address each other by their wallet addresses,
        but they can use aliases too. Each message is a transaction, which is logged as an EVM event to be queried by
        clients.
      </p>
    ),
  },
  {
    title: "Leet Assistant",
    githubURL: "https://github.com/erhant/leet-assistant",
    webURL: "https://leet-assistant.vercel.app/",
    tech: ["typescript", "solid"],
    content: () => (
      <p>
        A personalized LeetCode assistant, guiding you about problems to solve based on your performance &amp;
        interests.
      </p>
    ),
  },
  {
    title: "Simple Block-Explorer",
    githubURL: "https://github.com/erhant/simple-blockexplorer",
    webURL: "https://simple-blockexplorer-erhant.vercel.app/",
    tech: ["typescript", "next"],
    content: () => (
      <p>
        A simple client-only block-explorer, where you can connect to any public JSON-RPC url and explore it's blocks.
      </p>
    ),
  },

  {
    title: "Flashy Sort",
    githubURL: "https://github.com/erhant/flashy-sort",
    content: () => (
      <p>
        Flashy Sort is a sorting algorithm I had written around my sophomore year, similar to{" "}
        <a href="https://en.wikipedia.org/wiki/Flashsort">Flash Sort</a>. The idea is to find the minimum and maximum
        values in linear time, and then use interpolation to make a rough guess on where the other elements would be if
        the array were to be sorted.
      </p>
    ),
    tech: ["cpp"],
  },
  {
    title: "Diamonds with TypeScript",
    githubURL: "https://github.com/erhant/diamonds-with-typescript",
    tech: ["typescript", "solidity"],
    content: () => (
      <p>
        A reference implementation of <i>EIP-2535: The Diamond Standard</i> using TypeScript and TypeChain.
      </p>
    ),
  },
  {
    title: "Orca Livecoding",
    githubURL: "https://github.com/erhant/orca-livecoding",
    tech: [],
    content: () => (
      <p>
        Of the various music livecoding programs, I particularly developed an interest in{" "}
        <a href="https://hundredrabbits.itch.io/orca" target="_blank" class="link link-hover">
          Orca
        </a>
        , which is a 2-dimensional esoteric programming language. There I've created a fretboard and tab-reader, or
        musical scale player with it.
      </p>
    ),
  },
  {
    title: "Burning Castle",
    githubURL: "https://github.com/erhant/burning_castle",
    webURL: "https://oeis.org/A343275",
    tech: ["python"],
    content: () => (
      <p>
        My submissions to{" "}
        <a href="https://oeis.org/" target="_blank" class="link link-hover">
          Online Encyclopedia of Integer Sequences
        </a>
        . One submission in particular has really cool plots which resemble a burning castle, hence the name.
      </p>
    ),
  },
  {
    title: "Musical Plots",
    githubURL: "https://github.com/erhant/musical-plots",
    tech: ["python"],
    content: () => (
      <p>
        <a href="https://en.wikipedia.org/wiki/Circle_of_fifths">Circle of Fifths</a>, fretboard, and a piano keyboard,
        all with highlights on certain notes based on a scale or chord, using <kbd>matplotlib</kbd>!
      </p>
    ),
  },
];
