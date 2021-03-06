import React, { useEffect, useState } from 'react';
import {
  RoutesContainer,
  RoutesWrapper,
  RoutesRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
  TextWrapper,
  Name,
  City,
} from './SugRoutesElements';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const SugRoutes = () => {
  function handleSugRoutes(data) {
    return (
      <RoutesWrapper key={data.id}>
        <RoutesRow id={data.id}>
          <Column1>
            <ImgWrap>
              <Img src='https://source.unsplash.com/random?portugal' alt='' />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrapper>
              <Name to={'/sugroute/id=' + data.id}>{data.name}</Name>
              <City>{data.city}</City>
            </TextWrapper>
          </Column2>
        </RoutesRow>
      </RoutesWrapper>
    );
  }

  const [sugRoutesData, setSugRoutesData] = useState([]);

  useEffect(() => {
    if (sugRoutesData.length === 0) {
      handleStart();
    }
  }, [sugRoutesData]);
  const history = useHistory();

  const handleStart = () => {
    if (Cookies.get('token')) {
      axios.get('http://localhost:3000/sugesteditineraries').then((res) => {
        setSugRoutesData(res.data);
      });
    } else {
      history.push('/signin');
    }
  };

  return (
    <>
      <RoutesContainer id='places'>
        {sugRoutesData.map((route) => handleSugRoutes(route))}
      </RoutesContainer>
    </>
  );
};

export default SugRoutes;
