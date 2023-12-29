export default function Code(props: { children: string; color: string }) {
  return <code class={`text-${props.color}`}>{props.children}</code>;
}
