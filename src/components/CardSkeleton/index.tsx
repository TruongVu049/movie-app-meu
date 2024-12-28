const CardSkeleton = () => {
  return (
    <div className={"animate-pulse"}>
      <div className="h-72 2xl:h-80 bg-gray-600 rounded-3xl"></div>
      <div className="font-medium h-4 mt-2 bg-gray-600 rounded-full"></div>
    </div>
  );
};

export default CardSkeleton;
