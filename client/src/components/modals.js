export default function Add_section() {
  return (
    <form className=" flex flex-col gap-2 w-[50%] text-sm">
      <p className=" font-bold">Strand:</p>
      
      <input
        type="text"
        placeholder="Input Strand"
        className=" border h-12 rounded-xl outline-0 p-4"
      />
      <p className=" font-bold">Grade Level:</p>
      <input
        type="text"
        placeholder="Input Grade Level"
        className=" border h-12 rounded-xl outline-0 p-4"
      />
     <p className=" font-bold">Section:</p>
      <input
        type="text"
        placeholder="Input Section Name"
        className=" border h-12 rounded-xl outline-0 p-4"
      />
    </form>
  );
}
