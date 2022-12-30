import React, { useEffect, useState } from 'react';
import './App.css';
// axios
import axios from 'axios';
// ant design
// import { Skeleton } from 'antd';
import { Spin, Alert } from 'antd';
import TableGlobal from './TableGlobal';
import TableCountries from './TableCountries';


function App() {


  // 
  const [loading, setLoading] = useState(true);
  // const [dataCovid, setDataCovid] = useState(null);
  const [dataCovidGlobal, setDataCovidGlobal] = useState(null);
  const [dataCovidVietNam, setDataCovidVietNam] = useState(null);
  const [dataCovidCountries, setDataCovidCountries] = useState(null);

  // 
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.covid19api.com/summary?fbclid=IwAR0kPKZyS7zVmSE1WoFkqpHN_p9uR77R29ktd03RTcfJ4rkf8r0i_FpbkgQ',
      data: null
    }).then(
      (res) => {
        // console.log(res);
        // console.log(res.data.Global);
        // console.log(res.data.Countries);

        if (res.status === 200) {
          setTimeout(() => { setLoading(false); }, 600);
          // GLOBAL + CONTRIES
          setDataCovidGlobal(res.data.Global);
          setDataCovidCountries(res.data.Countries);

          // VIETNAM
          res.data.Countries.map((item, key) => {
            if (item.CountryCode === "VN") {
              setDataCovidVietNam(item);
            }
          })
        }
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }, []);


  // RENDER :
  return (
    <>
      {
        (loading === true)
          ?
          (
            <Spin tip="Loading...">
              <Alert
                message="Tuantran-frontend"
                description="Tổng hợp dữ liệu Covid các quốc gia trên thế giới."
                type="info"
              />
            </Spin>
          )
          :
          (
            <>
              <h1 style={{ textAlign: 'center' }}><u> VIỆT NAM + GLOBAL</u></h1>
              <h5 style={{ textAlign: 'center' }}><u> TUANTRAN {dataCovidVietNam.Date.slice(0,10)}</u></h5>
              <TableGlobal dataGlobal={dataCovidGlobal} dataVietNam={dataCovidVietNam} />

              <h1 style={{ textAlign: 'center' }}><u>TẤT CẢ CÁC QUỐC GIA KHÁC</u></h1>
              <TableCountries dataCountries={dataCovidCountries} />
            </>
          )
      }
    </>
  );
}

export default App;
