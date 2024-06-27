import { PureComponent, type ReactElement } from "react";

import "./ColorInverter.style";

/**
 * @namespace ScandiDarkTheme/Component/ColorInverter/Component
 */
export class ColorInverterComponent extends PureComponent<{
  children: ReactElement;
  isDarkModeEnabled: boolean;
}> {
  render() {
    const { isDarkModeEnabled, children } = this.props;

    if (children.type === "div" && children.props.className.includes("Logo"))
      // Fixes the logo not showing
      return children;

    return (
      <div block="ColorInverter" mods={{ isInverted: isDarkModeEnabled }}>
        {children}
      </div>
    );
  }
}

export default ColorInverterComponent;
