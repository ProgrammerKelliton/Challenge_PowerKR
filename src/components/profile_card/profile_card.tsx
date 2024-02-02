// Components
import { Image, Paragraph, Text, View } from 'tamagui';

// Constants
import { PROFILE_CARD_IMAGE } from '../../../constants/images';

export default function ProfileCard() {
  return (
    <View
      flexDirection='row'
      gap='$15'
      alignSelf='stretch'
      marginHorizontal='$32'
      bg={'$gray-950'}
      padding='$15'
      borderRadius='$24'
    >
      <Image source={PROFILE_CARD_IMAGE} />

      <View justifyContent='center'>
        <Text fontWeight={'500'} fontSize={'$16'}>
          Colaborador nome
        </Text>
        <Paragraph color={'$gray-200'} fontSize={'$12'}>
          Empresa
        </Paragraph>
      </View>
    </View>
  );
}
