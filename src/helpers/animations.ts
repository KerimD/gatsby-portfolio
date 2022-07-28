const animateElement = (
    element: HTMLElement,
    observer: IntersectionObserver,
    transform?: string
  ) => {
    element.style.opacity = '1';
    if (transform) element.style.transform = transform;
    observer.disconnect();
  }

const createIntersectionObserver = (e: Element, transform?: string) =>
  new IntersectionObserver((entries, observer) =>
    entries[0].isIntersecting && animateElement(
      entries[0].target as HTMLElement, observer, transform
    ), { threshold: 0.2 }).observe(e);

export const createIntersectionObservers = () => {
  Array.from(document.getElementsByTagName('section')).forEach((e) => {
    const h2 = e.querySelector('h2');
    h2 && createIntersectionObserver(h2);
  });

  Array.from(document.getElementsByClassName('work')).forEach((e) =>
    createIntersectionObserver(e, 'translateY(0)'));
}
