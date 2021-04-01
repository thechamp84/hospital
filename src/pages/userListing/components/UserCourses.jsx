import React, { useState } from 'react';
import { Avatar } from 'antd';
import ProTable, { enUSIntl, IntlProvider } from '@ant-design/pro-table';
import UserDetails  from './UserDetails';
import { connect } from 'umi';
import style from '../style.less';
import { getUserById } from '../service';


const UserCourses = (props) =>{
    const { match } = props;
    const { params } = match;

    const [sorter, setSorter] = useState('');
    const [totalCount, setTotalCount] = useState(0);

    const [details,setDetails] = useState({});

    console.log("userCourses Deatils :",details);

    const handleUser = (data) => {
      console.log("Userdata :",data);
      setDetails(data);
    }

    const columns = [
        {
          title: 'Id',
          dataIndex: 'key',
          align: 'left',
          width: 50,
          hideInSearch: true,
        },
        {
          title: 'Picture',
          dataIndex: 'image',
          align: 'left', 
          width: 100,
          hideInSearch: true,
          sorter: (a, b) => { return a.name.localeCompare(b.name) },
          render: (_, record) => {
            return (
              <>
                <Avatar className={style.avatarImage} size={150} shape="square" src={record.image} />
              </>
            );
          },
        },
        {
          title: 'Courses Name',
          dataIndex: 'name',
          align: 'left',
          width: 150,
          hideInSearch: true,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            align: 'left',
            width: 100,
            hideInSearch: true,
        },   
        // {
        //   title: 'Completion %',
        //   dataIndex: 'completion',
        //   align: 'left',
        //   width: 70,
        // }
    ]  

return (
      <IntlProvider value={enUSIntl}>
        <UserDetails  details={details}/>
        <ProTable
          search={false}
          headerTitle={<span className={style.tableHeading}>User Subscriptions :</span>}
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
          
          request={async () => {

            const data = await getUserById(params.id);
            setTotalCount(data.length);
            const tableData = data.payload[0].subscriptions.map((subscription, i) => {
               
              return {
                key: i + 1,
                email:data.payload[0].email,
                active:data.payload[0].active,
                name: subscription.course.title,
                image : subscription.course.thumbnailUrl,
                category: subscription.course.tags.map((tag)=> tag.name).join(", "),
                completion: '0%',
                id:data.payload._id
              };
            });
            handleUser(tableData);
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
);
}

export default connect(({ user }) => ({
    currentUser: user.currentUser
  }))(UserCourses);