export default function Add_section() {
  return (
      <form className=" flex flex-col gap-4 w-[50%]">
        <input type="text" placeholder="Input Grade Level" className=" border h-12 rounded-xl outline-0 p-6" />
        <input type="text" placeholder="Input Strand" className=" border h-12 rounded-xl outline-0 p-6" />
        <input type="text" placeholder="Input Section Name" className=" border h-12 rounded-xl outline-0 p-6" />
      </form>
  );
}
