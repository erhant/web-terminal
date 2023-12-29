export default function Prefix(props: { success: boolean; path: string }) {
  const color = () => (props.success ? "success" : "error");

  return (
    <code>
      <span class="text-accent">guest</span>
      <span>{"@"}</span>
      <span class="text-warning">{"erhant.me"}</span>
      <span>{":"}</span>
      <span class="text-info">{props.path}</span>
      <span class={color()}>{" > "}</span>
    </code>
  );
}
