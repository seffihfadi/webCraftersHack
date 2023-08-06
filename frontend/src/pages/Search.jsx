import React ,{ useState,useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../components'
import { ProviderCard } from '../components/ProviderCard'
import { client } from '../config/sanity'
import { useSnapshot } from 'valtio'
import state from '../store/index'
export const Search = () => {
    const snap = useSnapshot(state)
    const [active,setActive] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All','Expert','Worker','Transportation','Rental of machines and tools']
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        // Fetch providers based on selected category
        fetchProviders(selectedCategory);
      }, [selectedCategory]);
    
      const fetchProviders = async (category) => {
        try {
            let query = `*[_type == 'users']`;
            if (category !== 'All') {
                query += ` && providers.service in ['${category}']`;
            }
            const response = await client.fetch(query);
            setProviders(response);
            
        } catch (error) {
            console.error('Error fetching providers:', error);
        }
    };
    
    const farmerName = snap?.farmerName

  return (
    <div className="dashboard">
        <nav>
            <Logo/>
            <NavLink activeclassname='active' to='/dashboard'>
                <span className="material-symbols-rounded">home</span>
                <h5>Dashboard</h5>
            </NavLink>
            <NavLink activeclassname='active' to='/search'>
                <span className="material-symbols-rounded">search</span>
                <h5>Search</h5>
            </NavLink>
        </nav>
        <div className='w-full bg-[#00231D] text-white'>
            <div className='flex flex-col items-center'> 
                <h2 className='text-3xl mx-auto py-10 '> Hello {farmerName}  </h2>
                    <div className='hidden md:flex gap-2 '>
                        <div className='flex gap-4'>
                            {   
                                categories.map((ele,index)=>(
                                    <button key={index} className=' btn-primary' onClick={async () => {
                                        setSelectedCategory(ele)
                                        await fetchProviders(ele)
                                    }} > {ele} </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='md:hidden relative' onClick={()=>{setActive(!active)}}>
                        <i className='material-symbols-rounded hover:cursor-pointer'>menu</i>
                        {active && 
                            <div className='absolute rounded-3xl  w-[250px] left-[-110px] h-[250px] top-10 bg-[#032F3C] text-white z-50' >
                                <div className='flex flex-col justify-evenly h-full items-center'>
                                    {   
                                        categories.map((ele,index)=>(
                                            <button key={index} onClick={() =>{
                                                setSelectedCategory(ele)
                                                setProviders(selectedCategory)
                                                }}> {ele}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                        
                    </div>
            </div>
                <div className='flex flex-wrap justify-center gap-14 m-14'>
                    {providers && providers.map((provider,index) => (
                        <div key={index}>
                            <ProviderCard  id={provider?.uniqID}/>
                            {console.log('selected categorie : '+ selectedCategory)}
                        </div>
                    ))}
                </div>
        </div>
     </div>
  )
}
