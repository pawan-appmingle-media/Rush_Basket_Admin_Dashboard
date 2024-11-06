import { FaMoneyBill } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { PiClockClockwiseFill } from "react-icons/pi";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-medium mb-2">Dashboard</h1>
      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="flex justify-between bg-yellow-400 p-6 rounded-lg text-center shadow-lg">
          <div>
            <h3 className="text-lg font-semibold mb-2">Pending Orders</h3>
            <p className="text-2xl font-bold">20</p>
          </div>
          <div>
            <span>
              <PiClockClockwiseFill className="text-4xl" />
            </span>
          </div>
        </div>
        <div className="flex justify-between bg-red-500 text-white p-6 rounded-lg text-center shadow-lg">
          <div>
            <h3 className="text-lg font-semibold mb-2">Canceled Orders</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div>
            <span>
              <ImCancelCircle className="text-3xl" />
            </span>
          </div>
        </div>
        <div className="flex justify-between bg-blue-500 text-white p-6 rounded-lg text-center shadow-lg">
          <div>
            <h3 className="text-lg font-semibold mb-2">Processing Orders</h3>
            <p className="text-2xl font-bold">15</p>
          </div>
          <div>
            <span>
              <FaRotate className="text-3xl" />
            </span>
          </div>
        </div>
        <div className="flex justify-between bg-green-500 text-white p-6 rounded-lg text-center shadow-lg">
          <div>
            <h3 className="text-lg font-semibold mb-2">Total Income</h3>
            <p className="text-2xl font-bold">$1200</p>
          </div>
          <div>
            <span>
              <FaMoneyBill className="text-4xl" />
            </span>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delivery Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">12345</td>
              <td className="px-6 py-4">Credit Card</td>
              <td className="px-6 py-4">2024-10-21 10:30 AM</td>
              <td className="px-6 py-4">2024-10-23</td>
              <td className="px-6 py-4">Processing</td>
              <td className="px-6 py-4">$50</td>
              <td className="px-6 py-4">
                <button className="bg-blue-600 text-white px-4 py-1 rounded-md"
                  style={{backgroundColor:'#172552'}}>
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">12346</td>
              <td className="px-6 py-4">PayPal</td>
              <td className="px-6 py-4">2024-10-21 11:00 AM</td>
              <td className="px-6 py-4">2024-10-23</td>
              <td className="px-6 py-4">Pending</td>
              <td className="px-6 py-4">$30</td>
              <td className="px-6 py-4">
                <button className="bg-blue-600 text-white px-4 py-1 rounded-md"
                  style={{backgroundColor:'#172552'}}>
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">12347</td>
              <td className="px-6 py-4">Cash on Delivery</td>
              <td className="px-6 py-4">2024-10-20 09:15 AM</td>
              <td className="px-6 py-4">2024-10-22</td>
              <td className="px-6 py-4">Delivered</td>
              <td className="px-6 py-4">$70</td>
              <td className="px-6 py-4">
                <button className="bg-blue-600 text-white px-4 py-1 rounded-md"
                  style={{backgroundColor:'#172552'}}>
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="">
//       <h1 className="text-4xl text-center p-5 font-semibold">Admin Dashboard</h1>
//       <div className="grid grid-cols-2 lg:grid-cols-4 mt-2 text-2xl gap-5">
//         <p className="p-5 border-2 rounded-2xl text-center">Total Products</p>
//         <p className="p-5 border-2 rounded-2xl text-center">Total Orders</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
