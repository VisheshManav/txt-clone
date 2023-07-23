import { BiHomeAlt } from 'react-icons/bi'
import { FaHashtag } from 'react-icons/fa'
import { AiOutlineBell } from 'react-icons/ai'
import { BsBookmarks, BsTwitter } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { CiCircleMore } from 'react-icons/ci'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    icon: BiHomeAlt
  },
  {
    title: 'Explore',
    icon: FaHashtag
  },
  {
    title: 'Messages',
    icon: AiOutlineBell
  },
  {
    title: 'Bookmarks',
    icon: BsBookmarks
  },
  {
    title: 'Profile',
    icon: CgProfile
  },
  {
    title: 'More',
    icon: CiCircleMore
  },
];

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black/50">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col h-screen">
          <Link href={'/'}>
            <BsTwitter />
          </Link>
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              className='bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4'
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              <div>
                {item.title}
              </div>
            </Link>
          ))}
        </section>
        <main>Home timeline </main>
        <section>right section</section>
      </div>
    </div>
  );
};

export default Home;