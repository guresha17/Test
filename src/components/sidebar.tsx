import React from 'react';
import { Menu, Checkbox } from 'antd';
import type { MenuProps } from 'antd';
import Input from './input';

type MenuItem = Required<any>['items'][number];

const items: MenuProps['items'] = [
    {
        key: 'sub1',
        label: 'Select Dynasty',
        children: [
            getItemWithCheckbox('Nalanda, Bihar, India', 'g1', [
            ], 'group'),
            getItemWithCheckbox('Sarnath, Uttar Pradesh, India', 'g2', [
            ], 'group'),
            getItemWithCheckbox('Ahichchhatra', 'g3', [
            ], 'group'),
            getItemWithCheckbox('Chola, Tamil Nadu, India', 'g4', [
            ], 'group'),
        ],
    },
    {
        key: 'sub2',
        label: 'Select Period',
    },
    {
        key: 'sub6',
        label: 'Select Material',
        children: [
            getItemWithCheckbox('9', '9'),
            getItemWithCheckbox('10', '10'),
            getItemWithCheckbox('11', '11'),
            getItemWithCheckbox('12', '12'),
        ],
    },
    {
        key: 'sub4',
        label: 'Select Region',
        children: [
            getItemWithCheckbox('9', '9'),
            getItemWithCheckbox('10', '10'),
            getItemWithCheckbox('11', '11'),
            getItemWithCheckbox('12', '12'),
        ],
    },
];

function getItemWithCheckbox(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        label: (
            <div>
                <Checkbox className='font-nunito'>{label}</Checkbox>
            </div>
        ),
        type,
    } as MenuItem;
}

const Sidebar: React.FC = () => {
    return (
        <>
            <Menu
                className='bg-grey w-full text-xl font-nunito md:text-lg'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </>
    );
}

export default Sidebar;