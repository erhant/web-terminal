import { For, Show } from "solid-js";
import { type ProjectType, activeProjects, schoolProjects, sideProjects, thesisProjects } from "../projects";

const projectsByCategory: Record<string, { title: string; projects: ProjectType[] }> = {
  active: {
    title: "Active Projects",
    projects: activeProjects,
  },
  side: {
    title: "Side Projects",
    projects: sideProjects,
  },
  thesis: {
    title: "Thesis Projects",
    projects: thesisProjects,
  },
  school: {
    title: "School Projects",
    projects: schoolProjects,
  },
};

export default function CommandProjects() {
  return (
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
  );
}
