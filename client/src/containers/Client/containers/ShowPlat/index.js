import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



import './style.css';

export default class ShowPlat extends Component {
    genShowList = ls => ls.map((item, index) => {
        if (index<3) {
          return (
            <Link to={item.link}>
              <li key={index} className="list-show">
                <img src={item.imgUrl} alt="暂时没有图片" className="list-showConentImg"/>
                <span className="list-showConent">{item.showConent}</span>
                <span className="news-more">更多>></span>
              </li>
            </Link>
          );
        }
        
      });
    
    render() {
        const list = [
           {imgUrl:'http://img.xinmin.cn/xmwb/2017/9/NEM1_20170920_C0322022662_A742789.jpg',showConent:'成都大学特色杂粮研究团队一直致力于特色杂粮的研究工作，主要围绕苦荞、藜麦、燕麦等特色杂粮的新品种选育、优质高产栽培、产品开发及精深加工与综合利用，以及药用功效评价等方面开展研究。',link:'/secondPage/news/LibMenu:lingdao/lingdao',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
           {imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527592151&di=106410ca4abfcc4fb076dc25dfcdfbee&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140710%2F0022005885803826_b.jpg',showConent:'实验室先后主持承担了科技部国际合作专项、国家自然科学基金、国家科技支撑计划、现代农业产业技术体系专项和四川省应用基础研究计划等40余项研究项目，年科研经费400余万元。与湖北劲牌保健酒业有限公司、四川环太实业有限责任公司等。',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
           {imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=213776902,2553591347&fm=27&gp=0.jpg',showConent:'现为农业部杂粮加工重点实验室主任，国家杂粮加工技术研发分中心主任，国家现代农业产业技术体系（燕麦荞麦）岗位科学家，成都荞麦产业化工程技术研究中心主任，中国农学会荞麦燕麦分会常务理事会副会长',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
           {imgUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1643936284,430120172&fm=27&gp=0.jpg',showConent:'实验室目前固定人员为36名，其中高级职称23人，拥有博士学位24人，享受国务院政府特殊津贴2人，国家产业岗位科学家2人，四川省产业岗位科学家2人，四川省有突出贡献的优秀专家1人，四川省学术与技术带头人2人，四川省学术与技术带头人后备人选6人，四川省食品安全专家2人。',link:'/secondPage/news/LibMenu:lingdao/lingdao'},
           {imgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3297658440,588875764&fm=27&gp=0.jpg',showConent:'成都大学特色杂粮研究团队一直致力于特色杂粮的研究工作，主要围绕苦荞、藜麦、燕麦等特色杂粮的新品种选育、优质高产栽培、产品开发及精深加工与综合利用，以及药用功效评价等方面开展研究。',link:'/secondPage/news/LibMenu:lingdao/lingdao'}
            
          ];


      return (
        <div className='showPlat'>
            <ul className='showPlat-ul'>
                {this.genShowList(list)}
            </ul>
        </div>
      )
    }
  }