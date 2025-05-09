import { useEffect, useState } from "react";
import type { Props } from "@/types/shared.type";

type P = {
  Loader: React.ElementType;
  preloadFn: (...args: any) => Promise<any>;
  objToPreload: any;
};

function PreLoadGate(props: Props<"div", P>) {
  const { children, Loader, preloadFn, objToPreload } = props;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    preloadFn(objToPreload).then(() => {
      setIsReady(() => true);
    });

    // Optional: add a max timeout fallback (e.g., 3s)
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [preloadFn, objToPreload]);

  return isReady ? <>{children}</> : <Loader />;
}

const Component = {
  PreLoadGate,
};

export default Component;
