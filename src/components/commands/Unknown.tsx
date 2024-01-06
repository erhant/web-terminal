import Prefix from "../Prefix";

export default function CommandUnknown(props: { cmd: string }) {
  return (
    <>
      <Prefix fail={true} cmd={props.cmd} />
      <code>{"unknown command: " + props.cmd + "\n"}</code>
    </>
  );
}
