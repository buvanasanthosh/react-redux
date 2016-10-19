import React from 'react';

const RootComponent = ({children}) =>
    <div className="root-component">
        {children}
    </div>

RootComponent.displayName = 'RootComponent';

export default RootComponent;