import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/frontend_assets/assets";

const about = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            corporis, doloremque vel fugiat itaque inventore maxime impedit
            dolorem provident, eligendi magni nihil laboriosam, eveniet sapiente
            consequuntur voluptatem ea? Ex, quas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            dolor voluptates temporibus, consectetur aliquid nesciunt. Nam fuga
            provident in, cupiditate quae reprehenderit ex. Ex consequatur
            aspernatur animi assumenda. Deserunt, ex!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            accusamus amet perspiciatis ab corrupti magnam beatae ut eos
            facilis? Mollitia odio ex asperiores. Non, a? Repellat, mollitia.
            Velit, temporibus minima?
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus sunt vitae in similique corrupti facere voluptatem
            voluptatibus maxime ab debitis animi natus sint, tempore rerum
            temporibus error doloremque laborum vel.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus sunt vitae in similique corrupti facere voluptatem
            voluptatibus maxime ab debitis animi natus sint, tempore rerum
            temporibus error doloremque laborum vel.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus sunt vitae in similique corrupti facere voluptatem
            voluptatibus maxime ab debitis animi natus sint, tempore rerum
            temporibus error doloremque laborum vel.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default about;
