// Abstract
import BaseValidator from './base_validator';

// Types
import { HaveCharacterInStateProps } from '../../types/utils/password_validor.types';

export default class PasswordValidator extends BaseValidator {
  isValidPassword() {
    this.haveUpperCaseWords();
    this.haveLowerCaseWords();
    this.haveNumber();

    return this;
  }
  private haveUpperCaseWords() {
    const foundUpperCase = this.haveCharacterInState({ state: 'UPPER_CASE' });

    if (!foundUpperCase) {
      this.error = 'Deve conter letras maiúsculas';
      this.isValid = false;
    }

    return this;
  }
  private haveLowerCaseWords() {
    const foundLowerCase = this.haveCharacterInState({ state: 'LOWER_CASE' });

    if (!foundLowerCase) {
      this.error = 'Deve conter letras minúsculas';
      this.isValid = false;
    }

    return this;
  }
  private haveCharacterInState({ state }: HaveCharacterInStateProps) {
    const valid_rule = (value: string) =>
      state === 'UPPER_CASE' ? value.toUpperCase() : value.toLowerCase();

    const found = this.value
      .split('')
      .some((value) => value === valid_rule(value));

    return found;
  }
  private haveNumber() {
    const found = this.value.split('').some((value) => !isNaN(Number(value)));

    if (!found) {
      this.error = 'Deve conter números';
      this.isValid = false;
    }

    return this;
  }
}
