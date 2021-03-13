import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTickets} from '../redux/actions/actions'

interface IState {
    tickets:object
}

const Home = () => {

    const ticketsState = useSelector( (state:IState) => state.tickets);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTickets());
    },[]);


    return (
        <div>
            Hello
        </div>
    )
}

export default Home
