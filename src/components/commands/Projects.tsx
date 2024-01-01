import { For } from "solid-js";
import { ProjectType, activeProjects, schoolProjects, sideProjects, thesisProjects } from "../projects";

const projectsByCategory: Record<string, { title: string; projects: ProjectType[] }> = {
  thesis: {
    title: "Thesis Projects",
    projects: thesisProjects,
  },
  side: {
    title: "Side Projects",
    projects: sideProjects,
  },
  school: {
    title: "School Projects",
    projects: schoolProjects,
  },
  active: {
    title: "Active Projects",
    projects: activeProjects,
  },
};

export default function CommandProjects() {
  return (
    <pre>
      <For each={Object.values(projectsByCategory)}>
        {({ title, projects }) => (
          <code>
            {"\n\t"}
            <span class="text-secondary font-bold underline">{title.padEnd(10, " ")}</span>
            {"\n"}

            <For each={projects}>
              {(project) => (
                <code>
                  {"\n\t\t"}
                  <span class="text-primary">{project.title}</span>
                </code>
              )}
            </For>
          </code>
        )}
      </For>
    </pre>
  );
}
