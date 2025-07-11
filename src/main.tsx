import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import Effect from "./Effect.tsx";
// import Memo from "./Memo.tsx";
// import Callback from "./Callback";
import Ref from "./Ref";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Ref />
    </StrictMode>
);
