const ItemDiv = ({ item }) => {
  return (
    <div className="text-[#0F1111] m-auto max-w-[180px] max-h-[184px]">
      <img
        className="m-auto max-w-[224px] max-h-[184px] cover object-center aspect-square"
        src={item.image || item.images[0]}
        alt={item.name}
      />
      <div>
        {item.price ? (
          <p className="font-bold text-lg">${item.price}</p>
        ) : (
          <div className="flex flex-col items-start">
            <p className="font-bold text-sm rounded my-3 px-3 py-1 text-white bg-red-500">
              Deal
            </p>
            <p className="font-bold text-lg">
              ${item.newPrice}{' '}
              <span className="font-normal text-sm">
                Old Price:{' '}
                <span className="text-[#565959] text-xs line-through">
                  ${item.oldPrice}
                </span>
              </span>
            </p>
          </div>
        )}
        <p className="line-clamp-1 text-xs">{item.name}</p>
      </div>
    </div>
  );
};

export default ItemDiv;
