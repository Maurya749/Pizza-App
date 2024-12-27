import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../firebase/FirebaseConfig';
import Modal from './Modal'
import  { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItems = cartItems.reduce((count, item) => count + item.qty, 0);

  const toggleCart = () => setActiveCart(!activeCart);


  /**========================================================================
   *!                           Payment Intigration
   *========================================================================**/ 

   const [name, setName] = useState("")
   const [address, setAddress] = useState("");
   const [pincode, setPincode] = useState("")
   const [phoneNumber, setPhoneNumber] = useState("")
 
   const buyNow = async () => {
     if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
       return toast.error("All fields are required", {
         position: "top-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
       })
     }
 
     const addressInfo = {
       name,
       address,
       pincode,
       phoneNumber,
       date: new Date().toLocaleString(
         "en-US",
         {
           month: "short",
           day: "2-digit",
           year: "numeric",
         }
       )
     }
 
     var options = {
       key: "rzp_test_BgUEV13hoRSmWO",
       key_secret: "7HgdCgwVYZOqoudvn6t4QTAB",
       amount: parseInt(totalAmount * 100),
       currency: "INR",
       order_receipt: 'order_rcptid_' + name,
       name: "Pizza-App",
       description: "for testing purpose",
       handler: function (response) {
         console.log(response)
         toast.success('Payment Successful')
 
         const paymentId = response.razorpay_payment_id;
 
         const orderInfo = {
           cartItems,
           addressInfo,
           date: new Date().toLocaleString(
             "en-US",
             {
               month: "short",
               day: "2-digit",
               year: "numeric",
             }
           ),
           email: JSON.parse(localStorage.getItem("user")).user.email,
           userid: JSON.parse(localStorage.getItem("user")).user.uid,
           paymentId
         }
 
         try {
 
           const orderRef = collection(fireDB, 'order');
           addDoc(orderRef, orderInfo);
 
         } catch (error) {
           console.log(error)
         }
       },
 
       theme: {
         color: "#3399cc"
       }
     };
 
     var pay = new window.Razorpay(options);
     pay.open();
     console.log(pay)
 
 
   }
 






//  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-full lg:w-[20vw] bg-white p-5 
          ${activeCart ? "translate-x-0" : "translate-x-full"}  
          transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="ml-2 font-bold text-xl text-gray-800">My Order</span>
          <IoMdClose
            onClick={toggleCart}
            className="cursor-pointer border-4 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300"
            aria-label="Close Cart"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCart
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          )) 
        ) : (
          <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
        )}

        <div className="absolute bottom-0 w-full">
          <h3 className="font-semibold text-gray-800">Total Amount: ₹{totalAmount}</h3>
          <h3 className="font-semibold text-gray-800">Items: {totalItems}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          {/* <button
                  //  onClick={() => navigate("/sucess")}

                  onClick={}

            className="bg-green-500 font-bold px-3 text-white py-3 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button> */}

           {/* <Modal  /> */}
           <Modal
              name={name}
              address={address}
              pincode={pincode}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
        </div>
      </div>

      <MdOutlineShoppingCart
        
        onClick={toggleCart}
        
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4
        
        ${totalItems > 0 && "animate-bounce deley-500 transition-all" }`}
        />
    </>
  );
};

export default Cart;


  