import type { ProjectType } from "../types";

export const schoolProjects: ProjectType[] = [
  {
    title: "Hashgraph",
    githubURL: "https://github.com/erhant/hashgraph",
    content: () => (
      <p>
        An implementation of Hedera Hashgraph, written in Go language. It also has a simulation of transactions, with
        hashgraph live-display.
      </p>
    ),
    tech: ["go", "javascript"],
  },
  {
    title: "Profile Matching",
    githubURL: "https://github.com/erhant/profile-matching",
    content: () => (
      <p>
        With a small dataset of Facebook and Twitter users, we matched profiles using machine learning. Note that the
        profiles did not necessarily have the same username!
      </p>
    ),
    tech: ["python"],
  },
  {
    title: "EOPL Scheme",
    githubURL: "https://github.com/erhant/eopl-scheme",
    content: () => (
      <p>
        I was a teaching assistant for Programming Language Concepts in Koç University. In this repo, I have the
        materials that I had prepared for the class, such as projects and problem sessions. The content is based on the{" "}
        <a href="https://eopl3.com/">Essentials of Programming Languages</a> book.
      </p>
    ),
    tech: ["racket", "scheme"],
  },
  {
    title: "Enigma Machine",
    githubURL: "https://github.com/erhant/enigma-machine",
    content: () => (
      <p>
        A console based Enigma Machine with custom rotor settings, eavesdropping simulation and chatting simulation over
        a shared encrypted file.
      </p>
    ),
    tech: ["typescript"],
  },
];
