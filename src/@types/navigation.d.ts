import { NavigationProp, ParamListBase } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      welcome: undefined;
      login: undefined;
      home: undefined;
      splash: undefined;
    }
  }
}
