import { DARKMODE_ENABLE } from "./DarkMode.action";

import { type Reducer } from "redux";
import type { DarkModeState, DarkModeAction } from "./DarkMode.types";

/** @namespace ScandiDarkTheme/Store/DarkMode/Reducer/getInitialState */
export const getInitialState = (): DarkModeState => ({
  enabled: false,
});

/** @namespace ScandiDarkTheme/Store/DarkMode/Reducer/DarkModeReducer */
export const DarkModeReducer: Reducer<DarkModeState, DarkModeAction> = (
  state = getInitialState(),
  action
) => {
  switch (action.type) {
    case DARKMODE_ENABLE:
      const { enabled } = action;

      return {
        enabled,
      };

    default:
      return state;
  }
};

export default DarkModeReducer;
