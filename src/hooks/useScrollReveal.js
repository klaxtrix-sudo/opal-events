import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — fires IntersectionObserver when element enters viewport
 * and adds the `is-visible` class, triggering CSS transitions.
 *
 * @param {Object} options
 * @param {number} options.threshold  - 0–1 fraction visible before triggering (default 0.15)
 * @param {string} options.rootMargin - IntersectionObserver rootMargin (default '0px')
 * @param {boolean} options.once     - Only fire once (default true)
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove('is-visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * useScrollRevealAll — applies IntersectionObserver to ALL children of a container ref.
 * Useful for grid stagger animations.
 */
export function useScrollRevealAll({ threshold = 0.1, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
