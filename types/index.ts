import {
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface ITabs {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface IData {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image_url: string;
}

interface CustomTextProps {
  secondary?: boolean;
  price?: boolean;
  text?: string | number;
  style?: TextStyle;
  textProps?: TextProps;
  textContainerStyle?: ViewStyle;
}

interface CustomButtonProps {
  active?: boolean;
  title: string;
  onPress: () => void;
  buttonProps?: TouchableOpacityProps;
  buttonStyle?: ViewStyle;
}

interface CustomImageProps {
  uri: string;
  cart?: boolean;
  fallbackUri?: string;
}

interface CartCardProps {
  id: number;
  image_url: string;
  name: string;
  category: string;
  price: number;
}

interface PlantCardProps {
  id: number;
  name: string;
  image_url: string;
  category: string;
  price: number;
}

export {
  ITabs,
  IData,
  CustomTextProps,
  CustomButtonProps,
  CustomImageProps,
  CartCardProps,
  PlantCardProps,
};
