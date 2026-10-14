import { useEffect, useMemo, useState } from "react";

/**
 * Simple typewriter (type -> pause -> erase -> next)
 * Good for premium subtle hero effect.
 */
export function useTypewriter(words, options = {}) {
  const cfg = useMemo(() => {
    return {
      typeSpeed: options.typeSpeed ?? 80,
      deleteSpeed: options.deleteSpeed ?? 45,
      pauseMs: options.pauseMs ?? 900,
      startDelayMs: options.startDelayMs ?? 250,
    };
  }, [options]);

  const safeWords = Array.isArray(words) && words.length ? words : ["Developer"];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const current = safeWords[index % safeWords.length];

    // start delay
    if (text === "" && !isDeleting && cfg.startDelayMs) {
      timer = setTimeout(() => {
        setText(current.slice(0, 1));
      }, cfg.startDelayMs);
      return () => clearTimeout(timer);
    }

    // done typing -> pause -> start deleting
    if (!isDeleting && text === current) {
      timer = setTimeout(() => setIsDeleting(true), cfg.pauseMs);
      return () => clearTimeout(timer);
    }

    // done deleting -> next word
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % safeWords.length);
      return;
    }

    // typing / deleting steps
    timer = setTimeout(() => {
      const next = isDeleting
        ? current.slice(0, Math.max(0, text.length - 1))
        : current.slice(0, text.length + 1);

      setText(next);
    }, isDeleting ? cfg.deleteSpeed : cfg.typeSpeed);

    return () => clearTimeout(timer);
  }, [cfg, index, isDeleting, safeWords, text]);

  return { text, wordIndex: index };
}