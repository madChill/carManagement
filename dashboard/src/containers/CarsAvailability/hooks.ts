/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import debounce from 'lodash/debounce';
import { AxiosResponse } from 'axios'
import { getCars, deleteCar } from '../../utils/request'
import { IGetResult } from '../../utils/types/resultGet'
import { IGetQuery } from '../../utils/types/getQuery'
import { ICarItem } from '../../utils/types/carsItem'
export const uselogicForm = () => {
    const [loading, setloading] = useState<boolean>(false);
    const [query, setquery] = useState<IGetQuery&{reload?: string}>({});
    const [scans, setscans] = useState<ICarItem[]>([]);
    const [total, settotal] = useState<number>(0);
    const [search, setSearch] = useState<ICarItem>();
    const setsearch = debounce(val => setSearch({...search, ...val}), 1000);
    useEffect(() => {
        setloading(true)
        getCars({...query, ...search}).then((rawData: AxiosResponse<IGetResult<ICarItem>>) => {
            // toast.success("success")
            setscans(rawData.data.data)
            settotal(rawData.data.total || 0)
        }).catch(() => {
            toast.warn("error!")
        }).finally(() => setloading(false))
    }, [query, search])
    const setPage = (page: number) => {
        setquery({ ...query, offset: (page - 1) * 10 })
    }
    const onDelete = (id?: string) => {
        if (id) {
            setloading(true)
            deleteCar(id).then(() => {
                toast.success("success")
                setquery({...query, reload: (new Date).toString()})
            }).catch(() => {
                toast.warn("error!")
            }).finally(() => setloading(false))
        }

    }
    // const getlistUsers = () => {
    //     setloading(true);
    //     Api.getUsers({ page })
    //       .then(data => {
    //         setlistUsers(data)
    //         // history.push(ROUTE.form1);
    //         // setoffers(sortBy(data, 'order'));
    //       })
    //       .catch(error => {
    //         // seterror1(error.response?.data?.description);
    //       })
    //       .finally(() => setloading(false));
    //   };

    return { loading, setPage, scans, total, query, onDelete, setsearch }
}