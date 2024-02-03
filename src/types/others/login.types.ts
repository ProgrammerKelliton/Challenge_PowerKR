//  Obs: Normalmente isso eu colocaria em uma pasta @core como "LoginDTO"(class), para que fosse compartilhado com o back-end ou então eu simplemente usar uma lib.
export interface LoginActionData {
  email: string;
  password: string;
}
