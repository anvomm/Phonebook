import { MotionValue, useTransform } from 'framer-motion';
var flubber = require('flubber');

export const getIndex = (_, index) => index;

export function useFlubber(progress = MotionValue, paths) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => flubber.interpolate(a, b, { maxSegmentLength: 0.3}),
  });
}
