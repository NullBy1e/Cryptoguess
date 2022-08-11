import { callApi } from "../../lib/dummyAPI";


const Button = (props) => {
  return (
    <button type="button"> 
      <p className={"rounded-md px-3 py-2" + " " + props.className}>
        {props.children}
      </p>
    </button>
  );
};

const VoteForm = (props) => {
  return (
    <div className="block bg-slate-800 text-slate-50 rounded-lg font-bold text-xl m-20 px-40 py-20 sm:justify-center">
      <div>
        <p>
          {props.coin.name}::{props.coin.price} USD
        </p>
      </div>
      <div className="relative mt-5">
        <div className="float-right">
          <Button className="bg-green-800">Buy/Long</Button> 
        </div>
        <div className="float-left">
          <Button className="bg-red-800">Sell/Short</Button> 
        </div>
      </div>
    </div>
  );
};

const Vote = () => {
  var prices = callApi(); // dummy call

  var Forms = prices.map((coin) => (
    <VoteForm coin={coin} />
  ));

  return (
    <div>
      {Forms}
    </div>
  );

};

export default Vote;