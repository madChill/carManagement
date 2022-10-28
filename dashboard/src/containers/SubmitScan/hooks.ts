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
export const uselogicForm = () => {
    const [loading, setloading] = useState<boolean>(false);
    const [users, setusers] = useState<IUser[]>([]);
    const [car, setcar] = useState<ICarItem>({});
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);
    const id = search.get('id');

    const initialValues: ICarItemCreate = {
        id: car.id,
        brand: car.brand || '',
        build: car.build || '',
        dayPrice: car.dayPrice || '2.3',
        loc: car.loc || '',
        mode: car.mode || '',
        startDate: moment(car.startDate).format('YYYY-MM-DDThh:ss') || '2022-10-23T18:40',
        endDate: moment(car.endDate).format('YYYY-MM-DDThh:ss') || '2022-10-23T18:40',
        // user: { key: car.user?.id || '', value: car.user?.id || '', },
        user: car.user?.id || '',
        available: car.available,
        ava: car.ava,
    };
    const onSubmit = (values: ICarItemCreate) => {
        setloading(true)
        const submit = id ? putCar : addCar
        return submit(values).then(() => {
            toast.success("success")
        }).catch(() => {
            toast.warn("error!")
        }).finally(() => setloading(false))
    }
    React.useEffect(() => {
        if (id) {
            setloading(true)
            getCarId(id).then((res: AxiosResponse<ICarItem>) => {
                setcar(res.data)
            }).catch(() => {
                toast.warn("error!")
            }).finally(() => setloading(false))
        }
        getUsers({}).then((res: AxiosResponse<IGetResult<IUser>>) => {
            const convertUser = res.data?.data?.map(i => ({ ...i, key: i.id, text: (i?.firstName + i?.lastName) || '', value: i.id }))
            return setusers(convertUser);
        }).catch(() => {
            toast.warn("error!")
        }).finally(() => setloading(false))
    }, [])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formik = useFormik<ICarItemCreate>({
        enableReinitialize: id ? true : false,
        initialValues: initialValues,
        onSubmit: onSubmit,
    });

    return { formik, loading, users }
}