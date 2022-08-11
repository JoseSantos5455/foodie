type Props = {
  sizes: string[];
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
};

type SizeProps = {
  size: string;
  selectedSize?: boolean;
  setSelectedSize?: (size: string) => void;
};

const Sizes = ({ selectedSize, setSelectedSize, sizes }: Props) => (
  <>
    <h3 className="font-secondary font-medium mb-2">sizes (Months):</h3>
    <div className="flex space-x-2">
      {sizes.map((size, index) => (
        <Size
          selectedSize={size === selectedSize}
          setSelectedSize={setSelectedSize}
          key={`size-${size}-${index}`}
          size={size}
        />
      ))}
    </div>
  </>
);

export const Size = ({ size, setSelectedSize, selectedSize }: SizeProps) => (
  <span
    onClick={!!setSelectedSize ? () => setSelectedSize(size) : undefined}
    style={{ borderColor: selectedSize ? '#222' : 'transparent' }}
    className="border-2 w-10 h-10 border hover:bg-gray-200 cursor-pointer border-gray-300 flex font-medium items-center justify-center"
  >
    {size}
  </span>
);

export default Sizes;
