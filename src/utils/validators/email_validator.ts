// Validator
import BaseValidator from './base_validator';

// Obs: Embora essa class é estendida eu poderia usar o Composite pattern, mas escolhi estender seguindo o princípio Open/Close do SOLID
export default class EmailValidator extends BaseValidator {
  isValidEmail() {
    this.haveAtSign()?.haveUserName()?.haveSubDomain();

    return this;
  }

  // Obs: Aqui era possível lançar um error também só mudaria um pouco a estrutura
  private haveAtSign() {
    if (!this.value.includes('@')) {
      this.isValid = false;
      this.error = 'O e-mail deve conter um @';

      return;
    }
    return this;
  }
  // Obs: Aqui eu poderia usar também um regex, após verificar se ele não é vúneravel a ReDoS
  private haveUserName() {
    const atSignIndex = this.value.indexOf('@');
    const userName = this.value.charAt(atSignIndex - 1);

    if (userName === '' || typeof userName === 'undefined') {
      this.isValid = false;
      this.error = 'O e-mail deve conter o nome do usuário antes do @';

      return;
    }
    return this;
  }
  private haveSubDomain() {
    const atSignIndex = this.value.indexOf('@');
    const subDomain = this.value.charAt(atSignIndex + 1);

    if (subDomain === '' || typeof subDomain === 'undefined') {
      this.isValid = false;
      this.error = 'O e-mail deve conter o subdomínio depois do @';

      return;
    }
    return this;
  }
}
