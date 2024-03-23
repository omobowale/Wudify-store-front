import React from 'react'

function HeadingTitle({ title, colorClass = "text-black", textAlignClass = "text-left", fontSizeClass = "text-[24px]" }) {
  return (
    <div className={`${textAlignClass} ${fontSizeClass} font-[600] `}>
      {title}
    </div>
  )
}

export default HeadingTitle