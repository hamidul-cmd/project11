import React from 'react'

function FaqCard({item, index}) {
  return (
    <>
      <div  className={` p-7.5 space-y-3 xll:p-12.5 3xl:p-14.5 3xl:space-y-4 ${
          (index === 0 &&
            "border-b-2 border-dashed border-dark-15 ll:border-r-2") ||
          (index === 1 &&
            "border-b-2 border-dashed border-dark-15") ||
          (index === 2 &&
            "border-b-2 border-dashed border-dark-15 ll:border-r-2") ||
          (index === 3 &&
            "border-b-2 border-dashed border-dark-15") ||
          (index === 4 &&
            "border-b-2 border-dashed border-dark-15 ll:border-b-0 ll:border-r-2")
        }`}>
            <h3 className='text-lg font-medium font-roboto text-white l-150 xll:text-xl 3xl:text-2xl'>{item.question}</h3>
            <p className='pera text-gray-50 font-roboto'>{item.answer}</p>
      </div>
    </>
  )
}

export default FaqCard
