import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../Home/SomeProducts/card'
import styles from './index.module.scss'


const ProductsContainer = ({ data, handleSorting,handleSearch,openfilterRes }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.search_sort}>
        <div className={styles.searchContainer}>
          <input type="search" placeholder='Search By Product Name ...' onChange={handleSearch} />
        </div>
        <div className={styles.sortContainer}>
          <span className={styles.title}>Sort By :</span>
          <select defaultValue="sort" onChange={handleSorting}>
            <option value="sort" disabled selected>sort</option>
            <option value="default">Default</option>
            <option value="asce">Asce</option>
            <option value="desc">Desc</option>
            <option value="cheap">Cheap</option>
            <option value="expensive">Expensive</option>
            <option value="low-rate">Low Rate</option>
            <option value="high-rate">High Rate</option>
          </select>
        </div>
        <div className={styles.filterRes}>
          <button onClick={openfilterRes}>
            <img src="./assets/images/filter.png" />
          </button>
        </div>
      </div>
      {data.length === 0 ?
        <img className={styles.notFound} src='./assets/images/notFound.png' />
        :
        <div className={styles.wrapper}>
          {loading ?
            data.map((item) => (
              <Skeleton
                variant='rectangular'
                width={184}
                height={202}
                animation='wave'
              />
            )) :
            data.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))
          }
        </div>}
    </div>
  )
}

export default ProductsContainer