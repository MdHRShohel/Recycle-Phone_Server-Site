import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Context/AuthProvider';


const MyProducts = () => {
    const { user } = useContext(AuthContext);


    //console.log('email', user?.email)


    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['myProducts',user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/my-products/${user?.email}`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })


    // delete product

    const handleDelete = product => {
        fetch(`http://localhost:5000/my-products/${product._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('Product Deleted Successfully')
                    refetch();
                }
            })

    }
    // 
    return (
      <div>
        <h2 className="text-3xl text-center font-semibold  mt-10">
          My products
        </h2>

        <div>
          {myProducts.length === 0 ? (
            <h2 className="text-3xl font-semibold mt-10 text-center">
              You Have not any Products
            </h2>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-5 md:m-20">
              {myProducts.map((product) => (
                <div key={product._id} className="card w-full shadow-xl">
                  <figure>
                    <img className="w-1/2" src={product.photo} alt="Products" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <h2 className="text-xl">
                      Seller Name:{" "}
                      <span className="font-semibold italic text-blue-900">
                        {product.salerName}
                      </span>
                    </h2>
                    <h2 className="text-xl">
                      Sale Price:{" "}
                      <span className="font-semibold italic text-blue-900">
                        {product.resalePrice} BDT
                      </span>
                    </h2>
                    <div className="flex justify-evenly mt-10">
                      <Link onClick={() => handleDelete(product)}>
                        <button className="btn bg-red-700 btn-xs">Delete</button>
                      </Link>
                      <Link>
                        <button className="btn bg-green-800 btn-xs mx-2">
                          Available
                        </button>
                      </Link>
                      <Link to={`/products/sp/${product._id}`}>
                        <div className="card-actions">
                          <button className="btn btn-primary btn-xs">
                            See Details
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
};

export default MyProducts;