const Button = (props) => {
  return (
    <button 
      type="button" 
      name={props.name} 
      className="rounded-full h-20 px-10 text-3xl font-semibold bg-slate-800 text-slate-100 hover:text-slate-800 hover:bg-slate-100"
    >
      <p>{props.children}</p>
    </button>
  );
};

export default Button;