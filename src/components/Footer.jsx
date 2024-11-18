import React from "react";
import Qrcode from "../assets/photos/footer/qrcode.png";
import PlayStore from "../assets/photos/footer/googleplaystore.png";
import AppStore from "../assets/photos/footer/appstore.png";
import Facebook from "../assets/photos/footer/facebookicon.png";
import Twitter from "../assets/photos/footer/Twittericon.png";
import Instagram from "../assets/photos/footer/instagramicon.png";
import LinkedIn from "../assets/photos/footer/linkedinicon.png";

export default function Footer() {
  return (
    <>
      <div className="bg-black h-[384px] mt-[140px] text-white ">
        <div className="flex justify-around pt-20">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Exclusive</h3>
            <span className="font-medium text-xl">Subscribe</span>
            <p className="font-normal text-base">
              Get 10% off your first order
            </p>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[217px] h-12 rounded border-[1.5px] border-white py-3 pl-4 bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-medium text-xl">Support</span>
            <p>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-medium text-xl">Account</span>
            <ul className="flex flex-col gap-4">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-medium text-xl">Quick Link</span>
            <ul className="flex flex-col gap-4">
              <li>Privacy Policy </li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-6">
              <span className="font-medium text-xl">Download App</span>
              <p className="text-gray-500 text-[12px]">
                Save $3 with App New User Only
              </p>
            </div>
            <div className="flex gap-3 mt-1">
              <div>
                <img src={Qrcode} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <img src={PlayStore} alt="" />
                <img src={AppStore} alt="" />
              </div>
            </div>
            <div className="mt-6 flex gap-6">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
              <img src={LinkedIn} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-14 bg-black border-t-2 border-gray-900
             text-gray-700 flex justify-center items-center gap-2"
      >
        <p>© Copyright SMIT 2024. All right reserved</p>
      </div>
    </>
  );
}
