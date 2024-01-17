const Commands = () => {
  return (
    <div className="border p-5">
      <h3 className="text-2xl font-bold">Commands:</h3>
      <ol className="pl-5 mt-10">
        <li className="btn no-animation bg-black text-white text-center mt-1 cursor-pointer">
          1. Create todo "task 1"
        </li>
        <li className="btn no-animation bg-black text-white text-center mt-1 cursor-pointer">
          2. Delete todo "number 10"
        </li>
        <li className="btn no-animation bg-black text-white text-center mt-1 cursor-pointer">
          3. Mark todo "number 10 completed"
        </li>
        <li className="btn no-animation bg-black text-white text-center mt-1 cursor-pointer">
          4. Read all todos
        </li>
      </ol>
    </div>
  );
};

export default Commands;
