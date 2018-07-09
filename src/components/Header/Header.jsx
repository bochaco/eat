import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { PATHS } from '../../constants';
import { Layout } from 'antd';

const { Header } = Layout;

const HeaderComponent = ( props ) =>
{
    const selectedKeys = [];
    const location = props.location.pathname;

    // set menu as active on load if on a specific path
    Object.keys( PATHS ).forEach( path =>
    {
        location.startsWith( PATHS[path] ) ? selectedKeys.push( PATHS[path] ) : '';
    } );

    const { webId } = props;

    return (
        <div>
            <h1>Not Twitter</h1>
            <h3>{ webId['@id'] }</h3>
            <h3>{ webId.name }</h3>
            <h3>{ webId.nick }</h3>
            <Menu mode="horizontal" selectedKeys={ selectedKeys }>
                <Menu.Item key={ PATHS.TIMELINE }>
                    <NavLink to={ PATHS.TIMELINE } >Home</NavLink>
                </Menu.Item>
                <Menu.Item key={ PATHS.CREATE }>
                    <NavLink to={ PATHS.CREATE } >Create</NavLink>
                </Menu.Item>
                <Menu.Item key={ PATHS.MESSAGE }>
                    <NavLink to={ PATHS.MESSAGE } >Message</NavLink>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default HeaderComponent;
