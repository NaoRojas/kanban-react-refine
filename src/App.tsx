import { Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";

function App() {
  return (
    <DevtoolsProvider>
      <Refine
        options={{
          projectId: "wFJqb4-AgWaXj-oyV20X",
        }}
      >
        <WelcomePage />
        <DevtoolsPanel />
      </Refine>
    </DevtoolsProvider>
  );
}

export default App;
