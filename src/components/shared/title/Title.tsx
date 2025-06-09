import titleBg from '@/assets/bg/dot_background.png';
import Link from 'next/link';
import TitleArrow from '../icons/TitleArrow';

type TitleType = {
  title: string;
  url: string;
};

const Title = ({ title, url }: TitleType) => {
  return (
    <section
      className=""
      style={{
        background: `url('${titleBg.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
      }}
    >
      <div className=" max-w-7xl mx-auto py-32">
        <h3
          className="uppercase text-6xl font-semibold"
          style={{
            WebkitTextStroke: '1px #B473F3',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
        >
          {title}
        </h3>
        <div className="flex items-center py-4 gap-6">
          <p className="">
            <Link href={'/'}>Home</Link>
          </p>
          <TitleArrow />
          <p className="">
            <Link
              href={url}
              className="capitalize text-secondary_two"
            >
              {title}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Title;
