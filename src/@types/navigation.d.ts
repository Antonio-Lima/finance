import { NavigationProp, ParamListBase } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined;
      home: undefined;
    }
  }
}