import { Profile } from '../components/Profile/Profile';
import { ProvideProfile } from '../hooks/useProfileInfo';

const DoctorProfile = () => (
  <ProvideProfile>
    <Profile />
  </ProvideProfile>
);

export default DoctorProfile;
