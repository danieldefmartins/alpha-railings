"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// A new page opens at its top. Back and Forward keep the browser's saved position, and
// links to a section on a page still go to that section.
export default function ScrollReset() {
  const pathname = usePathname();
  const first = useRef(true);
  const history = useRef(false);
  useEffect(() => {
    const onPop = () => { history.current = true; };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (history.current) { history.current = false; return; }
    if (window.location.hash) return;
    const top = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    top();
    const frame = requestAnimationFrame(top);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);
  return null;
}
