import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as clientAction from '../../actions';
import NewsPlat from '../NewsPlat';
import NoticePlat from '../NoticePlat';
import LoadPlat from '../LoadPlat';
import ShowPlat from '../ShowPlat';
import ButtonList from '../ButtonList';
import LinkList from '../LinkList';
import CarouselBox from '../CarouselBox';
import ImgSlid from '../ImgSlid';

import './index.css';

const mapStateToProps = ({Client}) => {
  return {
    state: Client
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(clientAction, dispatch)
  }
}

class HomePage extends Component {
  componentDidMount() {
    this.props.actions.getHomePageNewsList();
  }
  render() {
    const { carousel, menus, homeNewsList: { tonggaoList, gongzuoList } } = this.props.state.toJS();
    return [
      <section key="section1" className="section1 section">
        <Row>
          <Col sm={{ span: 24 }} lg={{ span: 16 }}>
            <CarouselBox carousel={carousel} />
          </Col>
          <Col sm={{ span: 24 }} lg={{ span: 8 }}>
            <NewsPlat list={gongzuoList} />
          </Col>
        </Row>
      </section>,
      <section key="section2" className='section2'>
        <div className='section2-header'></div>
        <Row>
          <Col sm={{ span: 24 }} lg={{ span: 5 }}>
            <LoadPlat />
          </Col>
          <Col sm={{ span: 24 }} lg={{ span: 11 }}>
            <ShowPlat />
          </Col>
          <Col sm={{ span: 24 }} lg={{ span: 8 }}>
            <NoticePlat list={tonggaoList} />
          </Col>
        </Row>
      </section>,
      <section key="section3" >
        <ImgSlid />
      </section>,
      <section key="section4" className='section4' >
        <Row>
          <Col className='teamTitle' sm={{ span: 4 }} lg={{ span: 4 }}>创新团队</Col>
          <Col className='teamTitle-line' sm={{ span: 20 }} lg={{ span: 20 }}></Col>
        </Row>
        <Row>
          <Col sm={{ span: 24 }} lg={{ span: 16 }}>
            <ShowPlat />
          </Col>
          <Col sm={{ span: 24 }} lg={{ span: 8 }}>
            <ButtonList menus={menus} />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 48 }} lg={{ span: 24 }}>
            <LinkList />
          </Col>
        </Row>
      </section>
    ];
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)