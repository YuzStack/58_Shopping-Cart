import { User } from 'lucide-react';

function UserProfile() {
  return (
    <button className='hover:bg-primary-accent/10 hidden rounded-full p-2 text-neutral-500 transition-colors hover:text-black md:block'>
      <User />
    </button>
  );
}

export default UserProfile;
