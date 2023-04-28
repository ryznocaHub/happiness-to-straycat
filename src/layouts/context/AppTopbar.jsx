import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContext } from './layoutcontext';
import { useAuthStore } from '@stores/authStore';

const AppTopbar = (props, ref) => {
    const {removeAuthStore, id, token, name} = useAuthStore((state) => state)

    const menubuttonRef = useRef(null);
    
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    return (
        <div className="layout-topbar">
            
            <Link to={'/'} className="layout-topbar-logo">
                {/* <img src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} width="47.22px" height={'35px'} widt={'true'} alt="logo" /> */}
                <span>Straycat</span>
            </Link>
            <div ref={topbarmenuRef} className="layout-topbar-menu flex items-center justify-center">
                <div className='text-xl font-bold text-gray-400'>{name}</div>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Profile</span>
                </button>
            </div>
        </div>
    );
}

export default AppTopbar;
