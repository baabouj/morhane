import { connect } from "react-redux";

import { RootState } from "SourceUtil/Store/Store.type";

import DarkModeComponent from "./DarkModeProvider.component";
import { DarkModeMapStateToProps } from "../../store/DarkMode/DarkMode.types";

/** @namespace ScandiDarkTheme/Component/DarkModeProvider/Container/mapStateToProps */
export const mapStateToProps = (state: RootState): DarkModeMapStateToProps => ({
  isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace ScandiDarkTheme/Component/DarkModeProvider/Container/mapDispatchToProps */
export const mapDispatchToProps = (): {} => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeComponent);
