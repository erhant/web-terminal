import { ProjectType } from "./types";

export const activeProjects: ProjectType[] = [
  {
    title: "HollowDB",
    githubURL: "https://github.com/firstbatchxyz/hollowdb",
    webURL: "https://docs.hollowdb.xyz",
    npm: "hollowdb",
    content: () => (
      <p>
        A decentralized privacy-preserving key-value database, developed by{" "}
        <a href="https://www.firstbatch.xyz/">FirstBatch</a>.
      </p>
    ),
    tech: ["typescript", "circom"],
  },
  {
    title: "Warp Contracts Redis",
    githubURL: "https://github.com/firstbatchxyz/warp-contracts-redis",
    npm: "warp-contracts-redis",
    content: () => (
      <p>
        A SortKeyCache implementation for Warp Contracts using Redis, developed by{" "}
        <a href="https://www.firstbatch.xyz/">FirstBatch</a>.
      </p>
    ),
    tech: ["typescript", "redis"],
  },
  {
    title: "Circomkit",
    githubURL: "https://github.com/erhant/circomkit",
    demoURL: "https://github.com/erhant/circomkit-examples",
    npm: "circomkit",
    content: () => (
      <p>
        An opinionated Circom development & testing environment. An example repository demonstrates the usage of
        Circomkit along with several circuits, such as a generic sudoku-solution circuit and SHA256.
      </p>
    ),
    tech: ["typescript", "circom"],
  },
];
