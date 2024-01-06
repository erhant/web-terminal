import type { ProjectType } from "../types";

export const hackathonProjects: ProjectType[] = [
  {
    title: "zkAargon",
    githubURL: "https://github.com/erhant/zkAargon",
    webURL: "https://devfolio.co/projects/zkaargon-59e4",
    content: () => (
      <span>
        Aargon is a puzzle game from 1998, where the player completes objectives using lasers and mirrors in a 2D grid.
        zkAargon is a port of this game using o1js, to prove a solution to a puzzle without revealing how.
        <span class="font-bold"> Won Mina Protocol's zkGaming prize.</span>
      </span>
    ),
    tech: ["typescript"],
  },
  {
    title: "Shamiroquai",
    githubURL: "https://github.com/irfanbozkurt/shamirs-secret-sharing",
    webURL: "https://devpost.com/software/shamir-s-secret-sharing-in-leo",
    content: () => (
      <p>
        Shamir's Secret Sharing algorithm using Aleo's Leo language.
        <span class="font-bold"> Won 2 bounties.</span>
      </p>
    ),
    tech: ["leo", "typescript"],
  },
  {
    title: "huffd1",
    githubURL: "https://github.com/erhant/huffd1",
    content: () => (
      <span>
        An NFT with Huff, using polynomials over a finite field with order largest prime address, instead of mappings.
        <span class="font-bold"> Got 5th place.</span>
      </span>
    ),
    tech: ["solidity", "huff"],
  },
];
