import style from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* spread makes it highly configurable */}
    </div>
  );
};
export default Input;
