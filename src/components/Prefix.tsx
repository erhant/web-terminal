export default function Prefix(props: { fail?: boolean; path: string }) {
  const promptColor = () => (props.fail ? "text-error" : "text-success");

  return (
    <code>
      <span class="text-accent">guest</span>
      <span>{"@"}</span>
      <span class="text-primary">erhant.me</span>
      <span>{":"}</span>
      <span class="text-info">{props.path}</span>
      <span class={promptColor()}>{" > "}</span>
    </code>
  );
}
