import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCartOutline } from "react-icons/io5";
import { data } from "./data.js";
import CrossAir from "./Assets/CORSAIRS.png"

function App() {
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState('');
  return (
    <div className="bg-black">
      <div>
        <img className="mx-auto py-4" src={CrossAir}/>
      </div>
      
  
      <div className="w-full h-[80px] bg-black flex justify-center">
      <Form className="w-[1250px] ">
        <InputGroup className='my-3 h-12 bg-black'>
            <Form.Control 
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Products"
                className="bg-gray-200 text-black"
            />
        </InputGroup>
        </Form>
       </div>

    <div className="bg-black h-full w-full flex justify-center p-4">
      
      
      
      <div className="flex flex-wrap justify-center max-w-7xl">
        {data.filter((item)=>{return search.toLowerCase()===""?item:item.title.toLowerCase().includes(search)}).map((item, index) => (
          <div key={index} className="flex-grow sm:w-1/2 md:w-1/3 p-4">
            <div className="max-w-sm bg-white shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="bg-[#151515]">
                <a>
                  <img className="m-auto py-4" src={item.image} alt={item.title} />
                </a>
              </div>
              <div className="p-8 bg-[#3f3f3f]">
                <a >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 py-4 text-[23px] font-bold text-white dark:text-gray-400">
                  ${item.price}
                </p>
                <p className="mb-3 flex py-2 text-[18px] text-[#ECE81A] hover:text-[#c9c062] cursor-pointer font-bold dark:text-gray-400">
                  <IoCartOutline size={25} /> <span className="px-2">ADD TO CART</span>
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
