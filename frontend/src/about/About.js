import Header from '../shared/components/Header';
import Navbar from '../shared/components/Navbar';

const About = () => {
  return (
    <div className="flex flex-col mx-10 w-full max-w-container">
      <Navbar />
      <div className='text-center w-full my-20'>
        <Header fontSize={'text-5xl font-normal'}>
          <span className='font-light'>About</span> <span className='font-bold'>CryptoGuess</span>
        </Header> 
      </div>
    </div>
  );
}

export default About;