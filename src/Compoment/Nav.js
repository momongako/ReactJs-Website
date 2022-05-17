import React, { Component } from 'react';
import CreatList from './CreatList';
import ListMember from './ListMember';
import Srearch from './Srearch';

class Nav extends Component {
    state = {
        listM :[
            {id :'1',namemember:'Maou',numberfone:'0966846718',Permission:'Admin'},
            {id :'2',namemember:'Mon',numberfone:'0966846999',Permission:'Modrator'},
            {id :'3',namemember:'Shin',numberfone:'0966846111',Permission:'Normal'},
            {id :'4',namemember:'Kami',numberfone:'0966846567',Permission:'Admin'}

        ],
        searchText:''
    }
    
    // EditList = (edit) =>{
    //     console.log('check edit :', edit)
    //     this.setState({
    //         listM : edit
    //     })
    // }
    DeleteListM =(todo) =>{
        let curredList = this.state.listM;
        curredList = curredList.filter(item => item.id !== todo.id)
        this.setState({
            listM : curredList
        })
    }
    addNewList=(event) =>{
        let addList = this.state.listM
        addList.push(event)
        this.setState({
            listM:addList
        })
    }
    onClickSreach =(sre)=>{
        this.setState({
            searchText : sre
        })
        console.log("Ojb : " , this.state.searchText)

    }
    // ShowListMember=()=>{
    //     let {listM} = this.state;
    //     return  listM.map((item,index)=>
    //         <ListMember  
    //         DeleteListM = {this.DeleteListM} 
    //         listM = {this.state.listM} 
            
    //          key={index} id = {item.id} namemember = {item.namemember} numberfone = {item.numberfone} Permission = {item.Permissions}
    //         />

    //      );
        
    // }
    render() {
        let ketqua = []
        this.state.listM.forEach((item)=>{
            if (item.namemember.indexOf(this.state.searchText)!== -1) {
                ketqua.push(item)
            }
        })  // indexOf tìm từ trùng vói searchText trong item.namemember có mặt khác -1
        console.log('ketqua',ketqua)
        return (
            <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">Quản lý thành viên</h1>
                    <p className="lead"></p>
                    <hr className="my-2" />
                </div>
            </div>
            {/* from list */}
            <div className="searchForm">
                <div className="container">
                    <div className="row">
                        <Srearch onClickSreach ={(sre)=>this.onClickSreach(sre)} listM = {this.state.listM} />
                        {/* {this.ShowListMember()} */}
                        <ListMember EditList = {(edit)=>this.EditList(edit)} DeleteListM = {this.DeleteListM} listM = {ketqua} />
                        <CreatList listM={this.state.listM} addNewList = {(event)=>this.addNewList(event)} />
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Nav;
