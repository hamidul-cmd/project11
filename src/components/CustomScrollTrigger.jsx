import React, { useEffect, useRef } from "react";

function CustomScrollTrigger({ children, onEnter, onExit }) {
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onEnter && onEnter();
        } else {
          onExit && onExit();
        }
      },
      {
        root: null,
        rootMargin: "-50px 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const currentRef = triggerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [onEnter, onExit]);

  return (
    <div ref={triggerRef} className="ll:w-1/2">
      {children}
    </div>
  );
}

export default CustomScrollTrigger;
