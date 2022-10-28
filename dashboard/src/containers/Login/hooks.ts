/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import moment from "moment";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios'

import { addCar, getCarId, getUsers, putCar } from '../../utils/request'
import { IUser } from '../../utils/types/userItem'
import { ICarItemCreate, ICarItem } from '../../utils/types/carsItem'
import { IGetQuery } from '../../utils/types/getQuery'
import { IGetResult } from '../../utils/types/resultGet'

import { useFormik } from 'formik'
import { ROUTE } from "../../utils/constants";
import { validate } from './helper'
type userLogin = {
    userName: string,
    password: string,
}
export const uselogicForm = () => {
    const [loading, setloading] = useState<boolean>(false);
    const [users, setusers] = useState<IUser[]>([]);
    const [car, setcar] = useState<ICarItem>({});
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);
    const id = search.get('id');

    const initialValues: userLogin = {
        userName: "",
        password: "",
    };
    const onSubmit = (values: userLogin) => {
        localStorage.setItem('userName', values.userName)
        // setloading(true)
        // const submit = id ? putCar : addCar
        // return submit(values).then(() => {
        //     toast.success("success")
        // }).catch(() => {
        //     toast.warn("error!")
        // }).finally(() => setloading(false))
        history.push(ROUTE.CarsDashboard);
        
    }
    React.useEffect(() => {
        // 
    }, [])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik<userLogin>({
        // enableReinitialize: id ? true : false,
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    });

    return { formik, loading, users }
}