import { PureComponent } from "react";

import { type DarkModeProviderProps } from "./DarkModeProvider.types";

import "./DarkModeProvider.style.scss";

/** @namespace ScandiDarkTheme/Component/DarkModeProvider/Component */
export class DarkModeProviderComponent extends PureComponent<DarkModeProviderProps> {
  render() {
    const { children, isDarkModeEnabled } = this.props;

    return (
      <div block="DarkModeProvider" mods={{ isEnabled: isDarkModeEnabled }}>
        {children}
      </div>
    );
  }
}

export default DarkModeProviderComponent;
