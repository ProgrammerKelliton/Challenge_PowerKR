// Components
import { Button, Image, Text, View, YStack } from 'tamagui';
import { SettingOption } from '../../../../components/setting_option';

// Constants
import { PROFILE_IMAGE } from '../../../../../constants/images';

// Icons
import { HelpCircle, Power } from '@tamagui/lucide-icons';

export default function Profile() {
  return (
    <YStack
      bg={'$black-2'}
      f={1}
      justifyContent='center'
      alignItems='center'
      gap='$32'
      paddingTop='$88'
    >
      <View gap='$24'>
        <Image source={PROFILE_IMAGE} w={170} height={170} />

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

      <View alignSelf='stretch' marginHorizontal='$24' gap='$15'>
        <Button
          bg={'$gray-950'}
          borderColor={'$gray-400'}
          borderRadius={'$24'}
          height={'$40'}
        >
          <HelpCircle size={'$20'} />
          <Text>Ajuda</Text>
        </Button>
        <Button
          bg={'$gray-950'}
          borderColor={'$gray-400'}
          borderRadius={'$24'}
          height={'$40'}
        >
          <Power size={'$20'} />
          <Text>Sair</Text>
        </Button>
      </View>
    </YStack>
  );
}
