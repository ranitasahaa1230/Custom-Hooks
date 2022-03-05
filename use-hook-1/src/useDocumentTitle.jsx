import { useEffect } from "react";

export function useDocumentTitle(counter) {
  useEffect(() => {
    document.title = counter;
  }, [counter]);
}
