const certificationData = [
  {
    id: 1,
    title: "Certified B Corp",
    content:
      "We meet the highest verified standards of social and environmental performance, transparency and accountability.",
  },
  {
    id: 2,
    title: "Leaping Bunny approved",
    content:
      "Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.",
  },
  {
    id: 3,
    title: "PETA recognition",
    content:
      "We appear on PETA's internationally recognised vegan and cruelty-free lists.",
  },
];

const Certification = () => {
  return (
    <div className="py-[50px] bg-[#f6f5e8]">
      <div className="padding__x py-5 sm:py-[50px] grid grid-cols-1 sm:grid-cols-3 gap-10">
        {certificationData.map((data) => (
          <div
            key={data.id}
            className="text-start lg:text-center flex flex-col"
          >
            <h1 className="text-sm font-medium">{data.title}</h1>
            <p className="text-xs lg:text-sm">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
