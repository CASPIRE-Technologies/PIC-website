import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal: Automatically observes elements with animation classes
 * (.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger)
 * and adds 'is-revealed' class when they enter the viewport.
 */
export const useScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Select targets to animate
    const targets = document.querySelectorAll(
      '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger, ' +
      '.service-card, .support-card, .why-card, .process-step, ' +
      '.about-purpose-card, .about-defines-card, .about-expertise-card, .about-approach-step, .about-specialist-card, ' +
      '.tailored-card, .process-flow-step, .category-card, .project-card, ' +
      '.contact-form-card, .contact-info-card, .contact-process-card'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    targets.forEach((el, index) => {
      // Add stagger delay attribute if in grid/flow
      if (!el.style.getPropertyValue('--reveal-delay')) {
        const delay = (index % 6) * 0.1;
        el.style.setProperty('--reveal-delay', `${delay}s`);
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);
};

export default useScrollReveal;
