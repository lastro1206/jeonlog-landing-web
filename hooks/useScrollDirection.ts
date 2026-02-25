"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // 스크롤이 최상단이면 방향을 null로 유지
      if (scrollY < 10) {
        setScrollDirection(null);
        setLastScrollY(scrollY);
        return;
      }

      const direction = scrollY > lastScrollY ? "down" : "up";
      const scrollDifference = Math.abs(scrollY - lastScrollY);

      // 스크롤 차이가 충분할 때만 방향 변경
      if (direction !== scrollDirection && scrollDifference > 10) {
        setScrollDirection(direction);
      }

      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
}
