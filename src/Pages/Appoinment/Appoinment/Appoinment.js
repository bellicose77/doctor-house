import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvaibleAppoinments from '../AvaibleAppoinments/AvaibleAppoinments';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvaibleAppoinments date={date}></AvaibleAppoinments>
        </div>
    );
};

export default Appoinment;