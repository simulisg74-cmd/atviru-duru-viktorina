import DesktopKiosk from "./components/DesktopKiosk";
import MobileFlow from "./components/MobileFlow";

export default function App() {
  const spec = new URLSearchParams(window.location.search).get("spec");

  return spec === null ? <DesktopKiosk /> : <MobileFlow specParam={spec} />;
}
