import React, { useRef, useState } from 'react';
import { Divider,Popconfirm, message, Tag, Switch } from 'antd';
import { DeleteOutlined, EyeOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import style from './style.less';
import { Link,connect } from 'umi';
import { getAllUsers , updateStatus} from './service';

const Index = ({ currentUser }) => {

  const [sorter, setSorter] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [uid,setUid] = useState('');

    const actionRef = useRef();
    
    const toggleChange = async (active) => {
      
     console.log("userStatus :",uid,active);
     return await updateStatus(uid,active)
     .then((res) => {
      try {
        if (res.success) {
          if(active==true){
            message.success('User is Active now'); 
          }
          else if(active==false){
            message.success('User is Inactive now');
          }
          actionRef.current.reload();
        }
      } catch (e) {
        message.error('Please try later.');
      }
    })
    .catch((e) => {
      const resolveE = Promise.resolve(e);
      resolveE
        .then((res) => {
          message.error(res.message);
        })
        .catch((e) => message.error('Please try again'));
    });
    }

    const handleStatus = (data) => {
      setUid(data.id);
      if (data?.active === true) {
        
        return <Switch
        checkedChildren="Active"
        unCheckedChildren="Inactive"
        defaultChecked
        onChange={toggleChange}
      />;  
    }
    setUid(data.id);
      if (data?.active === false) {
        return <Switch
        checkedChildren="Active"
        unCheckedChildren="Inactive"
        onClick={toggleChange}
      />;
      }
    };


    const handleDelete = async (data) => {
        const { id } = data;
        try {
          await deleteUser(id);
          message.success('User deleted Successfully');
          return true;
        } catch (error) {
          message.error('Failed Please try again!');
          return false;
        }
      };
  
  const columns = [
    {
      title: 'Sr. No',
      dataIndex: 'key',
      align: 'left',
      width: 50,
      hideInSearch: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: 'left', 
      width: 100,
      hideInSearch: true,
      sorter: (a, b) => { return a.name.localeCompare(b.name) },
      
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'left',
      width: 100,
      hideInSearch: true,
    },
    // {
    //     title: 'ContactNo.',
    //     dataIndex: 'mobile',
    //     align: 'left',
    //     width: 150,
    //     hideInSearch: true,
    // },
    {
      title: 'Status',
      dataIndex: 'active',
      align: 'left',
      width: 150,
      hideInSearch: true,
      render: (_, record) => handleStatus(record),
    },   
    {
      title: 'Actions',
      dataIndex: 'option',
      valueType: 'option',
      align: 'left',
      width: 100,
      render: (_, record) => {
        return (
          <>
            <Link to={`/users/userdetails/${record.id}`}>
            <EyeOutlined />
            </Link>

            <Divider type="vertical" />

            <Popconfirm
              title="Are you sure to delete this Course?"
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

  return (
    <PageHeaderWrapper>
      <IntlProvider value={enUSIntl}>
        
        <ProTable
          search={false}
          headerTitle={<span className={style.tableHeading}>Users listing</span>}
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
            name,
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

            const data = await getAllUsers(params);
            setTotalCount(data.length);
            const tableData = data.payload.map((item, i) => {
              return {
                key: i + 1,
                name: item.name,
                email: item.email,
                mobile: item.contact,
                active: item.active,
                id:item._id
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
  currentUser: user.currentUser
}))(Index);
