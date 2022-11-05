interface INotification {
  avatar: string;
  chatRoomId: string;
  displayName: string;
  id: string;
  timestamp?: { seconds: number; nanoseconds: number };
  uid: number;
}
export default INotification;
