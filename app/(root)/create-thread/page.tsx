import PostThread from '@/components/Forms/PostThread/PostThread';
import { fetchUser } from '@/lib/actions/user.action';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function Page() {
  const user = await currentUser();
  if (!user) return redirect('/sign-in');
  // fetch organization list created by user
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <div>
      <h1 className='head-text'>Create Thread</h1>

      <PostThread userId={userInfo._id} />
    </div>
  );
}

export default Page;
