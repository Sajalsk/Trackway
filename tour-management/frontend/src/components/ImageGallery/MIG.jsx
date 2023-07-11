import React from 'react'
import GalleryImg from './galleryimg'
import Masonry  ,{ResponsiveMasonry} from 'react-responsive-masonry'

const MIG = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1 , 768 :3 ,992:4}}>
        <Masonry gutter='1rem'>
        {GalleryImg.map((item,index)=>(
            <img className='.Mimg' src={item} key={index} alt=" " style={{width:"100%" , display:"block" , borderRadius:"10px"}}/>
        ))
        }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MIG;