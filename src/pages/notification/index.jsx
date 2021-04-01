import React, { useState, useRef } from 'react';
import { Button} from 'antd';
import { Link, connect } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import style from './style.less';
import Moment from 'react-moment';

const Index = ({ currentUser }) => {
  const [sorter, setSorter] = useState('');
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
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
      title: 'Notification title',
      dataIndex: 'title',
      align: 'left',
      width: 400,
      hideInSearch: true,
      sorter: (a, b) => {
        return a.title.localeCompare(b.title);
      },
    },
    {
      title: 'Date and time',
      dataIndex: 'datetime',
      align: 'left',
      width: 150,
      hideInSearch: true,
      render: (_, record) => {
        return <Moment format="LLL">{parseInt(record.datetime)}</Moment>;
      },
    },
    {
      title: 'Description.',
      dataIndex: 'description',
      align: 'left',
      width: 400,
      hideInSearch: true,
    },
    {
      title: 'Screen/URL',
      dataIndex: 'screen_url',
      align: 'left',
      width: 200,
      hideInSearch: true,
      render: (_, record) => {
        return <span style={{}}>{record.screen_url}</span>;
      },
    },
  ];

  return (
    <PageHeaderWrapper>
      <IntlProvider value={enUSIntl}>
        <ProTable
          search={false}
          headerTitle={<span className={style.tableHeading}>Notifications</span>}
          actionRef={actionRef}
          options={{ fullScreen: true, density: false, reload: false, setting: false }}
          rowKey="key"
          onChange={(_, _filter, _sorter) => {
            const sorterResult = _sorter;
            if (sorterResult.field) {
              if (sorterResult.order === 'ascend') {
                setSorter(`${sorterResult.field}`);
              } else setSorter(`-${sorterResult.field}`);
            }
          }}
          params={{
            sorter,
            search,
            name,
          }}
          toolBarRender={() => [
            <Link to={'/notifications/add'}>
            <Button type="primary">
              <PlusOutlined /> Send Notification
            </Button></Link>,
          ]}
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
            // const data = await adminList(params);
            const data = [
              {
                key: 1,
                title:
                  'ssssssss sssssssssssssssss ssssssssssssssssss ssssssssssssssssss ssssssssssss',
                description:
                  'ssssssss sssssssssssssssss ssssssssssssssssss ssssssssssssssssss ssssssssssss',

                datetime: '1609845249',
                screen_url:
                  'https://pranshuprabhakar338757.invisionapp.com',
              },
              {
                key: 1,
                title:
                  'ssssssss sssssssssssssssss ssssssssssssssssss ssssssssssssssssss ssssssssssss',
                description:
                  'ssssssss sssssssssssssssss ssssssssssssssssss ssssssssssssssssss ssssssssssss',

                datetime: '1609845249',
                screen_url:
                  'https://pranshuprabhakar338757.invisionapp.com',
              },
              {
                key: 1,
                title:
                  'ssssssss sssssssssssssssss ssssssssssssssssss ssssssssssssssssss ssssssssssss',
                description:
                  'ssssssss sssssssssssssssss ssssssssssssssssss ssssssssssssssssss ssssssssssss',

                datetime: '1609845249',
                screen_url:
                  'https://pranshuprabhakar338757.invisionapp.com',
              },
            ];
            setTotalCount(data.length);
            const tableData = data.map((item, i) => {
              return {
                key: i + 1,
                title: item.title,
                description: item.description,
                datetime: item.datetime,
                screen_url: item.screen_url,
              };
            });
            return {
              data: tableData,
              success: true,
            };
          }}
          columns={columns}
          pagination={{
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            total: totalCount,
          }}
        />
      </IntlProvider>
    </PageHeaderWrapper>
  );
};

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(Index);
