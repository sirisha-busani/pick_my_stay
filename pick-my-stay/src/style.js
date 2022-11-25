const styles = {
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexJustifyStart: "flex justify-start items-start",
    tabs:"border rounded-full border-lightGrey border-solid p-2 mr-2 mb-2",
    heading2: " font-semibold xs:text-[40px] text-[32px] xs:leading-[66px] leading-[56px] w-full",
    heading3: " font-semibold xs:text-[36px] text-[28px] xs:leading-[46px] leading-[36px] w-full",
    paragraph: " font-normal text-[18px] leading-[30px]",
    paddingY: "sm:py-16 py-6",
    inputStyle:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
}

export const layout = {
    section: `flex md:flex-row flex-col py-2 bg-gray-100 px-6 my-10  mb-20 mx-2 shadow-lg rounded-[20px]`,
    sectionReverse: `flex md:flex-row flex-col-reverse py-2 bg-gray-100 px-6 my-10 mx-2 shadow-lg rounded-[20px]`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col `,
  };

export default styles;