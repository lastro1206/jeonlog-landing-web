/** 헤더 스크롤 테스트 컴포넌트 */

"use client";

import { useEffect, useState } from "react";

interface ScrollableContainerProps {
  children: React.ReactNode;
  onScroll?: (scrollY: number, direction: "up" | "down") => void;
}

export default function ScrollableContainer({
  children,
  onScroll,
}: ScrollableContainerProps) {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      setLastScrollY(currentScrollY);

      if (onScroll) {
        onScroll(currentScrollY, direction);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, onScroll]);

  return <div className='min-h-screen'>{children}</div>;
}
