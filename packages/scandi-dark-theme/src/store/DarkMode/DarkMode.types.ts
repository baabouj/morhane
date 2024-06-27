import { type AnyAction } from "redux";

declare module "Util/Store/Store.type" {
  export interface RootState {
    DarkModeReducer: DarkModeState;
  }
}

export interface DarkModeAction extends AnyAction {
  type: string;
  enabled: boolean;
}

export interface DarkModeState {
  enabled: boolean;
}

export interface DarkModeMapStateToProps {
  isDarkModeEnabled: boolean;
}

export interface DarkModeMapDispatchToProps {
  enableDarkMode: (enabled: boolean) => void;
}
