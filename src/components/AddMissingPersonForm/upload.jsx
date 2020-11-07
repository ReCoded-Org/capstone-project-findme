import React from 'react'
import { close ,upload} from './ImportImg'
  
 
const UploadImg = () => {
    return (
      <div className=" inline-block shadow-sm   ">
        <div className=" relative p-0  overflow-hidden border border-solid border-gray-500 
       rounded-full max-w-full" style={{ width: '200px ', height: '200px' }} type="file">
  
          <img className="rounded-full max-w-full   " src='' alt="" />
  
          <div className="absolute top-1/2 right-60  flex">
            <div className='mr'>
              <label for="file-input">
                <img src={upload} width="25px" height="25px" className='cursor-pointer' />
              </label>
  
              <input id="file-input" type="file" className='hidden'  />
            </div>
  
          </div>
          <div className="absolute top-1/2 right-30  flex">
            <div className='mr'>
              <label for="file-input">
                <img src={close} width="25px" height="25px" className='cursor-pointer' />
              </label>
  
              <input id="file-input" type="file" className='hidden' />
            </div>
  
          </div>
        </div>
      </div>
  
    )
  }


  export default UploadImg