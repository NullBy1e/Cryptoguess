import Header from "../../shared/components/Header";
import Button from "../../shared/components/Button";

const Hero = () => {
  return (
    <>
      <div className="text-center w-full my-20">
        <Header fontSize={'text-8xl'}>CryptoGuess</Header>
        <Button>Vote Now!</Button>
      </div>
    </>
  );
}

export default Hero;
