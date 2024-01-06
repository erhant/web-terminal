import { For, Match, Show } from "solid-js";
import {
  type ProjectType,
  activeProjects,
  schoolProjects,
  sideProjects,
  thesisProjects,
  challengeProjects,
  hackathonProjects,
} from "../../contents";
import Prefix from "../Prefix";

const projects: Record<string, { projects: ProjectType[]; desc: string }> = {
  active: {
    projects: activeProjects,
    desc: "Actively maintained projects, mostly on NPM.",
  },
  side: {
    projects: sideProjects,
    desc: "Endless pit of side projects.",
  },
  thesis: {
    projects: thesisProjects,
    desc: "My B.Sc. and M.Sc. thesis projects.",
  },
  school: {
    projects: schoolProjects,
    desc: "Projects from the school, homeworks & term projects and such.",
  },
  challenge: {
    projects: challengeProjects,
    desc: "CTFs & puzzles solutions.",
  },
  hackathon: {
    projects: hackathonProjects,
    desc: "Hackathon projects.",
  },
};

export default function CommandProjects(props: { cmd: string }) {
  const selection = () => props.cmd.slice("projects ".length);

  return (
    <Match when={props.cmd === "projects" || Object.keys(projects).includes(selection())}>
      <Prefix cmd={props.cmd} />
      <Show
        when={props.cmd === "projects"}
        fallback={
          <For each={projects[selection()].projects || []}>
            {(project) => (
              <code>
                <br />
                <span class="text-primary">{project.title}</span>
                {" ("}
                <a class="link link-hover text-success" href={project.githubURL}>
                  code
                </a>
                <Show when={project.npm}>
                  {" | "}
                  <a class="link link-hover text-error" href={project.npm}>
                    npm
                  </a>
                </Show>
                <Show when={project.webURL}>
                  {" | "}
                  <a class="link link-hover text-info" href={project.webURL}>
                    web
                  </a>
                </Show>
                {")"}

                <pre class="text-wrap">{project.content()}</pre>
              </code>
            )}
          </For>
        }
      >
        <pre>
          <code>{"To view projects, type:\n\n\tprojects <category>\n\n"}</code>
          <code>{"Available categories:\n\n"}</code>
          <For each={Object.entries(projects)}>
            {([category, { desc }]) => (
              <code>
                <span class="text-secondary font-bold">{"\t" + category.padEnd(12, " ")}</span>
                <code class="text-wrap">{desc}</code>
                <br />
              </code>
            )}
          </For>
        </pre>
      </Show>
      <br />
    </Match>
  );
}
