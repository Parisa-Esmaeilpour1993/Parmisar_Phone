import {
  localization,
  pageLevelLocalization,
} from "./constants/localization/Localization";
const { aboutUs } = pageLevelLocalization;

function App() {
  return (
    <div>
      <div>{localization.home}</div>
      <div>{aboutUs.connections}</div>
    </div>
  );
}

export default App;
