import type { ProjectType } from "../types";

export const thesisProjects: ProjectType[] = [
  {
    title: "Exploring Mixed and Multi-Precision SpMV for GPUs",
    githubURL: "https://github.com/ParCoreLab/mixed-and-multi-spmv",
    paperURL: "https://ieeexplore.ieee.org/document/9980904",
    content: () => (
      <p>
        As my M.Sc. thesis, I worked on the optimization of Sparse Matrix-Vector Multiplication in NVIDIA GPUs. For
        this, I have researched ways of using mixed-precision (32-bit and 64-bit in particular) to my advantage, such
        that the accuracy is not affected too much but we still gain benefits from the reduced precisions. The methods
        were further extended to support multi-precision where both precisions are used per se, at different times.
      </p>
    ),
    tech: ["cuda", "cpp", "python", "tex"],
  },
  {
    title: "Obtaining Mathematical Expressions of Numerical Algorithms",
    githubURL: "https://github.com/erhant/pseudomath",
    content: () => (
      <p>
        As my B.Sc. thesis, I wrote a small toy C-like language using <a href="https://github.com/zaach/jison">JISON</a>
        . The parser converted the code into a three tuple: set of variables, set of functions, and the initial function
        as the entry point. The resulting functions are composed in such a way that an input to the initial function
        will result in an output, just like it would in the code. Although I did not know about it at time, this is
        greatly similar to{" "}
        <a href="https://en.wikipedia.org/wiki/General_recursive_function">General Recursive Functions</a>.
      </p>
    ),
    tech: ["javascript", "tex"],
  },
];
