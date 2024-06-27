import DarkModeReducer from "../store/DarkMode/DarkMode.reducer";

export const getStaticReducersPlugin = (
  args: any,
  callback: (...args: any) => any
) => ({
  ...callback(args),
  DarkModeReducer,
});

export default {
  "Store/Index/getStaticReducers": {
    function: getStaticReducersPlugin,
  },
};
