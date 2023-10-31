export function animationTo(
  element: HTMLElement,
  keyframes: Keyframe | Keyframe[],
  options?: KeyframeAnimationOptions
) {
  const animated = element.animate(keyframes, { ...options, fill: 'both' });
  animated.addEventListener('finish', () => {
    // @ts-ignore
    animated.commitStyles();
    animated.cancel();
  });

  return animated;
}

const keyframeDefaults = {
  easing: 'cubic-bezier(0.390, 0.575, 0.565, 1.000)',
};

export const KEYFRAMES = {
  fadeIn: [
    {
      offset: 0,
      ...keyframeDefaults,
      opacity: 0,
    },
    {
      offset: 1,
      ...keyframeDefaults,
      opacity: 1,
    },
  ],
  fadeOut: [
    {
      offset: 0,
      ...keyframeDefaults,
      opacity: 1,
    },
    {
      offset: 1,
      ...keyframeDefaults,
      opacity: 0,
    },
  ],
};