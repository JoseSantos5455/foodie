const Sizes = ({ sizes }: { sizes: string[] }) => (
  <>
    <h3 className="font-secondary font-medium mb-2">sizes (Months):</h3>
    <div className="flex space-x-2">
      {sizes.map((size, index) => (
        <Size key={`size-${size}-${index}`} size={size} />
      ))}
    </div>
  </>
);

const Size = ({ size }: { size: string }) => (
  <span className=" w-10 h-10 border hover:bg-gray-200 cursor-pointer border-gray-300 flex font-medium items-center justify-center">
    {size}
  </span>
);

export default Sizes;
