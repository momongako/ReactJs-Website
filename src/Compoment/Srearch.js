import React, { Component } from 'react';

class Srearch extends Component {
    state = {
        listSreach : {},
        temvalue:''
    }
    // onChangeSearch = (event) =>{
    //     // let sreachCopy = {...this.state.listSreach}
    //     // sreachCopy.namemember = event.target.value;
    //     // this.setState({
    //     //     listSreach : sreachCopy
    //     // })
    //     this.setState({
    //         temvalue : event.target.value
    //     })

    // }
    // buttonSreach = (todo) =>{
    //     this.setState({
    //         listSreach : todo
    //     })
        
    // }
    onChangeSearch = (event) =>{
        console.log('check sreach : ', event.target.value)
        this.setState({
            temvalue : event.target.value
        })
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event)=>this.onChangeSearch(event)} placeholder="Nhập từ khóa" style={{width: '500px'}} />
                        <div className="btn btn-info" onClick={(sre)=>this.props.onClickSreach(this.state.temvalue)}>Tìm</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Srearch;
