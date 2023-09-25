import React, {useEffect, useState} from 'react';
import {fetchSortedList} from "../http/listAPI";
import './Top.css';
const Top = () => {
    const [fullList,setFullList]=useState('')
    useEffect(()=>{
        fetchSortedList().then(data=> setFullList(data))
    },[])


    return (
        <div className={"TopData"}>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Место</th>
                    <th scope="col">Фио</th>
                    <th scope="col">Статус</th>
                    <th scope="col">Опыт</th>
                    <th scope="col">Монеты</th>
                </tr>
                </thead>

                <tbody>
                {Array.from(fullList).map(list=>
                    <tr>
                        <th scope="row">{list.place}</th>
                        <td>{list.fio}</td>
                        <td>{list.level}</td>
                        <td>{list.experience}</td>
                        <td>{list.money}</td>
                    </tr>
                )
                }
                </tbody>
            </table>

        </div>
    );
};

export default Top;