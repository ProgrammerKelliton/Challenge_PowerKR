export enum CharacterStateEnum {
  UPPER_CASE,
  LOWER_CASE,
}

export interface HaveCharacterInStateProps {
  state: keyof typeof CharacterStateEnum;
}
