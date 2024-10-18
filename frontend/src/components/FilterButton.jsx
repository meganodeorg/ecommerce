import { useState } from 'react';
import { assets } from '../assets/assets';

const FILTER_ITEMS = [
  { title: 'CATEGORIES', categories: ['Men', 'Women', 'Kids'] },
  { title: 'TYPE', categories: ['Shirt', 'T-Shirt', 'Jeans'] },
];

const FilterButton = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-w-60">
      <p
        className="my-2 text-xl flex items-center  gap-2"
        onClick={() => setShowFilter(!showFilter)}
      >
        <img
          src={assets.dropdown_icon}
          alt="dropdown"
          className={`h-4 sm:hidden ${
            showFilter ? 'transform rotate-90' : 'transform rotate-0'
          }`}
        />
        FILTERS
      </p>
      {FILTER_ITEMS.map((item, index) => (
        <div
          key={index}
          className={`border border-gray-300 pl-5 py-3 my-5 sm:block  ${
            showFilter ? '' : 'hidden'
          } `}
        >
          <p className="mb-3 text-sm font-medium" key={index}>
            {item.title}
          </p>

          {/* {item[index].categories.map((item, index) => (
                <p className="flex gap-2" key={index}>
                  <input className="w-3" type="checkbox" value={item[index]} />
                  {item[index]}
                </p>
              ))} */}
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {item.categories && item.categories.length > 0 ? (
              item.categories.map((category, idx) => (
                <p className="flex gap-2" key={idx}>
                  <input className="w-3" type="checkbox" value={category} />
                  {category}
                </p>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterButton;
