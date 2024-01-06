import { For, Match, Show } from "solid-js";
import { type ProjectType, activeProjects, schoolProjects, sideProjects, thesisProjects } from "../../contents/";
import Prefix from "../Prefix";

const projectsByCategory: Record<string, { title: string; projects: ProjectType[]; desc: string }> = {
  active: {
    title: "Active Projects",
    projects: activeProjects,
    desc: "Currently maintained & active projects.",
  },
  side: {
    title: "Side Projects",
    projects: sideProjects,
    desc: "Endless pit of side projects.",
  },
  thesis: {
    title: "Thesis Projects",
    projects: thesisProjects,
    desc: "My B.Sc. and M.Sc. thesis projects.",
  },
  school: {
    title: "School Projects",
    projects: schoolProjects,
    desc: "Projects from the school, homeworks & term projects and such.",
  },
};

export default function CommandProjects(props: { cmd: string }) {
  return (
    <Match
      when={props.cmd === "projects" || Object.keys(projectsByCategory).includes(props.cmd.slice("projects ".length))}
    >
      <Prefix cmd={props.cmd} />

      <pre>
        {"\n\n"}
        <For each={Object.values(projectsByCategory)}>
          {({ title, projects }) => (
            <code>
              {"\t"}
              <span class="text-secondary font-bold underline">{title.padEnd(10, " ")}</span>
              {"\n"}

              <For each={projects}>
                {(project) => (
                  <code>
                    {"\n\t\t"}
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
              {"\n"}
            </code>
          )}
        </For>
      </pre>
    </Match>
  );
}
