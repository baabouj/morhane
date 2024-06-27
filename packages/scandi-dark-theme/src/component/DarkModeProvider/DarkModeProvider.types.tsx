import { ReactElement } from "react";

export interface DarkModeProviderProps {
  children: ReactElement;
  isDarkModeEnabled: boolean;
}
