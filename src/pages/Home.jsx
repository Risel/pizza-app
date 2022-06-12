import React, {useContext, useEffect, useState} from 'react'
import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import {SearchContext} from "../App"
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";
import {useNavigate} from 'react-router'
import axios from "axios";

const Home = () => {
  const categoryId = useSelector(state => state.filter.categoryId);
  const sortType = useSelector(state => state.filter.sortProperty)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const {searchValue} = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // const sortBy = sortType.replace('-', '');
    // const order = sortType.includes('-') ? 'asc' : 'desc';
    // const category = categoryId > 0 ? `category=${categoryId}` : '';
    // const search = searchValue ? `&search=${searchValue}` : '';
    // const currentPage = 1;
    axios.get(
      `https://62920cd59d159855f084b5e0.mockapi.io/pizzas`
    ).then(res => {
      setItems(res.data)
      setIsLoading(false)
    })
  }, [categoryId, sortType, searchValue]);

  // useEffect(() => {
  //   const params = {categoryId: categoryId > 0 ? categoryId : null, sortType};
  //   const queryString = qs.stringify(params, {skipNulls: true})
  //   navigate(`/?${queryString}`)
  // }, [categoryId, sortType, searchValue])
  // useEffect(() => {
  //   const params = qs.parse(window.location.search.substring(1));
  //   dispatch(setFilters(params));
  // })
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
            : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza}/>)
        }
      </div>
    </>
  )
}

export default Home