export function getInLimit(value, min, max) {
  const tooSmall = value < min;
  const tooBig = value > max;

  if (!tooSmall && !tooBig) {
    return Number(value.toFixed(3));
  } else if (tooSmall) {
    return min;
  } else if (tooBig) {
    return max;
  }
}

export function getIOstatus(entry) {
  const threshold = 5; // sometimes edge isn't exactly 0 when triggered.

  const { boundingClientRect, intersectionRect, rootBounds, isIntersecting } = entry;
  const { height, width } = rootBounds;

  if (isIntersecting) {
    if (intersectionRect.left < threshold) {
      return 'enterLeft';
    } else {
      return 'enterRight';
    }
  } else {
    if (boundingClientRect.left - rootBounds.right < threshold * -1) {
      return 'leaveLeft';
    } else {
      return 'leaveRight';
    }
  }
}
