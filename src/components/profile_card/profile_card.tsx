// Components
import { Image, Paragraph, Text, View } from 'tamagui';
import Container from '../container/container';

// Constants
import { PROFILE_IMAGE } from '../../../constants/images';

export default function ProfileCard() {
  return (
    <Container props={{ marginHorizontal: '$32' }}>
      <Image source={PROFILE_IMAGE} />

      <View justifyContent='center'>
        <Text fontWeight={'500'} fontSize={'$16'}>
          Colaborador nome
        </Text>
        <Paragraph color={'$gray-200'} fontSize={'$12'}>
          Empresa
        </Paragraph>
      </View>
    </Container>
  );
}
