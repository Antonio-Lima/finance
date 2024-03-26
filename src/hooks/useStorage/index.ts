import { useState, useEffect, Dispatch, SetStateAction } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ReturnType<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>];

export default function useStorage<T>(
  key: string,
  initialValue?: T
): ReturnType<T> {
  const [state, setState] = useState<T | undefined>(initialValue);
  const [awaitFetch, setAwaitFetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await AsyncStorage.getItem(key);
      if (data) setState(JSON.parse(data));
      setAwaitFetch(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (awaitFetch) return;
    if (state) AsyncStorage.setItem(key, JSON.stringify(state));
  }, [awaitFetch, state, key]);

  return [state, setState];
}
