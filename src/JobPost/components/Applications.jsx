import React, { useState } from 'react';
import close from '../../assets/close.svg'
import dots from '../../assets/dots.svg';
import ronald from '../../assets/ronald.png';
import download from '../../assets/download.svg';
import teresa from '../../assets/teresa.png';
import devon from '../../assets/devon.png';
import pluscircle from '../../assets/pluscircle.svg'

const MainContainer = () => {
  const [toggleSort, setToggleSort] = useState(false);
  const [createCol,setCreateCol]=useState(false)
  const [selectedSort, setSelectedSort] = useState('');
  const date = new Date().toUTCString().split(' ').slice(0, 4).join(' ').split(',')[1];
  const utcTime = new Date().toUTCString().split(' ').slice(4).join(' ').split('GMT');

  const handleSortChange = (value) => {
    setSelectedSort(value);
  };

  // Job application data
  const applications = [
    {
      id: 1,
      name: 'Ronald Richards',
      position: 'UI/UX Designer',
      image: ronald,
      experience: '7+ Years Experience',
      education: 'Master Degree',
      applied: 'Jan 23, 2022',
    },
    {
      id: 2,
      name: 'Teresa Webb',
      position: 'Product Designer',
      image: teresa,
      experience: '7+ Years Experience',
      education: 'Master Degree',
      applied: 'Jan 23, 2022',
    },
    {
      id: 3,
      name: 'Devon Lane',
      position: 'User Experience Designer',
      image: devon,
      experience: '7+ Years Experience',
      education: 'Master Degree',
      applied: 'Jan 23, 2022',
    },
    {
      id: 3,
      name: 'Devon Lane',
      position: 'User Experience Designer',
      image: devon,
      experience: '7+ Years Experience',
      education: 'Master Degree',
      applied: 'Jan 23, 2022',
    },
  ];

  const selected = [
    {
      id: 1,
      name: 'Ronald Richards',
      position: 'UI/UX Designer',
      image: ronald,
    },
  ];

  const sortlist = [
    {
      id: 1,
      name: 'Ronald Richards',
      position: 'UI/UX Designer',
      image: ronald,
      experience: '7+ Years Experience',
      education: 'Master Degree',
      applied: 'Jan 23, 2022',
    },
    {
      id: 2,
      name: 'Teresa Webb',
      position: 'Product Designer',
      image: teresa,
      experience: '7+ Years Experience',
      education: 'Master Degree',
      applied: 'Jan 23, 2022',
    },
  ];

  const screening = [
    {
      id: 1,
      name: 'Ronald Richards',
      position: 'UI/UX Designer',
      image: ronald,
      date:date,
      time:utcTime,
    },
  ];

  const handleCreate=()=>{
       setCreateCol(true)
  }

  return (
    <>
      <div className="flex flex-col gap-1 w-[68vw] mx-auto overflow-hidden h-[105vh]">
        <div className="RouteHeading flex gap-1 container mx-auto mt-4">
          <span className="text-[13px] text-[#8d8d8c]">Home /</span>
          <span className="text-[13px] text-[#8d8d8c]">Job /</span>
          <span className="text-[13px] text-[#8d8d8c]">Senior UI/UX Designer /</span>
          <span className="text-[13px] text-blue-800">Application</span>
        </div>
        <div className="container mb-6 flex items-center justify-between w-[90%] relative">
          <h1 className="font-semibold text-xl">Job Applications</h1>
          <div className="btns flex gap-2 items-center justify-center">
            <button className="text-sm">Filter</button>
            <button onClick={() => setToggleSort(!toggleSort)} className="bg-blue-600 text-white text-sm px-2 py-1 rounded-sm">Sort</button>
            <input type="radio" name="" id="" className="size-4" />
            {toggleSort && (
              <div className="flex flex-col z-40 px-4 py-2 gap-2 w-[10vw] h-[16vh] bg-[#ffffff] shadow-sm border-slate-300 border absolute top-10 right-6 rounded-md">
                <h1 className="text-[14px] font-[400] text-[#8d8d8c]">Sort Applications</h1>
                <div className="radios flex flex-col gap-3">
                  <label htmlFor="newest" className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      id="newest"
                      className={`size-4 ${selectedSort === 'newest' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      checked={selectedSort === 'newest'}
                      onChange={() => handleSortChange('newest')}
                    />
                    <span className={`text-[14px] font-[500] text-center ${selectedSort === 'newest' ? '' : 'text-gray-500'}`}>Newest</span>
                  </label>
                  <label htmlFor="oldest" className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="sort"
                      id="oldest"
                      className={`size-4 ${selectedSort === 'oldest' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                      checked={selectedSort === 'oldest'}
                      onChange={() => handleSortChange('oldest')}
                    />
                    <span className={`text-[14px] font-[500] text-center ${selectedSort === 'oldest' ? '' : 'text-gray-500'}`}>Oldest</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 w-[85%] min-h-screen">
          <div className="first bg-[#f7f8f9] px-5 py-4 rounded-sm flex flex-col gap-4 overflow-y-auto hide-scrollbar pb-20">
            <div className="text-sm font-[500] flex items-center justify-between">
              <span className="text-slate-600">All Applications({applications.length})</span>
              <img src={dots} alt="" className='opacity-[0.4]' />
            </div>
            <div className="dataContainer flex flex-col gap-3">
              {applications.map((app) => (
                <div key={app.id} className="min-w-[12vw] min-h-[23vh] bg-[#ffffff] shadow-sm shadow-slate-300 rounded-sm px-3 py-2">
                  <div className="Upper flex gap-2 items-center pb-2">
                    <img src={app.image} alt={app.name} className='size-11' />
                    <div className="username flex flex-col items-between justify-center">
                      <span className="text-[13px]">{app.name}</span>
                      <span className="text-[#8d8d8c] text-[13px]">{app.position}</span>
                    </div>
                  </div>
                  <hr className="w-[98%] text-slate-300 mx-auto my-2" />
                  <ul className="mx-auto px-4 pt-2">
                    <li className="text-[13px] text-[#8d8d8c]" style={{ listStyleType: 'disc' }}>{app.experience}</li>
                    <li className="text-[13px] text-[#8d8d8c]" style={{ listStyleType: 'disc' }}>Education: {app.education}</li>
                    <li className="text-[13px] text-[#8d8d8c]" style={{ listStyleType: 'disc' }}>Applied: {app.applied}</li>
                  </ul>
                  <div className="download flex items-center mt-3 gap-1 relative right-1">
                    <img src={download} alt="Download CV" className='fill-blue-500 size-4' />
                    <span className="text-[13px] text-blue-800">Download Cv</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="second bg-[#f7f8f9] px-5 py-4 rounded-sm flex flex-col gap-4 overflow-y-auto hide-scrollbar pb-20">
            <div className="text-sm font-[500] flex items-center justify-between">
              <span className="text-slate-600">Sortlisted({sortlist.length})</span>
              <img src={dots} alt="" className='opacity-[0.4]' />
            </div>
            <div className="dataContainer flex flex-col gap-3">
              {sortlist.map((app) => (
                <div key={app.id} className="min-w-[12vw] min-h-[23vh] shadow-sm shadow-slate-300 bg-[#ffffff] rounded-sm px-3 py-2">
                  <div className="Upper flex gap-2 items-center pb-2">
                    <img src={app.image} alt={app.name} className='size-11' />
                    <div className="username flex flex-col items-between justify-center">
                      <span className="text-[13px]">{app.name}</span>
                      <span className="text-[#8d8d8c] text-[13px]">{app.position}</span>
                    </div>
                  </div>
                  <hr className="w-[98%] text-slate-300 mx-auto my-2" />
                  <ul className="mx-auto px-4 pt-2">
                    <li className="text-[13px] text-[#8d8d8c]" style={{ listStyleType: 'disc' }}>{app.experience}</li>
                    <li className="text-[13px] text-[#8d8d8c]" style={{ listStyleType: 'disc' }}>Education: {app.education}</li>
                    <li className="text-[13px] text-[#8d8d8c]" style={{ listStyleType: 'disc' }}>Applied: {app.applied}</li>
                  </ul>
                  <div className="download flex items-center mt-3 gap-1 relative right-1">
                    <img src={download} alt="Download CV" className='fill-blue-500 size-4' />
                    <span className="text-[13px] text-blue-800">Download Cv</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

             {/* *********************************************
           * NOTE: This section can be utilized as needed; 
           * however, to verify the 'Create' button 
           * functionality, it has been commented out. 
           ********************************************* */}
        {/* <div className="third bg-[#f7f8f9] px-5 py-4 rounded-sm flex flex-col gap-4 overflow-y-auto hide-scrollbar pb-20">
          <div className="text-sm font-[500] flex items-center justify-between">
            <span className="text-slate-600">Screening({screening.length})</span>
            <img src={dots} alt="" className='opacity-[0.4]' />
          </div>
          <div className="dataContainer flex flex-col gap-3">
            {screening.map((app) => (
              <div key={app.id} className="min-w-[12vw] min-h-[23vh] shadow-sm shadow-slate-300 bg-[#ffffff] rounded-sm px-3 py-2">
            <div className="Upper flex gap-2 items-center pb-2">
              <img src={app.image} alt={app.name} className='size-11' />
              <div className="username flex flex-col items-between justify-center">
                <span className="text-[13px]">{app.name}</span>
                <span className="text-[#8d8d8c] text-[13px]">{app.position}</span>
              </div>
            </div>
            <hr className="w-[98%] text-slate-300 mx-auto my-2" />
            <div className="mx-auto px-1 pt-2">
              <h1 className="text-[#7900BA] text-[13px] font-[500]">Schedule An Interview</h1>
              <div className="round1 relative my-1">
                <h1 className="text-[#7900BA] text-[14px] text-center font-[500] relative right-4 top-2">Round 1</h1>
                <label htmlFor="round1" className='flex items-center justify-between gap-2 my-1'>
                  <input type="radio" name="round1" id="round1" className='size-5'/>
                  <div className="dateTime flex flex-col items-center justify-center">
                    <span className="text-[12px] text-[#7900BA] font-[500]">Date: {app.date}</span>
                    <span className="text-[12px] text-[#7900BA] font-[500]">Time: {app.time}</span>
                  </div>
                  <div className="btns flex flex-col gap-2 items-center justify-center">
                    <button className="bg-slate-200 text-[11px] px-2 py-1 font-[500]">Schedule</button>
                    <button className="bg-slate-200 text-[11px] px-2 py-1 font-[500]">Done</button>
                  </div>
                </label>
                <div className="absolute min-h-[7vh] min-w-[1px] bg-[#8d8d8c] top-[8.8vh] left-[0.63vw]"></div>
              </div>
              <div className="round2 relative">
                <h1 className="text-[#7900BA] text-[14px] text-center font-[500] relative right-4">Round 2</h1>
                <label htmlFor="round2" className='flex items-center gap-6 my-1'>
                  <input type="radio" name="round2" id="round2" className='size-5'/>
                  <div className="dateTime flex flex-col items-center justify-center">
                    <span className="text-[12px] text-[#7900BA] font-[500]">Date: {app.date}</span>
                    <span className="text-[12px] text-[#7900BA] font-[500]">Time: {app.time}</span>
                  </div>
                </label>
                <div className="absolute min-h-[7vh] min-w-[1px] bg-[#8d8d8c] top-[7.5vh] left-[0.63vw]"></div>
              </div>
              <div className="Finalround relative my-4">
                <h1 className="text-[#7900BA] text-[14px] text-center font-[500] relative right-4">Final Round</h1>
                <label htmlFor="roundfinal" className='flex items-center justify-between gap-3 my-1'>
                  <input type="radio" name="roundfinal" id="roundfinal" className='size-5'/>
                  <div className="dateTime flex flex-col items-center justify-center">
                    <span className="text-[12px] text-[#7900BA] font-[500]">Date: {app.date}</span>
                    <span className="text-[12px] text-[#7900BA] font-[500]">Time: {app.time}</span>
                  </div>
                  <div className="btns flex flex-col gap-2 items-center justify-center">
                    <button className="bg-slate-200 text-[11px] px-2 py-1 font-[500]">Done</button>
                  </div>
                </label>
              </div>
              <div className="btns flex gap-2 items-center justify-center">
                    <button className="bg-slate-200 text-[10px] min-h-[4vh] min-w-[6vw]"></button>
                    <button className="bg-slate-200 text-[10px] min-h-[4vh] min-w-[6vw]"></button>
                  </div>
            </div>
          </div> 
            ))}
            {selected.map(selected=>{
              return(
                <div className="min-w-[12vw] min-h-[15vh] bg-[#ffffff] shadow-sm shadow-slate-300 rounded-sm px-3 py-2 mt-8">
                <div className="Upper flex gap-2 items-center pb-2">
                  <img src={selected.image} alt={selected.name} className='size-11' />
                  <div className="username flex flex-col items-between justify-center">
                    <span className="text-[13px]">{selected.name}</span>
                    <span className="text-[#8d8d8c] text-[13px]">{selected.position}</span>
                  </div>
                </div>
                <hr className="w-[98%] text-slate-300 mx-auto my-2" />
                <div className="download flex items-center mt-3 gap-1 relative right-1">
                  <img src={download} alt="Download CV" className='fill-blue-500 size-4' />
                  <span className="text-[13px] text-blue-800">Download Cv</span>
                </div>
              </div>
              )
            })}
          </div>
        </div> */}
        
        {/* This is Create New Column */}
        <div className="third bg-[#f7f8f9] rounded-sm h-fit">
          <div className="text-sm font-[500] flex items-center justify-center">
              <div onClick={handleCreate}  className="w-full min-h-[8vh] flex items-center justify-center gap-3 cursor-pointer">
                <img src={pluscircle} alt="" />
                <span className="">Create New Column</span>
            </div>
          </div>
        </div>  
        </div>

        {/* This is popUp for create new column */}
        {createCol ? (
        <div className="min-h-screen min-w-[99vw] flex items-center justify-center left-0 top-0 absolute z-50 bg-slate-900 " style={{ backgroundColor: 'rgba(77, 77, 77, 0.8)' }}>
          <div className="min-w-[20vw] min-h-[18vh] bg-[#FFFFFF] rounded-md px-6 py-5 flex flex-col gap-4 relative animate-pop-in">
            <h1 className="font-[500] text-[14px]">Add New Column</h1>
            <div className="inputs flex flex-col gap-3">
              <h3 className=" font-[400] text-[12px]">Column Name</h3>
              <input type="text" className="px-3 py-2 border border-slate-200 rounded-sm" />
            </div>
            <div className="btns w-full mx-auto flex items-center justify-between">
              <button className="text-[12px] font-[500] text-[#7900BA] bg-[#DCBDED] px-4 py-2 rounded-sm cursor-pointer" onClick={() => setCreateCol(false)}>Cancel</button>
              <button className="text-[12px] font-[500] bg-[#7900BA] text-[#FFFFFF] px-4 py-2 rounded-sm cursor-pointer">Add Column</button>
            </div>
            <div onClick={() => setCreateCol(false)} className="closeImg bg-[#DCBDED] absolute p-1 rounded-full -top-4 -right-4 cursor-pointer">
              <img src={close} alt="" className="" />
            </div>
          </div>
        </div>
      ) : null}
      </div>
    </>
  );
};

export default MainContainer;

