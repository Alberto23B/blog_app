import Layout from '@/componenets/Layout';
import Image from 'next/image';
import Header from '@/componenets/Header';
import Body from '@/componenets/Body';

export default function PostPage() {
  return (
    <>
      <Layout>
        <div className='m-auto w-5/6 sm:w-2/3 min-h-[75vh] flex flex-wrap bord rounded-br-xl'>
          <div className='w-full abstract min-h-[10vh] sm:min-h-[20vh] relative rounded-tl-xl'>
            <Image
              src='/post_bg.webp'
              alt='bg'
              layout='fill'
              className='rounded-tl-xl'
              priority
            />
          </div>
          <Header>
            BlogApp,
            <br /> created by Alberto Biolchi
          </Header>
          <Body>
            email:{' '}
            <a href='mailto:biolchi.alberto23@gmail.com'>
              biolchi.alberto23@gmail.com
            </a>
            <br />
            portfolio:{' '}
            <a href='https://my-portfolio-alberto23b.vercel.app/'>
              https://my-portfolio-alberto23b.vercel.app/
            </a>
            <br />
            github:{' '}
            <a href='https://github.com/Alberto23B'>
              https://github.com/Alberto23B
            </a>
          </Body>
        </div>
      </Layout>
    </>
  );
}
