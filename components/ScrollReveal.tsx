"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((target) => {
        target.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            (entry.target as HTMLElement).setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "50px 0px 50px 0px" },
    );

    const observeTarget = (el: HTMLElement) => {
      if (!el.classList.contains("is-revealed") && el.getAttribute("data-revealed") !== "true") {
        observer.observe(el);
      }
    };

    document.documentElement.classList.add("scroll-reveal-enabled");

    // Observe all initial elements
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(observeTarget);

    // Watch for dynamically inserted elements (e.g. filter changes, dynamic tabs)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.hasAttribute("data-reveal")) {
              observeTarget(node);
            }
            node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(observeTarget);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Handle mobile Back-Forward Cache (BFcache) to prevent blank unrevealed elements
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((target) => {
          target.classList.add("is-revealed");
          target.setAttribute("data-revealed", "true");
        });
      }
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("pageshow", handlePageShow);
      document.documentElement.classList.remove("scroll-reveal-enabled");
    };
  }, []);

  return null;
}
