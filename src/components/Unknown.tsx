import Prefix from "./Prefix";

export default function Unknown(props: { cmd: string }) {
  return (
    <>
      <Prefix fail={true} cmd={props.cmd} />
      <p class="text-error">{"unknown command: " + props.cmd + "\n"}</p>
    </>
  );
}
