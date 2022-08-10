const Colors = ({ colors }: { colors: string[] }) => (
  <>
    <h3 className="font-secondary font-medium mb-2">colors :</h3>
    <div className="flex space-x-2">
      {colors.map((color, index) => (
        <ColorCircle key={`color-${color}-${index}`} color={color} />
      ))}
    </div>
  </>
);

const ColorCircle = ({ color }: { color: string }) => (
  <span style={{ backgroundColor: color }} className="inline-block w-6 h-6 rounded-full" />
);

export default Colors;
