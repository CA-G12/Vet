interface IAuth {
  id?: number;
  name?: string;
  avatar?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
  showPassword?: boolean;
  showConfirmPassword?: boolean;
  email?: string;
}
export default IAuth;
