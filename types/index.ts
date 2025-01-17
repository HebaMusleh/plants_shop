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
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  uri: string;
}

interface CustomTextProps {
  secondary?: boolean;
  price?: boolean;
  text?: string;
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
  uri: string;
  title: string;
  category: string;
  price: string;
}

interface PlantCardProps {
  uri: string;
  title: string;
  category: string;
  price: string;
  id: string;
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
