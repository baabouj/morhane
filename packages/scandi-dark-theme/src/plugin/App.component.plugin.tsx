import DarkModeProvider from "../component/DarkModeProvider";

export const renderRouter = (args: any, callback: (...args: any) => any) => {
  return <DarkModeProvider key="router">{callback(...args)}</DarkModeProvider>;
};

export default {
  "Component/App/Component": {
    "member-function": {
      renderRouter,
    },
  },
};
