import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvaibleAppoinments from '../AvaibleAppoinments/AvaibleAppoinments';

const Appoinment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader></AppoinmentHeader>
            <AvaibleAppoinments></AvaibleAppoinments>
        </div>
    );
};

export default Appoinment;