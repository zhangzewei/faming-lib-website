import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import NewsPlat from '../NewsPlat';
import NoticePlat from '../NoticePlat';
import LoadPlat from '../LoadPlat';
import ShowPlat from '../ShowPlat';
import ButtonList from '../ButtonList'
import LinkList from '../LinkList'
import CarouselBox from '../CarouselBox'
import ImgSlid from '../ImgSlid'

import './index.css'

export default class HomePage extends Component {
  render (){
    return [
      <section key="section1" className="section1 section">
        <Row>
          <Col sm={{ span: 24 }} lg={{ span: 16 }}>
            <CarouselBox/>
          </Col>
          <Col sm={{ span: 24 }} lg={{ span: 8 }}>
            <NewsPlat />
          </Col>
        </Row>
      </section>,
      <section key="section2"  className='section2'>
        <div className='section2-header'></div>
      <Row>
          <Col sm={{ span: 24 }} lg={{ span: 5 }}>
            <LoadPlat />
          </Col>
          <Col sm={{ span: 24 }} lg={{ span: 11 }}>
            <ShowPlat/>
          </Col>
          <Col sm={{ span: 24 }} lg={{ span: 8 }}>
           <NoticePlat/>
          </Col>
          
        </Row>
      </section>,
      <section key="section3" >
        <ImgSlid/>
      </section>,
      <section key="section4" className='section4' >
        <Row> 
          <Col className='teamTitle' sm={{ span: 4 }} lg={{ span: 4 }}>创新团队</Col>
          <Col className='teamTitle-line'sm={{ span: 20 }} lg={{ span: 20 }}></Col>
        </Row>
        <Row>
            
            <Col sm={{ span: 24 }} lg={{ span: 16 }}>
              <ShowPlat/>
            </Col>
            <Col sm={{ span: 24 }} lg={{ span: 8 }}>
              <ButtonList />
            </Col>
            
          </Row>
          <Row>
            <Col sm={{ span: 48 }} lg={{ span: 24 }}>
              <LinkList/>
            </Col>
          </Row>
      </section>
    ];
  }
} 