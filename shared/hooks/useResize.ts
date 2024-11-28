import { useEffect, useState } from "react";

export const useResize = (meadiQuery: string, initialValue: boolean) => {
  const [width, setWidth] = useState(initialValue);

  useEffect(() => {
    const watcher = window.matchMedia(meadiQuery);
    setWidth(watcher.matches);

    const listener = (matches: any) => {
      setWidth(matches.matches);
    };

    watcher.addEventListener("change", listener);

    return () => {
      watcher.removeEventListener("change", listener);
    };
  }, [meadiQuery]);

  return width;
};
