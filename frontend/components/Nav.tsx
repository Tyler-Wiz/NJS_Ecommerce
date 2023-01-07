/* eslint-disable no-unused-vars */
import Link from "next/link";
import React, { FC } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdPerson, MdSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../redux/reducer/cartSlice";
import { authSelector, logOutUser } from "../redux/reducer/AuthSlice";

interface Props {
  setModalVisible: (boolean: any) => void;
}

export const Nav: FC<Props> = ({ setModalVisible }) => {
  const cartCount = useSelector(cartSelector);
  const auth = useSelector(authSelector);
  const dispatch = useDispatch()<any>;

  return (
    <nav className="font-display m-auto px-8 py-6 w-full shadow-md sticky top-0 z-5 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex w-1/6 px-6 items-center">
          <GiHamburgerMenu size={30} />
          <Link href="/">
            <h2 className="mx-4 text-2xl">CROYDON</h2>
          </Link>
        </div>
        <ul className="flex w-2/5 justify-center list-none">
          <li className="text-sm font-medium mr-12">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm font-medium mr-12">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-sm font-medium mr-12">
            <Link href="/">Womens</Link>
          </li>
          <li className="text-sm font-medium mr-12">
            <Link href="/">Mens</Link>
          </li>
          <li className="text-sm font-medium mr-12">
            <Link href="/">Todays Deals</Link>
          </li>
        </ul>
        {auth._id ? (
          <div className="flex justify-between items-center w-2/6 px-6">
            <div>{auth.name}</div>
            <div
              className="cursor-pointer"
              onClick={() => {
                dispatch(logOutUser());
              }}>
              LOGOUT
            </div>
            <MdSearch size={20} />
            <div
              onClick={() => {
                setModalVisible(true);
              }}
              className="flex cursor-pointer relative">
              <FaShoppingCart size={18} className="mr-1" />
              <div className="absolute top-[-5px] right-[-15px] bg-red-600 w-4 rounded-[50%] text-center">
                {cartCount.cartTotalQuantity > 0 ? (
                  <p className="text-xs font-bold text-white">
                    {cartCount.cartTotalQuantity}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center w-1/6 px-6">
            <MdSearch size={20} />
            <Link href="/login-register">
              <MdPerson size={25} />
            </Link>
            <FaRegHeart size={18} />
            <div
              onClick={() => {
                setModalVisible(true);
              }}
              className="flex cursor-pointer relative">
              <FaShoppingCart size={18} className="mr-1" />
              <div className="absolute top-[-5px] right-[-15px] bg-red-600 w-4 rounded-[50%] text-center">
                {cartCount.cartTotalQuantity > 0 ? (
                  <p className="text-xs font-bold text-white">
                    {cartCount.cartTotalQuantity}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
