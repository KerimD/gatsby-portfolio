const animateElement =
  (element: HTMLElement, observer: IntersectionObserver, transform: string) => {
    element.style.opacity = '1';
    element.style.transform = transform;
    observer.disconnect();
  }

const createIntersectionObserver = (e: Element | null, transform: string) =>
  e && new IntersectionObserver((entries, observer) =>
    entries[0].isIntersecting && animateElement(
      entries[0].target as HTMLElement, observer, transform
    )).observe(e)

export const createIntersectionObservers = () => {
  Array.from(document.getElementsByTagName('section')).forEach((e) =>
    createIntersectionObserver(e.querySelector('h2'), 'translateX(-0.07em)'))

  Array.from(document.getElementsByClassName('work')).forEach((e) =>
    createIntersectionObserver(e, 'translateY(0)'))
}
