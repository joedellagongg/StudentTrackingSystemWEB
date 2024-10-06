export default function Section() {
  const sections = [
    {
      id: "1",
      grade: "11",
      strand: "HUMSS",
      section: "Mactan",
    },
    {
      id: "2",
      grade: "11",
      strand: "HUMSS",
      section: "Mactan",
    },
    {
      id: "3",
      grade: "11",
      strand: "HUMSS",
      section: "Mactan",
    },
    {
      id: "4",
      grade: "11",
      strand: "HUMSS",
      section: "Mactan",
    },
  ];
  return (
    <main className="grid grid-cols-3 p-6 gap-3 justify-center items-center">
      {sections.map((item) => (
        <button
          key={item.id}
          className="bg-[#002147] rounded-xl text-white text-center text-xl h-[150px] 
          hover:bg-white drop-shadow-2xl border hover:text-black"
        >
          <p>
            {item.strand} - {item.grade}
          </p>
          <p>{item.section}</p>
        </button>
      ))}
    </main>
  );
}
