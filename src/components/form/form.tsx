// Components
import { Button, Form, Input, Label, Text, View, YStack } from 'tamagui';

// Expo
import { Link } from 'expo-router';

export default function FormLogin() {
  return (
    <Form
      onSubmit={() => {}}
      bg={'$black'}
      padding='$24'
      borderTopRightRadius={'$24'}
      borderTopLeftRadius={'$24'}
    >
      <YStack gap='$24'>
        <YStack gap='$15'>
          <View>
            <Label htmlFor='email'>Informações da conta</Label>
            <Input
              id='email'
              defaultValue='Insira seu e-mail'
              bg={'$gray-900'}
              color={'$gray-200'}
              borderRadius={'$12'}
              height={'$64'}
              borderColor={'$gray-400'}
            />
          </View>

          <View>
            <Label htmlFor='password'>Senha</Label>
            <Input
              id='password'
              defaultValue='Senha'
              bg={'$gray-900'}
              color={'$gray-200'}
              padding='$12'
              borderRadius={'$12'}
              height={'$64'}
              borderColor={'$gray-400'}
            />
          </View>
        </YStack>

        <Link href='/forgot_password' asChild>
          <Text color='$brand' textAlign='right'>
            Esqueceu a senha?
          </Text>
        </Link>

        <Form.Trigger asChild>
          <Button
            bg='$brand'
            height={'$64'}
            borderRadius={'$12'}
            color={'black'}
            fontWeight={'600'}
          >
            Entrar
          </Button>
        </Form.Trigger>
      </YStack>
    </Form>
  );
}
