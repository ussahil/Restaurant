import mealsImage from "../../assets/meals.jpeg";
import style from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    //2parts
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCard} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="table full of delicious food" />
      </div>
    </>
  );
};
export default Header;
