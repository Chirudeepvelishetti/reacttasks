import React from 'react';
import {useState} from 'react';
import { Link , Outlet } from 'react-router-dom';
import {useParams } from 'react-router-dom';

function ProductDetails() {
  const params = useParams();
  const { productId }= params;
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
        rating : '4.1',
        imgUrls :[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/z/j/m/11x-5g-rmx3785-realme-original-imagsjx45pgvavdm.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/s/f/11x-5g-rmx3785-realme-original-imagsjx4cccghuqp.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/5/s/e/11x-5g-rmx3785-realme-original-imagsjx436a5cz6x.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/r/e/11x-5g-rmx3785-realme-original-imagsjx4bmx6vd82.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/3/l/u/11x-5g-rmx3785-realme-original-imagsjx4ecn3y3dq.jpeg?q=70'

        ]
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
        rating : '4.0',
        imgUrls :[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/b/u/z7s-5g-iqz7s-iqoo-original-imagpud6mdn3cvqr.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/u/5/z7s-5g-iqz7s-iqoo-original-imagpud6vjrx3ykj.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/9/z/z7s-5g-iqz7s-iqoo-original-imagpud6xf28wkkw.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/b/u/z7s-5g-iqz7s-iqoo-original-imagpud6mdn3cvqr.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/w/u/5/z7s-5g-iqz7s-iqoo-original-imagpud6vjrx3ykj.jpeg?q=70'
          
        ]
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
        rating : '4.3',
        imgUrls :[
          'https://rukminim2.flixcart.com/image/128/128/ke8uv0w0/mobile/f/k/g/samsung-galaxy-m31-sm-m315fzbhins-original-imafuywtcppnvdzf.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/ke8uv0w0/mobile/f/k/g/samsung-galaxy-m31-sm-m315fzbhins-original-imafuywt2pp2bbrr.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/ke8uv0w0/mobile/f/k/g/samsung-galaxy-m31-sm-m315fzbhins-original-imafuywtk6gs943h.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/ke8uv0w0/mobile/f/k/g/samsung-galaxy-m31-sm-m315fzbhins-original-imafuywt9h7pzkju.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/ke8uv0w0/mobile/f/k/g/samsung-galaxy-m31-sm-m315fzbhins-original-imafuywtgwkzpazr.jpeg?q=70'
          
        ]
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
        rating : '4.5',
        imgUrls :[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/6/l/1/-original-imaghkvu5chqhjwf.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/a/y/-original-imaghkvunwfesg7w.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/f/q/b/-original-imaghkvudcpfndb8.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/d/l/7/-original-imaghkvu3zywvxmg.jpeg?q=70'
        ]
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
        rating : '4.4',
        imgUrls :[
          'https://rukminim2.flixcart.com/image/128/128/kfbfr0w0/mobile/q/y/t/poco-x3-mzb07z0in-original-imafvt36bhyvkats.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/kfcv6vk0/mobile/p/c/m/poco-x3-mzb07z1in-original-imafvtt22xzvykhg.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/kfbfr0w0/mobile/q/y/t/poco-x3-mzb07z0in-original-imafvt369tjwqk2p.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/kfbfr0w0/mobile/q/y/t/poco-x3-mzb07z0in-original-imafvt36gqku9rcn.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/kfbfr0w0/mobile/q/y/t/poco-x3-mzb07z0in-original-imafvt36gnhwwvhg.jpeg?q=70'
          
        ]
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
        rating : '4.1',
        imgUrls :[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/j/r/k/-original-imagszmhfbbjnnuf.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/n/y/g/-original-imagqxx2khfxc4ag.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/s/a/11-pro-5g-rmx3771-realme-original-imagq6asmurhcmu6.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/y/a/q/11-pro-5g-rmx3771-realme-original-imagq6asgkzms3fw.jpeg?q=70'
          
        ]
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
        rating : '4.3',
        imgUrls :[
          'https://rukminim2.flixcart.com/image/128/128/l5h2xe80/mobile/4/7/l/-original-imagg4y3grhaxckf.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/l5h2xe80/mobile/c/x/k/-original-imagg4y3sfjgezzg.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/l5h2xe80/mobile/d/j/t/-original-imagg4y3fgqhdzze.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/l5h2xe80/mobile/0/4/i/-original-imagg4y35recnbfy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/l5h2xe80/mobile/j/j/j/-original-imagg4y3saxve3hy.jpeg?q=70'
          
        ]
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
        rating : '4.3',
        imgUrls :[
          
        ]
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
        rating : '4.3',
        imgUrls :[
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/q/s/z/-original-imaghxcp9m9fmr9e.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/c/c/-original-imagq4y2g2bmygqz.jpeg?q=70',
          'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/u/d/l/-original-imagq4y2gyv5s5gy.jpeg?q=70'

          
        ]
    }
]);
// const selectedProduct = products.find(product=>product.id == productId);
// const [selectedImgUrl, setSelectedImage]=useState(selectedProduct.imgUrls[0]);
// const selectImage=(imgUrl)=>{
//   setSelectedImage=(imgUrl);
// }
//  return(
// <div className='container'>
// <div className='row'>
// <div className='col-sm-2'>
// {selectedProduct.imgUrls.map(imgUrl => (
//   <div className='border-text-center my-2' style = {{width:"100px"}}>
//   <img src={imgUrl} width="70px" className='my-2' onClick={() => selectImage(imgUrl)}/>
//   </div>
// ))
// }
// </div>
// <div className='col-sm-10'>
// <div className='row my-5'>
// <div className='col-sm-6'>
// <img src ={selectedImgUrl} width="300px"/>
// </div>
// <div className='col-sm-6'>
// </div>
// </div>
// </div>
// </div>
// </div>
//  )
const selectedProduct = products.find(product => product.id == productId);
console.log(selectedProduct);
const [selectedImgUrl, setSelectedImgUrl] = useState(selectedProduct.imgUrls[0]);
const selectImage = (imgUrl) => {
    setSelectedImgUrl(imgUrl);
}
return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-2'>
                {selectedProduct.imgUrls.map(imgUrl => (
                    <div className='border text-center my-2' style={{width: '100px'}}>
                        <img src={imgUrl} width="70px" className='my-2' onClick={() => selectImage(imgUrl)}/>
//                     </div>
                ))}
            </div>
            <div className='col-sm-10'>
                <div className='row my-5'>
                    <div className='col-sm-4'>
                        <img src={selectedImgUrl} width="300px"/>
                    </div>
                    <div className='col-sm-8'>
                            <h3 style={{cursor: 'pointer'}}>{selectedProduct.name}</h3>
                            <ul className="ms-4">
                                {selectedProduct.specifications.map(specification => (
                                    <li key={specification}>{specification}</li>
                                ))}
                            </ul>
                            <h4 className='my-2'>{selectedProduct.price}</h4>
                            <button className='btn btn-primary'>Add to Cart</button>
                            <nav class="navbar navbar-expand-lg bg-body-tertiary my-4">
                            <div class="container-fluid">
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                        <Link class="nav-link active" to={`/product-details/${productId}/description`}>Product Description</Link>
                                        <Link class="nav-link" to={`/product-details/${productId}/specifications`}>Product Specifications</Link>
                                        <Link class="nav-link" to={`/product-details/${productId}/rating-reviews`}>Rating & Reviews</Link>
                                        {/* <Link class="nav-link">Frequently Bought together</Link>
                                        <Link class="nav-link">Question & Answers</Link> */}
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ProductDetails; 