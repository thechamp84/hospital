import React, { useState, useRef } from 'react';
import { Row, Col, Avatar } from 'antd';
import ProTable from '@ant-design/pro-table';
import style from '../style.less';

const UserInfo = ({}) => {
  const [sorter, setSorter] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const actionRef = useRef();

  const columns = [
    {
      title: 'Sr. No',
      dataIndex: 'key',
      align: 'left',
      width: 50,
      hideInSearch: true,
    },
    {
      title: 'Course name',
      dataIndex: 'course_name',
      align: 'left',
      width: 110,
      hideInSearch: true,
      sorter: (a, b) => {return a.course_name.localeCompare(b.course_name)},
      render: (_, record) => {
        return (
          <>
            <p><Avatar className={style.avatarImage} size={150} shape="square" src={record.picture} /> &nbsp;&nbsp;&nbsp;
            {record.course_name}</p>
          </>
        );
      },
    },
    {
      title: 'Category',
      dataIndex: 'category',
      align: 'left',
      width: 110,
      hideInSearch: true,
    },
    {
      title: 'Completion %',
      dataIndex: 'completion_percentage',
      align: 'left',
      width: 80,
      hideInSearch: true,
    },
  ];
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col xs={4} sm={4} md={4} lg={3} xl={3}>
          <span className={style.p_styling}>Course Taken:</span>
        </Col>{' '}
        <Col xs={20} sm={20} md={20} lg={21} xl={21 }>
          <ProTable
            options={false}
            search={false}
            actionRef={actionRef}
            rowKey="key"
            onChange={(_, _filter, _sorter) => {
              const sorterResult = _sorter;
              if (sorterResult.field) {
                if (sorterResult.order === 'ascend') {
                  setSorter(`${sorterResult.field}`);
                } else setSorter(`-${sorterResult.field}`);
              }
            }}
            tableAlertRender={(selectedRowKeys, selectedRows) => (
              <div>
                chosen{' '}
                <a
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {selectedRowKeys.length}
                </a>{' '}
                item&nbsp;&nbsp;
                <span>
                  Total number of service calls{' '}
                  {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} Ten thousand
                </span>
              </div>
            )}
            request={async (params) => {
              const data = [
                {
                  key: 1,
                  picture:
                  'https://bawsala-images.s3.amazonaws.com/company-profile/5fd314fb7d8ff14e01d2166f.png',
                  course_name: 'Course 1',
                  category: 'Category 1, Category 2, +2',
                  completion_percentage: '40%',
                },
                {
                  key: 1,
                  picture:
                    'data:image/jpeg;base64,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',
                  course_name: 'Course 2',
                  category: 'Category 1, Category 2, +2',
                  completion_percentage: '40%',
                },
                {
                  key: 1,
                  picture:
                    'data:image/jpeg;base64,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',
                  course_name: 'Course 1',
                  category: 'Category 1, Category 2, +2',
                  completion_percentage: '40%',
                },
              ];
              setTotalCount(data.length);

              const tableData = data.map((item, i) => {
                return {
                  key: i + 1,
                  picture: item.picture,
                  category: item.category,
                  course_name: item.course_name,
                  completion_percentage: item.completion_percentage,
                };
              });
              return {
                data: tableData,
                success: true,
              };
            }}
            columns={columns}
          />
        </Col>
      </Row>
    </>
  );
};

export default UserInfo;
