import React, { useState } from 'react';
import { Table } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
const { Search } = Input;


const TableCountries = (props) => {

    // console.log('da vao - TableCountries');

    const dataMap = props.dataCountries.map((item, key) => (
        {
            key: item.CountryCode,
            Country: item.Country,
            CountryCode: item.CountryCode,
            Slug: item.Slug,
            NewConfirmed: item.NewConfirmed,
            TotalConfirmed: item.TotalConfirmed,
            NewDeaths: item.NewDeaths,
            TotalDeaths: item.TotalDeaths,
            NewRecovered: item.NewRecovered,
            TotalRecovered: item.TotalRecovered,
            Date: item.Date,
            Premium: item.Premium,
        }
    ));

    // useState
    const [data, setData] = useState(dataMap);

    // console.log(props.dataCountries);

    const columns = [
        {
            title: 'QUỐC GIA',
            dataIndex: 'Country',
            render: text => <a href='/#' style={{ color: '#1890FF' }}>{text}</a>,

            sorter: (a, b) => a.Country.length - b.Country.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Mới Nhiễm',
            dataIndex: 'NewConfirmed',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
        },
        {
            title: 'Tổng Số Nhiễm',
            dataIndex: 'TotalConfirmed',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
        },
        {
            title: 'Mới Tử Vong',
            dataIndex: 'NewDeaths',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.NewDeaths - b.NewDeaths,
        },
        {
            title: 'Tổng Số Tử Vong',
            dataIndex: 'TotalDeaths',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
        },
        {
            title: 'Mới Khỏi Bệnh',
            dataIndex: 'NewRecovered',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.NewRecovered - b.NewRecovered,
        },
        {
            title: 'Tổng Số Khỏi Bệnh',
            dataIndex: 'TotalRecovered',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
        }
    ];

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    // toLowercase()

    // viet FILTER
    function clickSearchCountry(value) {
        // console.log(value);
        if (value) {
            let contrySearch = dataMap.filter((item, key) => {
                if (item.Country.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    return item;
                }
                return null;
            });
            setData(contrySearch);
        } else {
            setData(dataMap);
        }
    }


    // RENDER
    return (
        <>
            <br />
            <Row>
                <Col span={16} offset={4}>
                    <Search
                        placeholder="input search text"
                        enterButton="Tìm Kiếm"
                        size="large"
                        onSearch={(value) => { clickSearchCountry(value) }}
                    />
                </Col>
            </Row>

            <br />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </>
    );
}

export default React.memo(TableCountries);
