const Button = (props) => {
  return (
    <button 
      type="button" 
      name={props.name} 
      className="rounded-full bg-slate-800 text-slate-100 h-20 px-10 text-3xl font-semibold"
    >
      <p>{props.children}</p>
    </button>
  );
};

export default Button;