import { useEffect, useRef } from "react";
function useMount() {
  const mountRef = useRef(false);
  useEffect(() => {
    mountRef.current = true;
  }, []);

  return () => mountRef.current;
}

export default useMount;
