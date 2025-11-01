import { useEffect, useRef, useState } from "react";

/**
 * useAutoScrollPause
 * Automatically scrolls to bottom when new messages arrive,
 * but pauses if user scrolls up (like YouTube Live Chat).
 *
 * @param {Array} deps - usually the message array
 * @returns {Object} { ref, handleScroll }
 */
export const useAutoScrollPause = (deps = []) => {
  const containerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Detect if user scrolls away from bottom
  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50;
    setAutoScroll(isAtBottom);
  };

  // Auto scroll only if user is near bottom
  useEffect(() => {
    const el = containerRef.current;
    if (el && autoScroll) {
      el.scrollTop = el.scrollHeight;
    }
  }, [deps, autoScroll]);

  return { ref: containerRef, handleScroll };
};
