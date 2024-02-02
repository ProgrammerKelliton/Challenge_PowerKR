// React native svg (Obs: vem junto com o lucide quando instala o tamagui)
// https://tamagui.dev/docs/components/lucide-icons
import { Circle, Svg, Text } from 'react-native-svg';
import { View } from 'tamagui';

// Types
import CircularProgressProps from '../../types/components/circular_progress';

export default function CircularProgress({ text }: CircularProgressProps) {
  const SVG_SIZE = 120;
  const RADIUS = 8 * 2 * Math.PI;
  const POSITION = { x: SVG_SIZE / 2, y: SVG_SIZE / 2 };

  return (
    <View bg={'$gray-950'} padding='$24' borderRadius='$24'>
      <Svg width={SVG_SIZE} height={SVG_SIZE}>
        <Circle
          cx={POSITION.x}
          cy={POSITION.y}
          r={RADIUS}
          fill='none'
          stroke='#364152'
          strokeWidth='10'
          strokeDasharray={250}
          strokeLinecap='round'
          transform={`rotate(-235, ${SVG_SIZE / 2}, ${SVG_SIZE / 2})`}
        />
        <Circle
          cx={POSITION.x}
          cy={POSITION.y}
          r={RADIUS}
          fill='none'
          stroke='#44CB4B'
          strokeWidth='10'
          strokeDasharray={250}
          strokeDashoffset={100}
          strokeLinecap='round'
          transform={`rotate(-235, ${SVG_SIZE / 2}, ${SVG_SIZE / 2})`}
        />

        <Text
          x={POSITION.x}
          y={POSITION.y}
          textAnchor='middle'
          fill={'#ffff'}
          fontSize={'16'}
          fontWeight={'700'}
        >
          7.123
        </Text>

        <Text
          x={POSITION.x}
          y={POSITION.y + 16}
          textAnchor='middle'
          fill={'#9AA4B2'}
          fontSize={'14'}
        >
          {text}
        </Text>
      </Svg>
    </View>
  );
}
