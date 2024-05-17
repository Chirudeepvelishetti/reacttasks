import React , {useState} from 'react';
import {Link} from 'react-router-dom';
function Productcomponent(){
const [products , setProducts] = useState([
    {
        id : 1,
        name : 'real me 11',
        image :'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/j/m/11x-5g-rmx3785-realme-original-imagsjx45pgvavdm.jpeg?q=70',
        specifications : [
            '8 gb ram',
            '128 gb rom',
            'amaloid display',
            '5000 mah battery',
            '5 g network support'
        ],
        price : 19000 ,
        rating : '4.1'
    },
    {
        id : 2,
        name : 'IQOO Z7 S',
        image :'https://m.media-amazon.com/images/I/41Vq1rvptWL._SX300_SY300_QL70_FMwebp_.jpg',
        specifications : [
            '8 gb ram',
            '128 gb rom',
            'amaloid display',
            '5000 mah battery',
            '5 g network support'
        ],
        price : 17000 ,
        rating : '4.0'
    },
    {
        id : 3,
        name : 'Samsung m31',
        image :'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/f/y/galaxy-m04-sm-m045f-samsung-original-imagh799vffkjf8t.jpeg?q=70',
        specifications : [
            '8 gb ram',
            '128 gb rom',
            'amaloid display',
            '5000 mah battery',
            '5 g network support'
        ],
        price : 18500,
        rating : '4.3'
    },
    {
        id : 4,
        name : 'REDME NOTE 12 PRO',
        image :'https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UL600_FMwebp_QL65_.jpg',
        specifications : [
            '8 gb ram',
            '128 gb rom',
            'amaloid display',
            '5000 mah battery',
            '5 g network support'
        ],
        price : 22000 ,
        rating : '4.5'
    },
    {
        id : 5,
        name : 'POCO X3',
        image :'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70',
        specifications : [
            '8 gb ram',
            '128 gb rom',
            'amaloid display',
            '5000 mah battery',
            '5 g network support'
        ],
        price : 16500 ,
        rating : '4.4'
    },
    {
        id : 6,
        name : 'realme 11 Pro 5G ',
        image :'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/l/8/d/-original-imagqadpnygfnn2v.jpeg?q=70',
        specifications : [
            '8 gb ram',
            '256 gb rom',
            'oled display',
            '5000 mah battery',
            '5 g network support',
            'Dimensity 7050 Processor'
        ],
        price : 24999 ,
        rating : '4.1'
    },
    {
        id :7,
        name : 'Nothing Phone (1) (White, 256 GB) ',
        image :'https://rukminim2.flixcart.com/image/128/128/l5h2xe80/mobile/4/7/l/-original-imagg4y3grhaxckf.jpeg?q=70',
        specifications : [
            '8 gb ram',
            '256 gb rom',
            '16.64 cm (6.55 inch) Full HD+ Display',
            '4500 mAh Lithium-ion Battery',
            '5 g network support',
            'Qualcomm Snapdragon 778G+ Processor'
        ],
        price : 32499 ,
        rating : '4.3'
    },
    {
        id : 8,
        name : 'APPLE iPhone 14 (Midnight, 128 GB) ',
        image :'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
        specifications : [
            '12MP + 12MP | 12MP Front Camera',
            '128 gb rom',
            '15.49 cm (6.1 inch) Super Retina XDR Display',
            '4500 mAh Lithium-ion Battery',
            '5 g network support',
            'A15 Bionic Chip, 6 Core Processor Processor'
        ],
        price : 67999 ,
        rating : '4.3'
    },
    {
        id : 9,
        name : 'OnePlus 11 5G  ',
        image :'https://m.media-amazon.com/images/I/414+xRBltFL._SX38_SY50_CR,0,0,38,50_.jpg',
        specifications : [
            '8 gb ram',
            '256 gb rom',
            '16.64 cm (6.55 inch) Full HD+ Display',
            '5000 mAh Lithium-ion Battery',
            '5 g network support',
            'Qualcomm Snapdragon 8 Gen 2r'
        ],
        price : 56999 ,
        rating : '4.3'
    }
]);
const sortProducts =(mode)=>{
    if(mode=== 'lowtohigh'){
      const sortedData = products.sort((a,b)=>{
            if(a.price<b.price){
                return -1;
            }else if(a.price>b.price){
                return 1;
            }
            else{
                return 0;
            }
        });
        setProducts([...sortedData]);
        }else{
          const sortedData = products.sort((a,b)=>{
                if(a.price<b.price){
                    return 1;
                }else if(a.price>b.price){
                    return -1;
                }
                else{
                    return 0;
                }
            });
            setProducts([...sortedData]);
        
        }
    
};
 return(
    <div className = "container">
        <div className='row'>
            <div className="col-sm">
            <nav className="navbar navbar-expand-lg bg-secondary text-white mt-4 ">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" style={{cursor:'pointer'}} onClick={()=>sortProducts('lowtohigh')}>Price--Low - High</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" style={{cursor:'pointer'}}onClick={()=>sortProducts('hightolow')}>Price--High - low</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

            </div>

        </div>
        {
        products.map((product)=>(
        <div className="row my-4 py-4 border-bottom bg-success text-white" key={product.name}>
            <div className="col-sm-3">
              <img src={product.image} width="150px"/>
            </div>
            <div className="col-sm-6">
             <h3 style={{cursor:'pointer'}}><Link to={`/product-details/${product.id}`}>{product.name}</Link></h3>
                 <ul className= "ms-4">
                  {product.specifications.map((specification) =>(
                    <li key={specification}>{specification}</li>
                  ))}
                 </ul>
            </div>
            <div className="col-sm-3">
              <h3>{product.price}</h3>
              <button className="btn btn-success bg-primary text-white">Add to Cart</button>
            </div>
        </div>
        ))};
 </div> 
)
}
export default Productcomponent;