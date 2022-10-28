/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import moment from "moment";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios'

import { addUser, getUserId, getUsers, putUser } from '../../utils/request'
import { IUser, IUserCreate } from '../../utils/types/userItem'
import { ICarItemCreate, ICarItem } from '../../utils/types/carsItem'
import { IGetQuery } from '../../utils/types/getQuery'
import { IGetResult } from '../../utils/types/resultGet'

import { useFormik } from 'formik'
export const uselogicForm = () => {
    const [loading, setloading] = useState<boolean>(false);
    const [users, setusers] = useState<IUserCreate[]>([]);
    const [car, setcar] = useState<IUserCreate>({});
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);
    const id = search.get('id');

    const initialValues: IUserCreate = {
        id: car.id,
        firstName: car.firstName || '',
        lastName: car.lastName || '',
        avatar: car.avatar || '',
        dob: moment(car.dob).format('YYYY-MM-DDThh:ss') || '2022-10-23T18:40',
        role: car.role,
        // user: { key: car.user?.id || '', value: car.user?.id || '', },
    };
    const onSubmit = (values: IUserCreate) => {
        console.log(values, "===values===")
        setloading(true)
        const submit = id ? putUser : addUser
        return submit(values).then(() => {
            toast.success("success")
        }).catch(() => {
            toast.warn("error!")
        }).finally(() => setloading(false))
    }
    React.useEffect(() => {
        if (id) {
            setloading(true)
            getUserId(id).then((res: AxiosResponse<IUser>) => {
                setcar(res.data)
            }).catch(() => {
                toast.warn("error!")
            }).finally(() => setloading(false))
        }
    }, [])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik<IUserCreate>({
        enableReinitialize: id ? true : false,
        initialValues: initialValues,
        onSubmit: onSubmit,
    });

    return { formik, loading, users, car, initialValues }
}