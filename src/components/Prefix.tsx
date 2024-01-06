import { Show } from "solid-js";

export default function Prefix(props: { fail?: boolean; path?: string; cmd?: string }) {
  const promptColor = () => (props.fail ? "text-error" : "text-success");

  return (
    <code>
      <span class="text-accent">guest</span>
      <span>{"@"}</span>
      <span class="text-primary">erhant.me</span>
      <span>{":"}</span>
      <span class="text-info">{props.path || "~"}</span>
      <span class={promptColor()}>{" > "}</span>
      <Show when={props.cmd !== undefined}>
        <span>{props.cmd}</span>
        {"\n"}
      </Show>
    </code>
  );
}
