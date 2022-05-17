import React, { Component } from 'react';

class CreatList extends Component {
     state = {
        namemember:'',
        numberfone:'',
        Permission:''
     }
     onChangeName = (event) =>{
        
         this.setState({
             namemember :event.target.value
         })
     }
     onChangePhone = (event)=>{
         this.setState({
             numberfone:event.target.value
         })
     }
     onChangePermission = (event)=>{
         this.setState({
            Permission : event.target.value
         })
     }
     onClickCreat = () =>{
         console.log('Check State : ', this.state)
         if (!this.state.namemember || !this.state.numberfone || !this.state.Permission) {
             alert('Error')
             return;
         }
         this.props.addNewList({
            id: Math.floor(Math.random() * 1001),
            namemember: this.state.namemember,
            numberfone:this.state.numberfone,
            Permission : this.state.Permission
         })
         this.setState({
             namemember:'',
             numberfone:'',
             Permission:''
         })
     }
    render() {
    
        return (
            <div className="col-3">
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Thêm mới</div>
                        <div className="card-body text-primary">
                            <h5 className="card-title">Tên User</h5>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.namemember} onChange={(event)=>this.onChangeName(event)} placeholder="Tên" />                      
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.numberfone} onChange={(event)=>this.onChangePhone(event)} placeholder="Tel" />                             
                            </div>
                            <div className="form-group">
                                <select className="custom-select" onChange={(event)=>this.onChangePermission(event)} >
                                <option>Quyền</option>
                                <option value={'Admin'}>Admin</option>
                                <option value={'Modrator'}>Modrator</option>
                                <option value={'Normal'}>Normal</option>
                                </select>                            
                            </div>
                                <div className="btn btn-block btn-primary" onClick={()=>this.onClickCreat()} >Thêm mới</div>
                        </div>
                </div>
            </div>

        );
    }
}

export default CreatList;
