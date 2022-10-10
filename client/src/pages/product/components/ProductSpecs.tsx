type SpecsProps = {
  specs: {
    countryOfProduction: string;
    model: string;
    weight: string;
  };
};

const ProductSpecs = ({ specs }: SpecsProps) => {
  return (
    <div>
      <div className="mb-6 pb-2 border-b border-gray-200">
        <h3 className="font-main font-bold">Product Specs</h3>
      </div>
      {specs.countryOfProduction && (
        <div className="flex items-center space-x-2">
          <h4 className="font-bold">Country of production:</h4>
          <h4>{specs.countryOfProduction}</h4>
        </div>
      )}
      {specs.model && (
        <div className="flex items-center space-x-2">
          <h4 className="font-bold">model:</h4>
          <h4>{specs.model}</h4>
        </div>
      )}
      {specs.weight && (
        <div className="flex items-center space-x-2">
          <h4 className="font-bold">weight:</h4>
          <h4>{specs.weight} kg</h4>
        </div>
      )}
    </div>
  );
};

export default ProductSpecs;
