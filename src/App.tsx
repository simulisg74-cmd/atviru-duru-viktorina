import DesktopKiosk from "./components/DesktopKiosk";
import MobileFlow from "./components/MobileFlow";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const spec = params.get("spec");

  return spec === null ? (
    <DesktopKiosk />
  ) : (
    <MobileFlow specParam={spec} initialProfessionId={params.get("prof")} />
  );
}
