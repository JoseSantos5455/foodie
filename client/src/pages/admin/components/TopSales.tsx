const TopSales = () => {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <div className="border-b-2 border-gray-100 dark:border-nero  pb-4 mb-4">
        <h3 className="font-semibold text-greyAD dark:text-gray-50 capitalize">top sales</h3>
      </div>
      {Array(4)
        .fill({})
        .map((index) => (
          <div
            key={`orders-${index}`}
            className="border-b border-gray-100 dark:border-nero pb-4 mb-2 flex items-center justify-between"
          >
            <div className="rounded-full justify-self-center w-16 h-16 bg-gray-100"></div>
            <div>
              <h3 className="font-semibold text-greyAD dark:text-gray-200 capitalize text-base mb-4">Product Name</h3>
              <h2 className="font-bold text-base dark:text-white">12.25$</h2>
            </div>
            <p className="font-semibold dark:text-white">12.k</p>
          </div>
        ))}
    </div>
  );
};

export default TopSales;
