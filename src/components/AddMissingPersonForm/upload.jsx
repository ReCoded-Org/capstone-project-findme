import React from 'react'
import { close ,upload} from './ImportImg'
  
 

const UploadImg = (props) => {
  const{name ,onChange } =props;
  const initialState = { alt: "", src: "" };

  const [{ alt, src }, setPreview] = React.useState(initialState);

  const fileHandler = event => {
    const { files  } = event.target;
    onChange(event);
    setPreview(
      files.length
        ? {
            src: URL.createObjectURL(files[0]),
            alt: files[0].name
          }
        : initialState
    );
  };
  const  resetFile = () =>{
    setPreview(
      initialState
     );
  }
    return (

      
      <div className=" inline-block shadow-sm   ">
        <div className=" relative p-0  overflow-hidden w-56 h-56 md:w-40 md:h-40  lg:w-56 lg:h-56 border border-solid border-gray-500 
       rounded-full max-w-full"  type="file">
  
          <img className="rounded-full w-full h-full  " src={src} alt={alt} />
  
          <div className="absolute top-1/2 right-60  flex">
            <div className='mr'>
              <label htmlFor="file-input">
                <img src={upload} width="25px" height="25px" className='cursor-pointer' />
              </label>
  
              <input type="file" onChange={fileHandler} accept="image/*" id="file-input"  name={name} className='hidden'  />
            </div>
  
          </div>
          <div className="absolute top-1/2 right-30  flex">
            <div className='mr'>
              <label htmlFor="remove-input">
                <img src={close} width="25px" height="25px" className='cursor-pointer' />
              </label>
              <input id="remove-input" onClick={resetFile}  type="button" className='hidden' />
            </div>
  
          </div>
        </div>
      </div>
  
    )
  }


  export default UploadImg