// Components
import { Button, Form, Text, YStack } from 'tamagui';
import Input from '../input/input';

// Expo
import { Link } from 'expo-router';

// Logic
import { LoginAction } from './form_logic';

// Icon
import { Eye, EyeOff } from '@tamagui/lucide-icons';

// React
import { useState } from 'react';

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form
      onSubmit={() => LoginAction({ email, password })}
      bg={'$black'}
      padding='$24'
      borderTopRightRadius={'$24'}
      borderTopLeftRadius={'$24'}
    >
      <YStack gap='$24'>
        <YStack gap='$15'>
          <Input
            defaultValue='Insira seu e-mail'
            id='email'
            label='Informações da conta'
            onChangeText={setEmail}
          />

          <Input
            defaultValue='Senha'
            id='password'
            label='Senha'
            onChangeText={setPassword}
          >
            <Button
              icon={showPassword ? Eye : EyeOff}
              size={'$20'}
              marginRight='$12'
              onPress={() => setShowPassword((prev) => !prev)}
            />
          </Input>
        </YStack>

        <Link href='/forgot_password'>
          <Text color='$brand'>Esqueceu a senha?</Text>
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
