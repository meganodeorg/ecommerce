// import { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
import FilterButton from '../components/FilterButton';

const Collection = () => {
  // const { products } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/** Filter Button */}
      <FilterButton />
      {/** Filter Product Button */}
    </div>
  );
};

export default Collection;
