import Header from '../shared/components/Header';
import Navbar from '../shared/components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='text-center w-full my-20'>
        <Header fontSize={'text-5xl font-normal'}>
          About <span className='font-bold'>CryptoGuess</span>
        </Header> 
      </div>
    </>
  );
}

export default About;