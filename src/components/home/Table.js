import React from "react";
import "./Table.css";

function Table() {
  return (
    <div
      className="table-contents table-responsive"
      style={{
        marginLeft: "5px",
        marginRight: "20px",
        width: "auto",
      }}
    >
      <table className="table table-borderless table-md">
        <thead>
          <tr>
            <th scope="col-md" className="table-head">
              Id Name
            </th>
            <th scope="col-md" className="table-head">
              Type
            </th>
            <th scope="col-md" className="table-head">
              Campaign
            </th>
            <th scope="col-md" className="table-head">
              Total Blast
            </th>
            <th scope="col-md" className="table-head">
              Status
            </th>
            <th scope="col-md" className="table-head">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="data-table">MTN_EGY_LIFE</td>
            <td className="data-table">Call</td>
            <td className="data-table">Remainding Billing 20 September</td>
            <td className="data-table">1255</td>
            <td className="data-table" style={{color: "#61C378"}}>Success</td>
            <td className="data-table">July 15, 2018 4:47 AM</td>
          </tr>
          <tr>
            <td className="data-table">MTN_BCA</td>
            <td className="data-table">Call</td>
            <td className="data-table">Remainding Billing 20 September</td>
            <td className="data-table">600</td>
            <td className="data-table" style={{color: "#DA5E5B"}}>Failed</td>
            <td className="data-table">August 3, 2012 5:26 PM</td>
          </tr>
          <tr>
            <td className="data-table">RTL1_BPNA</td>
            <td className="data-table">SMS</td>
            <td className="data-table">Pengingat Pagi</td>
            <td className="data-table">121223</td>
            <td className="data-table" style={{color: "#F3A356"}}>Pending</td>
            <td className="data-table">October 12, 2018 1:47 AM</td>
          </tr>
          <tr>
            <td className="data-table">KUI_AICE</td>
            <td className="data-table">Email</td>
            <td className="data-table">Test</td>
            <td className="data-table">958433</td>
            <td className="data-table" style={{color: "#41AFFF"}}>Progress</td>
            <td className="data-table">March 13, 2016 5:25 PM</td>
          </tr>
          <tr>
            <td className="data-table">MTN_EGY_LIFE</td>
            <td className="data-table">Call</td>
            <td className="data-table">Remainding Billing 20 September</td>
            <td className="data-table">1255</td>
            <td className="data-table" style={{color: "#61C378"}}>Success</td>
            <td className="data-table">July 15, 2018 4:47 AM</td>
          </tr>
          <tr>
            <td className="data-table">MTN_BCA</td>
            <td className="data-table">Call</td>
            <td className="data-table">Remainding Billing 20 September</td>
            <td className="data-table">600</td>
            <td className="data-table" style={{color: "#DA5E5B"}}>Failed</td>
            <td className="data-table">August 3, 2012 5:26 PM</td>
          </tr>
          <tr>
            <td className="data-table">RTL1_BPNA</td>
            <td className="data-table">SMS</td>
            <td className="data-table">Pengingat Pagi</td>
            <td className="data-table">121223</td>
            <td className="data-table" style={{color: "#F3A356"}}>Pending</td>
            <td className="data-table">October 12, 2018 1:47 AM</td>
          </tr>
          <tr>
            <td className="data-table">KUI_AICE</td>
            <td className="data-table">Email</td>
            <td className="data-table">Test</td>
            <td className="data-table">958433</td>
            <td className="data-table" style={{color: "#41AFFF"}}>Progress</td>
            <td className="data-table">March 13, 2016 5:25 PM</td>
          </tr>
          <tr>
            <td className="data-table">MTN_EGY_LIFE</td>
            <td className="data-table">Call</td>
            <td className="data-table">Remainding Billing 20 September</td>
            <td className="data-table">1255</td>
            <td className="data-table" style={{color: "#61C378"}}>Success</td>
            <td className="data-table">July 15, 2018 4:47 AM</td>
          </tr>
          <tr>
            <td className="data-table">MTN_BCA</td>
            <td className="data-table">Call</td>
            <td className="data-table">Remainding Billing 20 September</td>
            <td className="data-table">600</td>
            <td className="data-table" style={{color: "#DA5E5B"}}>Failed</td>
            <td className="data-table">August 3, 2012 5:26 PM</td>
          </tr>
          <tr>
            <td className="data-table">RTL1_BPNA</td>
            <td className="data-table">SMS</td>
            <td className="data-table">Pengingat Pagi</td>
            <td className="data-table">121223</td>
            <td className="data-table" style={{color: "#F3A356"}}>Pending</td>
            <td className="data-table">October 12, 2018 1:47 AM</td>
          </tr>
          <tr>
            <td className="data-table">KUI_AICE</td>
            <td className="data-table">Email</td>
            <td className="data-table">Test</td>
            <td className="data-table">958433</td>
            <td className="data-table" style={{color: "#41AFFF"}}>Progress</td>
            <td className="data-table">March 13, 2016 5:25 PM</td>
          </tr>
          <tr>
            <td className="data-table">MTN_EGY_LIFE</td>
            <td className="data-table">Call</td>
            <td className="data-table">Remainding Billing 20 September</td>
            <td className="data-table">1255</td>
            <td className="data-table" style={{color: "#61C378"}}>Success</td>
            <td className="data-table">July 15, 2018 4:47 AM</td>
          </tr>
          <tr>
            <td className="data-table">MTN_BCA</td>
            <td className="data-table">Call</td>
            <td className="data-table">Remainding Billing 20 September</td>
            <td className="data-table">600</td>
            <td className="data-table" style={{color: "#DA5E5B"}}>Failed</td>
            <td className="data-table">August 3, 2012 5:26 PM</td>
          </tr>
          <tr>
            <td className="data-table">RTL1_BPNA</td>
            <td className="data-table">SMS</td>
            <td className="data-table">Pengingat Pagi</td>
            <td className="data-table">121223</td>
            <td className="data-table" style={{color: "#F3A356"}}>Pending</td>
            <td className="data-table">October 12, 2018 1:47 AM</td>
          </tr>
          <tr>
            <td className="data-table">KUI_AICE</td>
            <td className="data-table">Email</td>
            <td className="data-table">Test</td>
            <td className="data-table">958433</td>
            <td className="data-table" style={{color: "#41AFFF"}}>Progress</td>
            <td className="data-table">March 13, 2016 5:25 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
