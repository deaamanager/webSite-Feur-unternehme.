"use client" ;
import classNames from "classnames";

type Props = {
  itemsLength: number;
  selectedIndex: number;
};

function Dots  ({ itemsLength, selectedIndex }: Props) {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-2  justify-center  z-50 " >
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-3 w-3 lg:h-4 lg:w-4 rounded-full blur-none transition-all duration-300 bg-gray-900/50":
                true,
              "opacity-40": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Dots;