export const staggerTextOptions = {
  opacity: 0,
  duration: 0.5,
  stagger: 0.05,
};

export const scrollTriggerOptionsHelper = (
  trigger = null,
  start = "top top",
  end = "bottom bottom",
  scrub = 1,
  markers = true
) => {
  if (trigger) {
    return {
      trigger: trigger,
      start: start,
      end: end,
      scrub: scrub,
      markers: markers,
    };
  }

  return {
    start: start,
    end: end,
    scrub: scrub,
    markers: markers,
  };
};
