import { assets } from '../assets/assets';

const policy = [
  {
    name: 'Easy Exchange Policy',
    icon: assets.exchange_icon,
    description: 'We offer hassle free exchange policy',
  },
  {
    name: '7 Days Return Policy',
    icon: assets.quality_icon,
    description: 'We offer 7 days easy return policy',
  },
  {
    name: 'Best Customer Service',
    icon: assets.support_img,
    description: '24/7 customer service support',
  },
];

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      {policy.map((item, index) => (
        <div key={index} className="">
          <img src={item.icon} alt={item.name} className="w-12 m-auto mb-5" />
          <p className="font-semibold">{item.name}</p>
          <p className="text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
