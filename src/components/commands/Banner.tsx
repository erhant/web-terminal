export default function CommandBanner() {
  return (
    <pre>
      {/* <code class="font-bold text-xl">{"\n\t\tWelcome!\n\n"}</code> */}
      <code>
        {"\n\tType"} <span class="text-accent font-bold">help</span> to see the list of available commands.{"\n\n"}
      </code>
    </pre>
  );
}
