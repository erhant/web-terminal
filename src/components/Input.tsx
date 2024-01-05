import Prefix from "./Prefix";

export default function Input(props: {
  handleCommand: (cmd: string) => void;
  takeInputRef: (ref: HTMLInputElement | undefined) => void;
}) {
  return (
    <div class="flex">
      <Prefix path="~" />
      <input
        ref={(ref) => props.takeInputRef(ref)}
        type="text"
        id="main-input"
        class="bg-inherit flex-grow outline-none"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const cmd = e.currentTarget.value.toLowerCase().trim();
            props.handleCommand(cmd);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}
