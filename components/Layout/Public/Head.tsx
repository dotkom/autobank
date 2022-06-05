import Head from 'next/head';

type Props = {
  title?: string;
};

const CustomHead = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap'
        rel='stylesheet'
      ></link>
    </Head>
  );
};

export default CustomHead;
