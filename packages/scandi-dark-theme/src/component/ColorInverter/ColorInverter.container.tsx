import { connect } from "react-redux";

import ColorInverter from "./ColorInverter.component";

import { type RootState } from "SourceUtil/Store/Store.type";

import { type DarkModeMapStateToProps } from "../../store/DarkMode/DarkMode.types";

/** @namespace ScandiDarkTheme/Component/ColorInverter/Container/mapStateToProps */
export const mapStateToProps = (state: RootState): DarkModeMapStateToProps => ({
  isDarkModeEnabled: state.DarkModeReducer.enabled,
});

// this component does not need to dispatch any actions, so we return an empty object {}
/** @namespace ScandiDarkTheme/Component/ColorInverter/Container/mapDispatchToProps */
export const mapDispatchToProps = (): {} => ({});

// connect is a Redux HOC that uses the two functions we defined above
// to pass their return values as props to ColorInverter
export default connect(mapStateToProps, mapDispatchToProps)(ColorInverter);
