import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
<footer className={`relative bg-lightGrey pt-8 pb-6 w-full`}>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300" style={{fill:'lightGrey'}}
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full mx-auto px-10`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
         <img
           src={logo}
           alt="Pick My Stay"
           className="w-[266px] h-[72.14px] object-contain"
         />
         <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
         </p>
       </div>
       </div>
      </footer>
  // <div>
  // <div
  //       className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
  //       style={{ height: "80px" }}
  //     >
  //       <svg
  //         className="absolute bottom-0 overflow-hidden"
  //         xmlns="http://www.w3.org/2000/svg"
  //         preserveAspectRatio="none"
  //         version="1.1"
  //         viewBox="0 0 2560 100"
  //         x="0"
  //         y="0"
  //       >
  //         <polygon
  //           className="text-gray-300 fill-current"
  //           points="2560 0 2560 100 0 100"
  //         ></polygon>
  //       </svg>
  //     </div>
  // <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-dark ${styles.paddingX}` }>
  //   <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
  //     <div className="flex-[1] flex flex-col justify-start mr-10">
  //       <img
  //         src={logo}
  //         alt="hoobank"
  //         className="w-[266px] h-[72.14px] object-contain"
  //       />
  //       <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
  //         A new way to make the payments easy, reliable and secure.
  //       </p>
  //     </div>

  //     <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
  //       {footerLinks.map((footerlink) => (
  //         <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
  //           <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
  //             {footerlink.title}
  //           </h4>
  //           <ul className="list-none mt-4">
  //             {footerlink.links.map((link, index) => (
  //               <li
  //                 key={link.name}
  //                 className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
  //                   index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
  //                 }`}
  //               >
  //                 {link.name}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       ))}
  //     </div>
  //   </div>

  //   <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
  //     <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
  //       Copyright Ⓒ 2022 PickMyStay. All Rights Reserved.
  //     </p>

  //     <div className="flex flex-row md:mt-0 mt-6">
  //       {socialMedia.map((social, index) => (
  //         <img
  //           key={social.id}
  //           src={social.icon}
  //           alt={social.id}
  //           className={`w-[21px] h-[21px] object-contain cursor-pointer ${
  //             index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
  //           }`}
  //           onClick={() => window.open(social.link)}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // </section>
  // </div>
);

export default Footer;