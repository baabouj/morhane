import { connect } from "react-redux";
import { enableDarkMode } from "../../store/DarkMode/DarkMode.action";
import ModeToggleButtonComponent from "./ModeToggleButton.component";

import { type Dispatch } from "redux";
import { type RootState } from "SourceUtil/Store/Store.type";
import type {
  DarkModeMapDispatchToProps,
  DarkModeMapStateToProps,
} from "../../store/DarkMode/DarkMode.types";

/** @namespace ScandiDarkTheme/Component/ModeToggleButton/Container/mapStateToProps */
export const mapStateToProps = (state: RootState): DarkModeMapStateToProps => ({
  isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace ScandiDarkTheme/Component/ModeToggleButton/Container/mapDispatchToProps */
export const mapDispatchToProps = (
  dispatch: Dispatch
): DarkModeMapDispatchToProps => ({
  enableDarkMode: (enabled) => dispatch(enableDarkMode(enabled)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeToggleButtonComponent);
