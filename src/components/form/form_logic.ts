// Types
import { LoginActionData } from '../../types/others/login.types';

// Utils
import EmailValidator from '../../utils/validators/email_validator';
import PasswordValidator from '../../utils/validators/password_validator';

export function LoginAction({ email, password }: LoginActionData) {
  const emailValidator = new EmailValidator(email).trim().isValidEmail();
  const passwordValidor = new PasswordValidator(password)
    .trim()
    .minLength(8)
    .isValidPassword();

  const emailResult = emailValidator.parse();
  const passwordResult = passwordValidor.parse();
}
