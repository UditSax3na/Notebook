import '@/styles/BackSingle.css';

const BackSingle = () => {
  return <>
      <div className="flex justify-center outerbox ">
        <div className='centerbox absolute top-8 z-1'></div>
      </div>
      <div className="bg-white rounded-2xl z-2 rings items-1 absolute"></div>
      <div className="bg-white rounded-2xl z-2 rings items-2 absolute"></div>
      <div className="bg-white rounded-2xl z-2 rings items-3 absolute"></div>
      <div className="bg-white rounded-2xl z-2 rings items-4 absolute"></div>
      <div className="bg-white rounded-2xl z-2 rings items-5 absolute"></div>
      <div className="bg-white rounded-2xl z-2 rings items-6 absolute"></div>
  </>
}

export default BackSingle;