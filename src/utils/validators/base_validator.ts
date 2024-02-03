export default abstract class BaseValidator {
  protected isValid: boolean;
  protected error: string;

  constructor(protected value: string) {
    this.isValid = true;
    this.error = '';
  }

  trim() {
    this.value = this.value.trim();

    return this;
  }
  minLength(length: number) {
    if (this.value.length < length) {
      this.isValid = false;
      this.error = `Deve ter no mínimo ${length}`;
    }

    return this;
  }
  parse() {
    return {
      valid: this.isValid,
      error: this.error,
    };
  }
}
