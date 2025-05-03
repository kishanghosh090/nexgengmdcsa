import { ShineBorder } from "@/components/magicui/shine-border";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function Clubs() {
  const Clubs = [
    {
      name: "Cypher CC",
      President: "Soumyadip Das",
      Secretary: "Tina Ghosh",
      EventCo: " Shoumyanil Biswas",
    },
    {
      name: "Cultural Society",
      President: " Shoumyanil Biswas",
      Secretary: "Ananya Rishi",
      EventCo: "Snigdha Karmakar",
    },
    {
      name: "Sports Association",
      President: "Divyajit Singha",
      Secretary: "Soumyajit Santra",
      EventCo: "Hiranmay Sarkar",
    },
  ];

  return (
    <div className="w-full  flex items-center justify-center flex-col border-t border-zinc-800">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans mt-10 ">
        Our Clubs
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-4 p-6">
        {Clubs.map((club, index) => {
          return (
            <CardContainer className="inter-var rounded-xl py-6 cursor-pointer ">
              <ShineBorder
                shineColor={"white"}
                duration={(index + 100) * 0.1}
              />
              <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-center items-start gap-3 ">
                <CardItem className="text-2xl md:text-3xl text-center  flex justify-center">
                  <h1 className="font-bold text-2xl md:text-3xl text-center mb-10">
                    {club.name}
                  </h1>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl  text-neutral-300 flex gap-2"
                >
                  <h1 className="font-bold">President: </h1>
                  <span>{club.President}</span>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl  text-neutral-300 flex gap-2"
                >
                  <h1 className="font-bold">Secretary: </h1>
                  <span>{club.Secretary}</span>
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl  text-neutral-300 flex gap-2"
                >
                  <h1 className="font-bold">EventCo: </h1>
                  <span> {club.EventCo}</span>
                </CardItem>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-6 mt-4 p-4">
        <CardContainer className="inter-var rounded-xl py-6 cursor-pointer w-[94vw]">
          <ShineBorder shineColor={"white"} />
          <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-center items-start gap-3 ">
            <CardItem className="text-2xl md:text-3xl text-center  flex justify-center">
              <h1 className="font-bold text-2xl md:text-3xl text-center mb-10">
                Founders & Governing body
              </h1>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl  text-neutral-300 flex gap-2"
            >
              <h1 className="font-bold">Ex. Presindent: </h1>
              <span>Suvradip Sinha</span>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl  text-neutral-300 flex gap-2"
            >
              <h1 className="font-bold">Ex. Vice-Presindent: </h1>
              <span>Provangshu Saha</span>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl  text-neutral-300 flex gap-2"
            >
              <h1 className="font-bold">Ex. Secretary: </h1>
              <span> Subhradeep Ray</span>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl  text-neutral-300 flex gap-2"
            >
              <h1 className="font-bold">Ex. Event Coordinator: </h1>
              <span> Samiran Roy</span>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl  text-neutral-300 flex gap-2"
            >
              <h1 className="font-bold">Member of GB: </h1>
              <span> Aditi Ghosh</span>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl  text-neutral-300 flex gap-2"
            >
              <h1 className="font-bold">Member of GB: </h1>
              <span> Supriya Karmakar</span>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl  text-neutral-300 flex gap-2"
            >
              <h1 className="font-bold">Member of GB: </h1>
              <span> Bibek Das</span>
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-xl  text-neutral-300 flex gap-2"
            >
              <h1 className="font-bold">Member of GB: </h1>
              <span> Indranil Sarkar</span>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}

export default Clubs;
