
import React from 'react';

const MenuItem = ({ title, description, price, imageSrc }) => {
    return (
        <div className="flex items-center mb-8 border-[1px] rounded-lg m-2 p-2 mt-10">
            <div className='border-[1px] border-dashed border-orange-900 rounded-full p-1 w-12 h-12'>
                <div className="w-10 h-10  rounded-full overflow-hidden  mr-4">
                    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex text-left mb-2">
                    <h3 className="text-xl font-bold mr-2 ml-4">{title}</h3>
                </div>
                <p className="mb-2 mr-2 ml-4 text-xs">{description}</p>
            </div>
            <p className="text-lg font-bold border-[1px] border-dashed border-orange-900 rounded-full pt-2 w-12 h-12 hover:bg-orange-900 hover:text-white bg-slate-200">${price}</p>
        </div>
    );
};

const MenuSection = () => {
    return (
        <div className='mt-16'>
            <h2 className='font-bold text-base font-serif text-orange-700'>~~~Coffee Menu~~~</h2>
            <p className='text-3xl font-bold font-serif mt-3'>Unlocklive Coffee Menu</p>
            <section className="p-4 lg:p-8 flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2">
                    <MenuItem
                        title="Double Espresso x2"
                        description="There are many variations of passages Lorem Ipsum form"
                        price="10"
                        imageSrc="https://s3-alpha-sig.figma.com/img/8ffe/d33c/fc597d5c65b85888d013ccfb799c8fdd?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lVs6DK2jPkbNx-WAkJcSYU~Rtn~FS1QUQZmqhTzUqBFk8McnGMuU8QfNT~TSWvD1q2xpKeTQP8O~ok0IG0ZqxUKl2Ud1fQ10a2NxPs~v9KQjjtX3pd6r~IjDUA6hHojpmZ9O9uAJVKN2Fb0IUn4UZI2uJ5LMhlkbOpxjrM0acivRKAkCAcZgcfzVJAzYUZaMQfHYFz0uVf5~chtjjqjjO9XlQRKbOhlFAY2XeBybSVjpKB0f2k7p3wzT00ASG95FYjXPqIwabc6Nax9imHIRHdaiVA0nXTvEZv7o2b0NsjWBMFva9cf5vJkXGcpOkngC3xZrIcLtHlMMPY0h4LIqhw__"
                    />
                    <MenuItem
                        title="Hazelnut Heaven Latte"
                        description="There are many variations of passages Lorem Ipsum form"
                        price="10"
                        imageSrc="https://s3-alpha-sig.figma.com/img/e382/2b51/c29b49aa1a89ad7c354cd3ee6e076034?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f6hhZ9yaZqyNDcoiWlDQxnfiAjGHCnxR~ti6RdFGJ0Tbt5FHvDPyxPgXJD-kVbbZDjRdBRWGFZSl6vHfA69m0t3jvsYMN5TgRkx6ZzLzizVOmH8li49XjT79NaE-eFPckKrmNgIKoVvQP6cOZrOOSBMNYLRQ~ebN7I3upAcOwxq12hOUobWb39sYTr3mgHciHgN7EaHAFMqz~ixV9bhSKod3GF7QIrZS8lUurhoWdoN9RQFVwdQQUuKQI6hp~PBfkTCvLFxRkTxKW9QzrGA06DAUWq9sjFfEB9AMPhATmjD5WdzSD~N9twZB0fD6MN9mv0Be9webe233OvdEV1la4Q__"
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <MenuItem
                        title="Salted Caramel Cold Brew"
                        description="There are many variations of passages Lorem Ipsum form"
                        price="10"
                        imageSrc="https://s3-alpha-sig.figma.com/img/e382/2b51/c29b49aa1a89ad7c354cd3ee6e076034?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f6hhZ9yaZqyNDcoiWlDQxnfiAjGHCnxR~ti6RdFGJ0Tbt5FHvDPyxPgXJD-kVbbZDjRdBRWGFZSl6vHfA69m0t3jvsYMN5TgRkx6ZzLzizVOmH8li49XjT79NaE-eFPckKrmNgIKoVvQP6cOZrOOSBMNYLRQ~ebN7I3upAcOwxq12hOUobWb39sYTr3mgHciHgN7EaHAFMqz~ixV9bhSKod3GF7QIrZS8lUurhoWdoN9RQFVwdQQUuKQI6hp~PBfkTCvLFxRkTxKW9QzrGA06DAUWq9sjFfEB9AMPhATmjD5WdzSD~N9twZB0fD6MN9mv0Be9webe233OvdEV1la4Q__"
                    />
                    <MenuItem
                        title="Coconut Cream Delight (Summer)"
                        description="There are many variations of passages Lorem Ipsum form"
                        price="10"
                        imageSrc="https://s3-alpha-sig.figma.com/img/581a/d3d0/224071664ab21c5c91a52d45d6c70089?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-1KaI7-WaPl9Lwwk0LJBygdJwgaz6ILOokXyy~FZwPVsQl5L87dteWRjPAapHGGjHURh1ROV-ilVDSl2KS8rMTmv2nTex9ZyR8tj1U08W26JfPHHVhkuaZ2Bxikq0VGoi6w2SBoTniQfzCTv8WqI1X8QQQCke~dSeCTEZBOwUr1F~jwOfiqc5sKa7znqHsx-q~bYS4WdUuOnj0WFM1uP2-jEPpdWTXWIpNJwHNyUv4Ly9yNqvYxO4Hzmc9ri2651gUPHMPqwWPDtVik-Yx9BXg4b5jhKUnzHsDyXoc2TQFA62dljOQVxaVdtGPxKdaoTem27h4ndGWNvpIXOfcBAw__"
                    />
                </div>
            </section>
            <div className='items-center'>
                <button className='  text-orange-900 border-2 border-orange-800 text-xs rounded-lg px-3 py-2'>View all Menus</button>

            </div>
        </div>
    );
};

export default MenuSection;
