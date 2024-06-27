import ModeToggleButton from "../component/ModeToggleButton";

import "./Header.style.plugin";

export const renderTopMenu = (args: any, callback: (...args: any) => any) => {
  return (
    <>
      <div block="Header" elem="DarkModeToggle">
        {callback(...args)}
        <ModeToggleButton />
      </div>
    </>
  );
};

export default {
  "Component/Header/Component": {
    "member-function": {
      renderTopMenu,
    },
  },
};
