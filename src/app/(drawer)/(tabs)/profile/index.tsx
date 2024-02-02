// Components
import { Button, Image, Text, View, YStack } from 'tamagui';
import { SettingOption } from '../../../../components/setting_option';
import Container from '../../../../components/container/container';

// Constants
import { PROFILE_IMAGE } from '../../../../../constants/images';

export default function Profile() {
  const IMAGE_SIZE = 170;

  return (
    <YStack
      bg={'$black-2'}
      f={1}
      justifyContent='center'
      alignItems='center'
      gap='$32'
    >
      <View gap='$24'>
        <Image
          source={{ uri: PROFILE_IMAGE, width: IMAGE_SIZE, height: IMAGE_SIZE }}
        />

        <View gap='$9'>
          <Text textAlign='center' fontSize={'$20'} fontWeight={'500'}>
            Colaborador nome
          </Text>
          <Text
            textAlign='center'
            color={'$gray-200'}
            fontSize={'$14'}
            fontWeight={'300'}
          >
            Departamento
          </Text>
        </View>
      </View>

      <View alignSelf='stretch' marginHorizontal='$24' gap='$32'>
        <SettingOption.Root label='Nome'>
          <SettingOption.Redirect text='Nome Completo' />
        </SettingOption.Root>

        <SettingOption.Root label='E-mail'>
          <SettingOption.Redirect text='nome.sobrenome@gmail.com' />
        </SettingOption.Root>

        <SettingOption.Root label='Notificações'>
          <SettingOption.Toggle />
        </SettingOption.Root>

        <SettingOption.Root label='Modo Noturno'>
          <SettingOption.Toggle />
        </SettingOption.Root>
      </View>

      <View>
        <Button>Ajuda</Button>
        <Button>Sair</Button>
      </View>
    </YStack>
  );
}
