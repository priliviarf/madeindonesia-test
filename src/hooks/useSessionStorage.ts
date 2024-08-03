import { useCallback, useEffect, useState } from "react";

export function useSessionStorage(
  key: string,
  defaultValue: string | Function
) {
  const [value, setValue] = useState(() => {
    const jsonValue = window.sessionStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return window.sessionStorage.removeItem(key);
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value, window.sessionStorage]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
