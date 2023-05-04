import { TbHanger } from "react-icons/tb";
import { IoMdFilm, IoMdNuclear } from "react-icons/io";
import { IoRestaurant } from "react-icons/io5";
import { HiMusicalNote } from "react-icons/hi2";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { GiShipWheel } from "react-icons/gi";
import {
  FaBone,
  FaBinoculars,
  FaCanadianMapleLeaf,
  FaBabyCarriage,
} from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import "./Tabs.scss";

export default function Tabs() {
  return (
    <div className="tabsBlock">
      <div className="tabsBlock__container">
        <div className="tabsBlock__inner">
          <div className="tabsBlock__item">
            <TbHanger />
            <p className="tabsBlock__item__text">Clothing & Shoes</p>
          </div>
          <div className="tabsBlock__item">
            <IoMdFilm />
            <p className="tabsBlock__item__text">Entertainment</p>
          </div>
          <div className="tabsBlock__item">
            <HiMusicalNote />
            <p className="tabsBlock__item__text">Music</p>
          </div>
          <div className="tabsBlock__item">
            <MdOutlineFitnessCenter />
            <p className="tabsBlock__item__text">Sport & Lifestyle</p>
          </div>
          <div className="tabsBlock__item">
            <FaBone />
            <p className="tabsBlock__item__text">Pets</p>
          </div>
          <div className="tabsBlock__item">
            <IoRestaurant />
            <p className="tabsBlock__item__text">Kitchen Accessories</p>
          </div>
          <div className="tabsBlock__item">
            <FaBinoculars />
            <p className="tabsBlock__item__text">Travel Equipment</p>
          </div>
          <div className="tabsBlock__item">
            <FaCanadianMapleLeaf />
            <p className="tabsBlock__item__text">Growing & Garden</p>
          </div>
          <div className="tabsBlock__item">
            <BsFillLightningFill />
            <p className="tabsBlock__item__text">Electrical Tools</p>
          </div>
          <div className="tabsBlock__item">
            <FaBabyCarriage />
            <p className="tabsBlock__item__text">Mother Care</p>
          </div>
          <div className="tabsBlock__item">
            <IoMdNuclear />
            <p className="tabsBlock__item__text">Toys & Entertainment</p>
          </div>
          <div className="tabsBlock__item">
            <GiShipWheel />
            <p className="tabsBlock__item__text">Vintage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
