import React from 'react';

import { Table, Button } from 'antd';


const TableGlobal = (props) => {
    // console.log(props.dataGlobal);
    // console.log(props.dataVietNam);
    // console.log('da vao - TableGlobal');
    
    // KHAI BÁO TIÊU ĐỀ CỘT:
    const columns = [
        {
            title: '',
            dataIndex: 'TGVN',
            key: 'TGVN',
            render: text => {
                return (
                    <Button type="primary" ghost style={{ width: '100%',fontWeight:'bolder' }}> {text.toUpperCase()}</Button>
                );
            }
        },
        {
            title: 'Mới Nhiễm',
            dataIndex: 'NewConfirmed',
            key: 'NewConfirmed',
            render: text => <b style={{ color: 'orange' }}>{text}</b>,
        },
        {
            title: 'Tổng Số Nhiễm',
            dataIndex: 'TotalConfirmed',
            key: 'TotalConfirmed',
            render: text => <b style={{ color: 'orange' }}>{text}</b>,
        },
        {
            title: 'Mới Tử Vong',
            dataIndex: 'NewDeaths',
            key: 'NewDeaths',
            render: text => <b style={{ color: 'red' }}>{text}</b>,
        },
        {
            title: 'Tổng Số Tử Vong',
            dataIndex: 'TotalDeaths',
            key: 'TotalDeaths',
            render: text => <b style={{ color: 'red' }}>{text}</b>,
        },
        {
            title: 'Mới Khỏi Bệnh',
            dataIndex: 'NewRecovered',
            key: 'NewRecovered',
            render: text => <b style={{ color: '#1890FF' }}>{text}</b>,
        },
        {
            title: 'Tổng Số Khỏi Bệnh',
            dataIndex: 'TotalRecovered',
            key: 'TotalRecovered',
            render: text => <b style={{ color: '#1890FF' }}>{text}</b>,

        }
    ];

    //   KHAI BÁO DỮ LIỆU :
    // console.log(props.dataGlobal);
    // console.log(props.dataVietNam);
    const data = [
        {
            key: '1',
            TGVN: 'THẾ GIỚI',
            NewConfirmed: props.dataGlobal.NewConfirmed,
            TotalConfirmed: props.dataGlobal.TotalConfirmed,
            NewDeaths: props.dataGlobal.NewDeaths,
            TotalDeaths: props.dataGlobal.TotalDeaths,
            NewRecovered: props.dataGlobal.NewRecovered,
            TotalRecovered: props.dataGlobal.TotalRecovered,
        },
        {
            key: '2',
            TGVN: 'VIẾT NAM',
            NewConfirmed: props.dataVietNam.NewConfirmed,
            TotalConfirmed: props.dataVietNam.TotalConfirmed,
            NewDeaths: props.dataVietNam.NewDeaths,
            TotalDeaths: props.dataVietNam.TotalDeaths,
            NewRecovered: props.dataVietNam.NewRecovered,
            TotalRecovered: props.dataVietNam.TotalRecovered,
        }
    ];

    return (
        <Table columns={columns} dataSource={data} />
    );
}

export default React.memo(TableGlobal);
