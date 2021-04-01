import React, { useState, useRef } from 'react';
import { Popconfirm, Button, Input, Divider, message, Tag } from 'antd';

import { DeleteOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import style from './style.less';
import { Link, connect } from 'umi';
// import Moment from 'react-moment';
const { Search } = Input;

const Index = ({ currentUser }) => {
  const [sorter, setSorter] = useState('');
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const actionRef = useRef();
  const handleDelete = async (data) => {
    // const { id } = data;
    // const hide = message.loading('Configuring');
    // try {
    //   await deleteAdmin(id);
    //   hide();
    //   message.success('Deleted Successfully');
    //   return true;
    // } catch (error) {
    //   hide();
    //   message.error('Failed Please try again!');
    //   return false;
    // }
  };
  const handleEdit = (record) => {};
  const handleStatus = (data) => {
    console.log(data);
    if (data?.status === 'active') {
      return <Tag color={'#52C41A'}>{data?.status}</Tag>;
    }
    if (data?.status === 'inactive') {
      return <Tag color={'#FFD000'}>{data?.status}</Tag>;
    }
  };
  const columns = [
    {
      title: 'Sr. No',
      dataIndex: 'key',
      align: 'left',
      width: 250,
      hideInSearch: true,
    },
    {
      title: 'Category name',
      dataIndex: 'name',
      align: 'left',
      width: 250,
      hideInSearch: true,
      sorter: (a, b) => {
        return a.name.localeCompare(b.name);
      },
      renderFormItem: (_, record) => {
        return (
          <Input placeholder="Search by name" onChange={(value) => setName(value.target.value)} />
        );
      },
      // filterDropdown: () => (
      //   <div style={{ padding: 8 }}>
      //     <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
      //   </div>
      // ),
      // filterIcon: (filtered) => (
      //   <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      // ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: 'left',
      width: 250,
      hideInSearch: true,
    },
    {
      title: 'Mobile No.',
      dataIndex: 'contact',
      align: 'left',
      width: 250,
      hideInSearch: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'left',
      width: 250,
      hideInSearch: true,
      render: (_, row) => handleStatus(row),
    },
    {
      title: 'Actions',
      dataIndex: 'option',
      valueType: 'option',
      align: 'left',
      width: 150,
      render: (_, record) => {
        return (
          <>
            <Link to="/users/view">
              <EyeOutlined/>
            </Link>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure to delete this Job?"
              onConfirm={async () => {
                const success = await handleDelete(record);
                if (success) {
                  if (actionRef.current) {
                    actionRef.current.reload();
                  }
                }
              }}
              onCancel={cancel}
            >
              <DeleteOutlined style={{ color: 'rgba(1, 73, 255, 1)', padding: '0 8px' }} />
            </Popconfirm>
          </>
        );
      },
    },
  ];
  function cancel() {
    message.error('Cancel');
  }
  const handleSearch = async (data) => {
    actionRef.current.reload();
  };

  return (
    <PageHeaderWrapper>
      <IntlProvider value={enUSIntl}>
        <ProTable
          search={false}
          headerTitle={<span className={style.tableHeading}>User listing</span>}
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
            // <Button type="primary" onClick={() => setVisible(true)}>
            //   <PlusOutlined /> Add Category
            // </Button>,
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
                name: 'shreyas s',
                email: 'ssk@ssk.com',
                contact: '124567890',
                status: 'active',
              },
              {
                key: 1,
                name: 'shreyas s',
                email: 'ssk@ssk.com',
                contact: '124567890',
                status: 'inactive',
              },
              {
                key: 1,
                name: 'shreyas s',
                email: 'ssk@ssk.com',
                contact: '124567890',
                status: 'active',
              },
            ];
            setTotalCount(data.length);
            const tableData = data.map((item, i) => {
              return {
                // eslint-disable-next-line no-underscore-dangle
                // id: item._id,
                key: i + 1,
                name: item.name,
                email: item.email,
                contact: item.contact,
                status: item.status,
                // account_type: item.account_type,
                // contact: `${item.country_code} ${item.contact_no}`,
                // status: item.status === 'ACTIVE' ? 'Active' : 'Inactive',
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
