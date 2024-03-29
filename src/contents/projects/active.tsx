import type { ProjectType } from "../types";

const FirstBatch = () => (
  <a href="https://www.firstbatch.xyz/" target="_blank" class="link link-hover">
    FirstBatch
  </a>
);

export const activeProjects: ProjectType[] = [
  {
    title: "Circomkit",
    githubURL: "https://github.com/erhant/circomkit",
    webURL: "https://github.com/erhant/circomkit-examples",
    npm: "https://npmjs.com/package/circomkit",
    content: () => (
      <p>
        An opinionated Circom development & testing environment. An example repository demonstrates the usage of
        Circomkit along with several circuits, such as a generic sudoku-solution circuit and SHA256.
      </p>
    ),
    tech: ["typescript", "circom"],
  },
  {
    title: "HollowDB",
    githubURL: "https://github.com/firstbatchxyz/hollowdb",
    webURL: "https://hollowdb.xyz",
    npm: "https://npmjs.com/package/hollowdb",
    content: () => <p>A decentralized privacy-preserving key-value database, developed by {FirstBatch()}.</p>,
    tech: ["typescript", "circom"],
  },
  {
    title: "HollowDB Vector",
    githubURL: "https://github.com/firstbatchxyz/hollowdb-vector",
    npm: "https://npmjs.com/package/hollowdb-vector",
    content: () => <p>HNSW index over HollowDB, developed by {FirstBatch()}.</p>,
    tech: ["typescript"],
  },
  {
    title: "User Embeddings SDK",
    githubURL: "https://github.com/firstbatchxyz/firstbatch-sdk-ts",
    npm: "https://npmjs.com/package/firstbatch",
    content: () => <p>User Embeddings SDK, developed by {FirstBatch()}.</p>,
    tech: ["typescript"],
  },
  {
    title: "Warp Contracts Redis",
    githubURL: "https://github.com/firstbatchxyz/warp-contracts-redis",
    npm: "https://npmjs.com/package/warp-contracts-redis",
    content: () => <p>A SortKeyCache implementation for Warp Contracts using Redis, developed by {FirstBatch()}.</p>,
    tech: ["typescript", "redis"],
  },
];
