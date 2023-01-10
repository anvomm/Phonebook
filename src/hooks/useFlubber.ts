import { MotionValue, useTransform } from 'framer-motion';
var flubber = require('flubber');

export const getIndex = (_: any, index: number) => index;

export function useFlubber(progress: MotionValue<number>, paths: string[]) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => flubber.interpolate(a, b, { maxSegmentLength: 0.1}),
  });
}
