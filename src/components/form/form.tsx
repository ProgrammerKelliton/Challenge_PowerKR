// Components
import { Button, Form, Input, Label, View, YStack } from 'tamagui';

// Expo
import { Link } from 'expo-router';

export default function FormLogin() {
  return (
    <Form
      onSubmit={() => {}}
      bg={'$background'}
      padding='$1.5'
      paddingBottom='$7'
      borderTopRightRadius={'$9'}
      borderTopLeftRadius={'$9'}
    >
      <YStack marginHorizontal={'$4'} gap='$5'>
        <YStack gap='$1'>
          <View>
            <Label htmlFor='email'>Informações da conta</Label>
            <Input id='email' defaultValue='Insira seu e-mail' />
          </View>

          <View>
            <Label htmlFor='password'>Senha</Label>
            <Input id='password' defaultValue='Senha' />
          </View>
        </YStack>

        <Link
          href='/forgot_password'
          style={{ color: '#F7B519', textAlign: 'right' }}
        >
          Esqueceu a senha?
        </Link>

        <Form.Trigger asChild>
          <Button>Entrar</Button>
        </Form.Trigger>
      </YStack>
    </Form>
  );
}
