import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();
  const prevPathRef = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const currentPathKey = `${pathname}${search}`;
    const prevPathKey = prevPathRef.current;
    prevPathRef.current = currentPathKey;

    const didChangePage = prevPathKey === null || currentPathKey !== prevPathKey;

    if (didChangePage) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      return;
    }

    if (!hash) return;

    const targetId = hash.slice(1);
    const element = document.getElementById(targetId);
    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth' });
  }, [pathname, search, hash]);

  return null;
}
