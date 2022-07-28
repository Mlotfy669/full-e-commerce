import { Skeleton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './card'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { DoubleArrow } from '@mui/icons-material'


const SomeProducts = () => {
    const [somePdoducts, setSomePdoducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setSomePdoducts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Our <span>Products</span></h2>
            <Link to='shop' className={styles.showMore}>Show More <DoubleArrow className={styles.arrowIcon}/> </Link>
            <div className={styles.wrapper}>
                {loading ?
                    somePdoducts.slice(0,10).map((item) => (
                        <Skeleton
                            variant='rectangular'
                            width={184}
                            height={202}
                            animation='wave'
                        />
                    )) :
                    somePdoducts.slice(0,10).map((item ,index) => (
                        <ProductCard item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default SomeProducts