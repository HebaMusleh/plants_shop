import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const [shortDimension, longDimension]: [number, number] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

// Define the types for the scaling functions
const horizontalScale = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
