type Props = {
  colors: string[];
  selectedColor: string | null;
  setSelectedColor: (size: string) => void;
};

type ColorProps = {
  color: string;
  selectedColor?: boolean;
  setSelectedColor?: (size: string) => void;
};

const Colors = ({ colors, selectedColor, setSelectedColor }: Props) => (
  <>
    <h3 className="font-secondary font-medium mb-2">colors :</h3>
    <div className="flex space-x-2">
      {colors.map((color, index) => (
        <ColorCircle
          selectedColor={color === selectedColor}
          setSelectedColor={setSelectedColor}
          key={`color-${color}-${index}`}
          color={color}
        />
      ))}
    </div>
  </>
);

export const ColorCircle = ({ color, selectedColor, setSelectedColor }: ColorProps) => (
  <span
    onClick={!!setSelectedColor ? () => setSelectedColor(color) : undefined}
    style={{ backgroundColor: color, borderColor: selectedColor ? '#222' : 'transparent' }}
    className="inline-block w-6 h-6 rounded-full border-2"
  />
);

export default Colors;
