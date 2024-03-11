
import React, { useState } from 'react';

const MenuTab = ({ category, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 mx-2 text-sm font-medium ${
        active ? 'bg-orange-500 rounded-xl text-white' : 'text-gray-700 hover:bg-gray-200'
      }`}
    >
      {category}
    </button>
  );
};
const MenuItem = ({ title, category, description, price, imageSrc }) => {
  return (
    <div className="mb-8">
      <div className="w-full h-48 overflow-hidden mb-2">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-blue-500 mt-2 font-bold">${price}</p>
    </div>
  );
};

const ChefCreations = () => {
  const [activeTab, setActiveTab] = useState('All');
  const menuItems = [
    { title: 'Special Burger', category: 'Burger', description: 'Delicious burger creation...', price: '12.99', imageSrc: 'https://t4.ftcdn.net/jpg/02/74/99/01/360_F_274990113_ffVRBygLkLCZAATF9lWymzE6bItMVuH1.jpg' },
    { title: 'Fruit Punch', category: 'Drinks', description: 'Refreshing fruit punch...', price: '4.99', imageSrc: 'https://s3-alpha-sig.figma.com/img/de6e/ace1/120cd7f688bdaee2a06eb99c4d5a276b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QI-e3mZl96PgEQYh49o2w3FLOo68KsdoCAnhAd5OHfQdmRo5JvoQX6Us-CNmMqYw-ZBO-Zur2HPQSSiDY0GRemA8CMSG53Wi6sE6pYlerIzHjG0z3OSQ4u~rdtcF739yFzj24CmVDKpqfqC6Nps06fCb4JGOZpFeXbZpf3-D9wPZUd8-sG396wyMndMeOxVlW8zW-yfKcV1FrzCLyup3kuHO3MUSkntoe8HJy5OZU9Zy2mUHH9WiOtwa4RW~R38p4YotlfedAm-8-7sytsbu461TuIjI7g-xQ7fiHOuZdNPiVz1-31iexUyv3lerMBt5HJX0k8cD0fMOWCj7Ac80OQ__' },
    { title: 'Dalgona', category: 'Drinks', description: 'Refreshing coffe punch...', price: '5.99', imageSrc: 'https://s3-alpha-sig.figma.com/img/74ed/b3ab/c44c901be8354e0bab276340147410fc?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GHkVYvYBrOs6Im-tlxvFFNc2o7C2vey8EtO7PN87xuTZ~7DmMXmdTJvZynxjSHfSaUuNMSB0XMPrEQJc3juNnTYTib-Z5xz3mah-hteK-7dRu6Bu2QF3kLRSBCa0IFxVBVSobSCykaLSRgtXaallWrjMLgw57q0tzgeuswxTlwlpOXUQoy0MGmKmhFiJAbLfrKGGzXS1v4PXd6Cb~5xf~yLC1GlWehYJ0blLnr54PhtAuRFLBSv2jVoY94tcaYkXxCovWEyoSI5UZuCOpOSMMKHHCcmEti9pCruxel7mxXkXB85FT9FVqUrvqZnRAxFqfGgun65WD2WLPD56Hpn5ZQ__' },
    { title: 'coffe', category: 'Drinks', description: 'Refreshing coffe punch...', price: '5.99', imageSrc: 'https://s3-alpha-sig.figma.com/img/8ce2/353b/042a85e3f8c8eae932862a9ef567603e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MeCD5yCJk-kDndt4vXZbr8hyUeanqnkm9IfC2PLXfRlvZlREJrnXkVkIikKWDNZqDffbGAbLlpN8E5sB1Ehiu~-lH~IJFgMfpa971FzHBLmwDgcNUzilEfK88Cj~FDWws~FpCC4fLDC~FX3sux4oPTplLXbsXWBtLP8VjxRKfxQw4~16cWpoo7Cm31dlfc04R9xySHz7LCh1hJlwLJoihpp8oNpCwzUrkiEmfTDyHZFXESc2ED8ujhSMliDUmPotepVYUmKGx1a4PnLUzRmPL3TsDHIcQsLRgPfs8tJHfbeUDPdQg4nt~9SDdt5z3WfM9ZTshR~ZcLwnVzkhE9f-sg__' },
    { title: 'Donut', category: 'Bakery', description: 'Refreshing donut punch...', price: '7.99', imageSrc: 'https://s3-alpha-sig.figma.com/img/8ddd/c4fc/87afc0244c0e5ea4944b4ecfd226da72?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n~qMbOt3qrxICCfDRcvRg9wceY4CQntSANL57Bu-1hlDe9YgQc5d7WPbrxJt~eELAHbrag1CTpmVKt6Id95qxj6ZI4pEkhHa76DVW7nIMqYFk1KNzca04ASwi16-7VcEHEPxp34YujZFUf9OQ5gYskfkzarOKaTa6K--XMW8savyIAVlN16msgbrquRgmnxY2Hc-CYNxMDOPm4EtxAxuknPhd0mW4o-zy8hPY3VEVs5b~zgWV6XbFYBIcdaatOY04HWw0O4lOVFnl6muIwvFsOiSwvzOOfB5XQuT~f2qfFzGNfFjr9ubGX3PJRaX3NPzNWhsvCx8x3RuTCMTKVH2MA__' },
    { title: 'Pizza', category: 'Pizza', description: 'fresh pizza punch...', price: '7.99', imageSrc: 'https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=' },
    { title: 'Dinner', category: 'Dinner', description: 'Refreshing food punch...', price: '7.99', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8pjJXsLpnCTWIPe38GXa_ZQ7UO3OjWrpxpd3w3gAPw&s' },
    { title: 'Cookies', category: 'Cookies', description: 'Refreshing cookie punch...', price: '7.99', imageSrc: 'https://img.freepik.com/free-photo/delicious-cookies-arrangement_23-2150707201.jpg' },
  ];

  const filteredItems = activeTab === 'All' ? menuItems : menuItems.filter(item => item.category === activeTab);

  return (
    <section className="p-4 lg:p-8">
              <h2 className='font-bold text-base font-serif text-orange-700 uppercase'>~~~Showcase</h2>
              <p className='text-3xl font-bold font-serif mt-3'>Our Chefs New Creations</p>
              <p  className="mt-4 text-sm">
              Behold the extraordinary creations born from the synergy of <br/>our users' ingenuity and the transformative power of AI, a testament to boundless innovation.        </p>
      <div className="flex justify-center mb-6 mt-12">
        {['All', 'Burger', 'Drinks', 'Pizza', 'Dinner', 'Lunch', 'Cookies', 'Bakery'].map((category) => (
          <MenuTab
            key={category}
            category={category}
            active={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ChefCreations;
