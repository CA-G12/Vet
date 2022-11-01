interface IMassage {
  name?: string;
  username?: string;
  avatar: string;
  displayName: string;
  id: string;
  text: string;
  timestamp?: {
    nanoseconds: number;
    seconds: number;
  };
  uid: number;
}
export default IMassage;
