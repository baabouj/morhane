import { PureComponent } from "react";

import "./ModeToggleButton.style";

/** @namespace ScandiDarkTheme/Component/ModeToggleButton/Component */
export class ModeToggleButtonComponent extends PureComponent<{
  isDarkModeEnabled: boolean;
  enableDarkMode: (enabled: boolean) => void;
}> {
  renderMoonIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    );
  }
  renderSunIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  }

  render() {
    const { isDarkModeEnabled, enableDarkMode } = this.props;

    return (
      <button
        block="ModeToggleButton"
        elem="button"
        mods={{ darkMode: isDarkModeEnabled }}
        aria-label={__("Toggle Dark Mode")}
        onClick={() => enableDarkMode(!isDarkModeEnabled)}
      >
        {isDarkModeEnabled ? this.renderMoonIcon() : this.renderSunIcon()}
      </button>
    );
  }
}

export default ModeToggleButtonComponent;
