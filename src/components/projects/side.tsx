import { ProjectType } from "./types";

export const sideProjects: ProjectType[] = [
  {
    title: "MoonMath Solutions",
    githubURL: "https://github.com/erhant/moonmath",
    content: () => <p>Solutions to a few exercises & code examples for MoontMath Manual to zkSNARKs.</p>,
    tech: ["markdown", "sage"],
  },
  {
    title: "Cryptography Notes",
    githubURL: "https://crypto.erhant.me",
    webURL: "https://crypto.erhant.me",
    content: () => <p>Various notes related to cryptography, number theory and zero-knowledge.</p>,
    tech: ["typescript", "markdown", "next"],
  },
  {
    title: "Blockchatting",
    githubURL: "https://github.com/erhant/blockchatting",
    demoURL: "https://blockchatting.vercel.app/",
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
    title: "Simple Block-Explorer",
    githubURL: "https://github.com/erhant/simple-blockexplorer",
    demoURL: "https://simple-blockexplorer-erhant.vercel.app/",
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
    title: "NextJS + Web3 Starter",
    githubURL: "https://github.com/erhant/nextjs-web3-starter",
    demoURL: "https://nextjs-web3-starter-erhant.vercel.app/",
    content: () => (
      <p>
        A TypeScript template repository to create decentralized applications using{" "}
        <a href="https://nextjs.org/">NextJS</a> and <a href="https://hardhat.org/">Hardhat</a>! Has a simple counter
        contract and an ERC-20 token contract example in it.
      </p>
    ),
    tech: ["typescript", "next", "solidity"],
  },

  {
    title: "Orca Livecoding",
    githubURL: "https://github.com/erhant/orca-livecoding",
    tech: [],
    content: () => (
      <p>
        Of the various music livecoding programs, I particularly developed an interest in{" "}
        <a href="https://hundredrabbits.itch.io/orca">Orca</a>, which is a 2-dimensional esoteric programming language.
        There I've created a fretboard and tab-reader, or musical scale player with it.
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
        My submissions to <a href="https://oeis.org/">Online Encyclopedia of Integer Sequences</a>. One submission in
        particular has really cool plots which resemble a burning castle, hence the name.
      </p>
    ),
  },
  {
    title: "Musical Plots",
    githubURL: "https://github.com/erhant/musical-plots",
    tech: ["python"],
    content: () => (
      <p>
        Using <code>matplotlib</code>, I have drawn a{" "}
        <a href="https://en.wikipedia.org/wiki/Circle_of_fifths">Circle of Fifths</a>, a fretboard, and a piano
        keyboard; with highlights on certain notes based on a scale or chord.
      </p>
    ),
  },
];
