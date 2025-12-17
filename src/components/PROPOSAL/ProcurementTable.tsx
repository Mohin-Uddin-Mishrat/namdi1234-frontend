// import React, { useState } from 'react';

// interface TableRow {
//   sl: string;
//   packageNo: string;
//   description: string;
//   qty: string;
//   unitType: string;
//   unitPrice: string;
//   amount: string;
//   vat: string;
//   totalAmount: string;
//   ait: string;
//   netAmount: string;
//   totalPayment: string;
//   remarks: string;
// }

// const ProcurementTable: React.FC = () => {
//   const [searchTerm] = useState('');

//   const data: TableRow[] = [
//     { sl: "Ch-01(CWE-21-5-25)", packageNo: "01. package", description: "Tk Pakistan diesel bridge package", qty: "1.5", unitType: "3×225 (Amp)", unitPrice: "1800", amount: "350", vat: "4", totalAmount: "5418000", ait: "1641000", netAmount: "3348.26", totalPayment: "5820285", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-26)", packageNo: "02", description: "tk i india", qty: "1.5", unitType: "3×225(Amp)", unitPrice: "2400", amount: "350", vat: "6", totalAmount: "20760000", ait: "2594100", netAmount: "3454.61", totalPayment: "23198.11", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-25)", packageNo: "03", description: "27×AL bridge water and other small groups in the house", qty: "2", unitType: "4×225(Amp)", unitPrice: "2400", amount: "350", vat: "8", totalAmount: "2748000", ait: "3212500", netAmount: "962.75", totalPayment: "3725772", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-23)", packageNo: "04", description: "27×AL bridge, water and other small groups in the house", qty: "2.5", unitType: "5×225(Amp)", unitPrice: "2600", amount: "350", vat: "10", totalAmount: "3149100", ait: "3612100", netAmount: "974287.5", totalPayment: "4165623.5", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-26)", packageNo: "05", description: "Te- bridge -2(vr cable wire and other small groups in the house", qty: "3", unitType: "6×225(Amp)", unitPrice: "4200", amount: "550", vat: "12", totalAmount: "4350000", ait: "6038000", netAmount: "680700", totalPayment: "5236700", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-24)", packageNo: "06", description: "Te- bridge -2 (cable wire and other small groups in the house)", qty: "3.5", unitType: "8×225(Amp)", unitPrice: "4200", amount: "550", vat: "12", totalAmount: "4311000", ait: "5232600", netAmount: "746160", totalPayment: "6199160", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-27)", packageNo: "07", description: "Cable wire and other small groups", qty: "4.2", unitType: "3000", unitPrice: "7300", amount: "350", vat: "27", totalAmount: "4798100", ait: "5260420", netAmount: "789327.3", totalPayment: "5897747.3", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-25)", packageNo: "08", description: "Cable wire, relations and other small email groups in the", qty: "5", unitType: "6000", unitPrice: "13290", amount: "550", vat: "25", totalAmount: "6777600", ait: "7352500", netAmount: "3698800", totalPayment: "8348000", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-6)", packageNo: "09", description: "Padma oil, relations, rice machine, etc.", qty: "7.5", unitType: "9100", unitPrice: "18130", amount: "580", vat: "25", totalAmount: "9047700", ait: "10396700", netAmount: "1014002.5", totalPayment: "10476.5", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-7)", packageNo: "10", description: "Electricity and water pumping station (2000 mm dia and electricity)", qty: "9", unitType: "26000", unitPrice: "22400", amount: "580", vat: "45", totalAmount: "10200000", ait: "16710200", netAmount: "2197350", totalPayment: "18221350", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-8)", packageNo: "11", description: "Water pumping station and subassement", qty: "16", unitType: "26000", unitPrice: "24400", amount: "580", vat: "60", totalAmount: "13809000", ait: "16484800", netAmount: "2.88800", totalPayment: "18653000", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-9)", packageNo: "12", description: "Water supply station and subassement", qty: "20", unitType: "28000", unitPrice: "24600", amount: "580", vat: "50", totalAmount: "19703100", ait: "16010300", netAmount: "2742475", totalPayment: "20788835", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-10)", packageNo: "13", description: "Electric and equipment", qty: "25", unitType: "30000", unitPrice: "33400", amount: "580", vat: "65", totalAmount: "17068000", ait: "21974000", netAmount: "3231500", totalPayment: "24833260", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-11)", packageNo: "14", description: "Equipment", qty: "30", unitType: "19000", unitPrice: "43060", amount: "580", vat: "75", totalAmount: "26777245", ait: "27963700", netAmount: "4398013", totalPayment: "31652872", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-12)", packageNo: "15", description: "Equipment and the equipment", qty: "50", unitType: "80000", unitPrice: "62700", amount: "580", vat: "112", totalAmount: "60363000", ait: "69162600", netAmount: "8275500", totalPayment: "67857500", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-13)", packageNo: "16", description: "Equipment and", qty: "70", unitType: "80000", unitPrice: "92400", amount: "580", vat: "165", totalAmount: "348927150", ait: "103577700", netAmount: "8767162.5", totalPayment: "98928057.5", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-14)", packageNo: "17", description: "Office Equipment", qty: "80", unitType: "100000", unitPrice: "101500", amount: "580", vat: "182", totalAmount: "144272100", ait: "147897000", netAmount: "3209920", totalPayment: "168024530", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-15)", packageNo: "18", description: "Application to be", qty: "100", unitType: "120000", unitPrice: "112580", amount: "580", vat: "175", totalAmount: "301203000", ait: "185446800", netAmount: "3777000", totalPayment: "333610700", remarks: "" },
//     { sl: "Ch-01(CWE-21-5-16)", packageNo: "19", description: "Application to be", qty: "150", unitType: "220000", unitPrice: "230600", amount: "580", vat: "182", totalAmount: "397310000", ait: "380600800", netAmount: "7593840", totalPayment: "437963040", remarks: "" }
//   ];

//   const filteredData = data.filter(row =>
//     Object.values(row).some(val =>
//       String(val).toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="min-h-screen p-2 sm:p-4 md:p-6 bg-white">
//       <div className="max-w-full mx-auto">
//         <div className="rounded-lg shadow-2xl overflow-hidden">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5CA903] mb-3 sm:mb-4 text-center">
//             ENERGY USAGE
//           </h1>

//           {/* Table Container */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
//               <thead className="bg-[#5CA903] sticky top-0">
//                 <tr>
//                   {[
//                     "S/N",
//                     "Ref. No.",
//                     "ENERGY USAGE",
//                     "Inverter",
//                     "Lithium Tub. Battery Size (watts/Amps)",
//                     "Panel Size (watts)",
//                     "# of Panel",
//                     "Subtotal Inv. Bat. Pnl (₦)",
//                     "Total Acc. & eq. (₦)",
//                     "AIT",
//                     "Net Amount",
//                     "Total Payment",
//                     "Remarks"
//                   ].map((header, i) => (
//                     <th key={i} className="px-2 sm:px-3 py-2 text-left font-bold text-white uppercase tracking-wider">
//                       {header}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredData.map((row, index) => (
//                   <tr key={index} className={`hover:bg-emerald-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//                      <td className="px-2 sm:px-3 py-1 text-left">{row.packageNo}</td>
//                     <td className="px-2 sm:px-3 py-1 text-left">{row.sl}</td>
                   
//                     <td className="px-2 sm:px-3 py-1 text-left">{row.description}</td>
//                     <td className="px-2 sm:px-3 py-1 text-center">{row.qty}</td>
//                     <td className="px-2 sm:px-3 py-1 text-left">{row.unitType}</td>
//                     <td className="px-2 sm:px-3 py-1 text-right">{row.unitPrice}</td>
//                     <td className="px-2 sm:px-3 py-1 text-right">{row.amount}</td>
//                     <td className="px-2 sm:px-3 py-1 text-right">{row.vat}</td>
//                     <td className="px-2 sm:px-3 py-1 text-right">{row.totalAmount}</td>
//                     <td className="px-2 sm:px-3 py-1 text-right">{row.ait}</td>
//                     <td className="px-2 sm:px-3 py-1 text-right">{row.netAmount}</td>
//                     <td className="px-2 sm:px-3 py-1 text-right font-semibold">{row.totalPayment}</td>
//                     <td className="px-2 sm:px-3 py-1 text-left">{row.remarks || '-'}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Footer */}
//           <div className="bg-gray-50 px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-200 text-xs sm:text-sm">
//             <p>
//               Showing <span className="font-semibold">{filteredData.length}</span> of{' '}
//               <span className="font-semibold">{data.length}</span> records
//             </p>
//             <p>Scroll horizontally to view all columns →</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcurementTable;








import React, { useState } from 'react';

interface TableRow {
  sl: string;
  packageNo: string;
  description: string;
  qty: string;
  unitType: string;
  unitPrice: string;
  amount: string;
  vat: string;
  totalAmount: string;
  ait: string;
  netAmount: string;
  totalPayment: string;
  remarks: string;
}

const ProcurementTable: React.FC = () => {
  const [searchTerm] = useState('');

  const data: TableRow[] = [
    { sl: "Ch-01(CWE-21-5-25)", packageNo: "01. package", description: "Tk Pakistan diesel bridge package", qty: "1.5", unitType: "3×225 (Amp)", unitPrice: "1800", amount: "350", vat: "4", totalAmount: "5418000", ait: "1641000", netAmount: "3348.26", totalPayment: "5820285", remarks: "" },
    { sl: "Ch-01(CWE-21-5-26)", packageNo: "02", description: "tk i india", qty: "1.5", unitType: "3×225(Amp)", unitPrice: "2400", amount: "350", vat: "6", totalAmount: "20760000", ait: "2594100", netAmount: "3454.61", totalPayment: "23198.11", remarks: "" },
    { sl: "Ch-01(CWE-21-5-25)", packageNo: "03", description: "27×AL bridge water and other small groups in the house", qty: "2", unitType: "4×225(Amp)", unitPrice: "2400", amount: "350", vat: "8", totalAmount: "2748000", ait: "3212500", netAmount: "962.75", totalPayment: "3725772", remarks: "" },
    { sl: "Ch-01(CWE-21-5-23)", packageNo: "04", description: "27×AL bridge, water and other small groups in the house", qty: "2.5", unitType: "5×225(Amp)", unitPrice: "2600", amount: "350", vat: "10", totalAmount: "3149100", ait: "3612100", netAmount: "974287.5", totalPayment: "4165623.5", remarks: "" },
    { sl: "Ch-01(CWE-21-5-26)", packageNo: "05", description: "Te- bridge -2(vr cable wire and other small groups in the house", qty: "3", unitType: "6×225(Amp)", unitPrice: "4200", amount: "550", vat: "12", totalAmount: "4350000", ait: "6038000", netAmount: "680700", totalPayment: "5236700", remarks: "" },
    { sl: "Ch-01(CWE-21-5-24)", packageNo: "06", description: "Te- bridge -2 (cable wire and other small groups in the house)", qty: "3.5", unitType: "8×225(Amp)", unitPrice: "4200", amount: "550", vat: "12", totalAmount: "4311000", ait: "5232600", netAmount: "746160", totalPayment: "6199160", remarks: "" },
    { sl: "Ch-01(CWE-21-5-27)", packageNo: "07", description: "Cable wire and other small groups", qty: "4.2", unitType: "3000", unitPrice: "7300", amount: "350", vat: "27", totalAmount: "4798100", ait: "5260420", netAmount: "789327.3", totalPayment: "5897747.3", remarks: "" },
    { sl: "Ch-01(CWE-21-5-25)", packageNo: "08", description: "Cable wire, relations and other small email groups in the", qty: "5", unitType: "6000", unitPrice: "13290", amount: "550", vat: "25", totalAmount: "6777600", ait: "7352500", netAmount: "3698800", totalPayment: "8348000", remarks: "" },
    { sl: "Ch-01(CWE-21-5-6)", packageNo: "09", description: "Padma oil, relations, rice machine, etc.", qty: "7.5", unitType: "9100", unitPrice: "18130", amount: "580", vat: "25", totalAmount: "9047700", ait: "10396700", netAmount: "1014002.5", totalPayment: "10476.5", remarks: "" },
    { sl: "Ch-01(CWE-21-5-7)", packageNo: "10", description: "Electricity and water pumping station (2000 mm dia and electricity)", qty: "9", unitType: "26000", unitPrice: "22400", amount: "580", vat: "45", totalAmount: "10200000", ait: "16710200", netAmount: "2197350", totalPayment: "18221350", remarks: "" },
    { sl: "Ch-01(CWE-21-5-8)", packageNo: "11", description: "Water pumping station and subassement", qty: "16", unitType: "26000", unitPrice: "24400", amount: "580", vat: "60", totalAmount: "13809000", ait: "16484800", netAmount: "2.88800", totalPayment: "18653000", remarks: "" },
    { sl: "Ch-01(CWE-21-5-9)", packageNo: "12", description: "Water supply station and subassement", qty: "20", unitType: "28000", unitPrice: "24600", amount: "580", vat: "50", totalAmount: "19703100", ait: "16010300", netAmount: "2742475", totalPayment: "20788835", remarks: "" },
    { sl: "Ch-01(CWE-21-5-10)", packageNo: "13", description: "Electric and equipment", qty: "25", unitType: "30000", unitPrice: "33400", amount: "580", vat: "65", totalAmount: "17068000", ait: "21974000", netAmount: "3231500", totalPayment: "24833260", remarks: "" },
    { sl: "Ch-01(CWE-21-5-11)", packageNo: "14", description: "Equipment", qty: "30", unitType: "19000", unitPrice: "43060", amount: "580", vat: "75", totalAmount: "26777245", ait: "27963700", netAmount: "4398013", totalPayment: "31652872", remarks: "" },
    { sl: "Ch-01(CWE-21-5-12)", packageNo: "15", description: "Equipment and the equipment", qty: "50", unitType: "80000", unitPrice: "62700", amount: "580", vat: "112", totalAmount: "60363000", ait: "69162600", netAmount: "8275500", totalPayment: "67857500", remarks: "" },
    { sl: "Ch-01(CWE-21-5-13)", packageNo: "16", description: "Equipment and", qty: "70", unitType: "80000", unitPrice: "92400", amount: "580", vat: "165", totalAmount: "348927150", ait: "103577700", netAmount: "8767162.5", totalPayment: "98928057.5", remarks: "" },
    { sl: "Ch-01(CWE-21-5-14)", packageNo: "17", description: "Office Equipment", qty: "80", unitType: "100000", unitPrice: "101500", amount: "580", vat: "182", totalAmount: "144272100", ait: "147897000", netAmount: "3209920", totalPayment: "168024530", remarks: "" },
    { sl: "Ch-01(CWE-21-5-15)", packageNo: "18", description: "Application to be", qty: "100", unitType: "120000", unitPrice: "112580", amount: "580", vat: "175", totalAmount: "301203000", ait: "185446800", netAmount: "3777000", totalPayment: "333610700", remarks: "" },
    { sl: "Ch-01(CWE-21-5-16)", packageNo: "19", description: "Application to be", qty: "150", unitType: "220000", unitPrice: "230600", amount: "580", vat: "182", totalAmount: "397310000", ait: "380600800", netAmount: "7593840", totalPayment: "437963040", remarks: "" }
  ];

  const filteredData = data.filter(row =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="">
      <div className="max-w-full mx-auto">
        <div className="rounded-lg shadow-2xl overflow-hidden ">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5CA903] mb-3 sm:mb-4 text-center">
            ENERGY USAGE
          </h1>

          {/* Table Container */}
          <div className="overflow-x-auto w-full">
            <table className="min-w-[1400px] sm:min-w-[1200px] md:min-w-full divide-y divide-gray-200 text-xs sm:text-sm md:text-base ">
              <thead className="bg-[#5CA903] sticky top-0 P-10">
                <tr>
                  {[
                    "S/N",
                    "Ref. No.",
                    "ENERGY USAGE",
                    "Inverter Size (KVA)",
                    "Lithium Tub",
                    "Panel Size (watts)",
                    "# of Panel",
                    "Subtotal Inv. Bat. Pnl (₦)",
                    "Total Acc. & eq. (₦)",
                    "AIT",
                    "Net Amount",
                    "Total Payment",
                    "Remarks"
                  ].map((header, i) => (
                    <th
                      key={i}
                      className=" sm:px-2  text-left font-bold text-white uppercase tracking-wider whitespace-nowrap px-10 py-10"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((row, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-emerald-50 transition-colors duration-150 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-1 sm:px-2 py-1 text-left">{row.packageNo}</td>
                    <td className="px-1 sm:px-2 py-1 text-left">{row.sl}</td>
                    <td className="px-1 sm:px-2 py-1 text-left">{row.description}</td>
                    <td className="px-1 sm:px-2 py-1 text-center">{row.qty}</td>
                    <td className="px-1 sm:px-2 py-1 text-left">{row.unitType}</td>
                    <td className="px-1 sm:px-2 py-1 text-right">{row.unitPrice}</td>
                    <td className="px-1 sm:px-2 py-1 text-right">{row.amount}</td>
                    <td className="px-1 sm:px-2 py-1 text-right">{row.vat}</td>
                    <td className="px-1 sm:px-2 py-1 text-right">{row.totalAmount}</td>
                    <td className="px-1 sm:px-2 py-1 text-right">{row.ait}</td>
                    <td className="px-1 sm:px-2 py-1 text-right">{row.netAmount}</td>
                    <td className="px-1 sm:px-2 py-1 text-right font-semibold">{row.totalPayment}</td>
                    <td className="px-1 sm:px-2 py-1 text-left">{row.remarks || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-2 sm:px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-gray-200 text-xs sm:text-sm">
            <p>
              Showing <span className="font-semibold">{filteredData.length}</span> of{" "}
              <span className="font-semibold">{data.length}</span> records
            </p>
            <p>Scroll horizontally to view all columns →</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementTable;
