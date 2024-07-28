import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
  const [matche, setMatche] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matche) {
      setMatche(media.matches);
    }
    const listener = () => setMatche(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [query, matche]);
  return matche;
}
