import React, { Component } from 'react';
// import Buttoncreat from './ButtonCreat';

class ListMember extends Component {
    state ={
        // show : false,
        listTodo:{}
        
    }
    // isChange = (event)=>{
    //      this.setState({
    //          namemember : event.target.value
    //      })
    //     console.log(event.target)
    // }
    ListDelete = (namemember)=>{
        console.log('Ok Delete' , namemember)
        this.props.DeleteListM(namemember);
    }
    // ListCreat = (event) =>{
        
    //     console.log('check creat :',event)
        
    // }

    // ButtonCreatOne = () =>{
        
    //     return <div className="btn btn-warning sua" onClick={()=>this.HideAndShow()} ><i className="fa fa-edit "> </i>Sửa</div>

    // }
    
//     ButtonCreatTwo = () =>{
       
//        return   <div>
//                     <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} defaultValue={(event)=>this.isChange(event)}  placeholder="Tên" />
//                     <input type="text" className="form-control" value={this.props.numberfone}  placeholder="Tel" />                             
                
//                     <select className="custom-select" value={this.props.Permission} >
//                         <option>Quyền</option>
//                         <option value={'Admin'}>Admin</option>
//                         <option value={'Modrator'}>Modrator</option>
//                         <option value={'Normal'}>Normal</option>
//                     </select> <div className="btn btn-warning sua" onClick={()=>this.HideAndShow()} ><i className="fa fa-save "> </i>save</div>
//                 </div>
    
// //    return this.props.ketqua.map((item,index)=>(
// //         <Buttoncreat HideAndShow = {(user)=>this.HideAndShow(item)} key= {index} />
// //     ))
//     }
    
    // showButtonCreat=() =>{
    //     if (this.state.show===false) {
    //         return this.ButtonCreatOne();
    //     }else{
    //         return this.ButtonCreatTwo();
    //     }
    // }
    ListCreat =(user)=>{
        let {listM} = this.props;
        let {listTodo} = this.state;
        let isEmptyObj = Object.keys(listTodo).length === 0;

        if (isEmptyObj === false && listTodo.id === user.id) {
            let listCopy = [...listM]

            let objIndex = listCopy.findIndex((item => item.id === user.id));

            //Log object to Console.

            //Update object's name property.
            listCopy[objIndex].namemember = listTodo.namemember;
            listCopy[objIndex].numberfone = listTodo.numberfone;
            listCopy[objIndex].Permission = listTodo.Permission;


            this.setState({
                listM:listCopy,
                listTodo:{}
            })
            return;
        }
        this.setState({
            listTodo : user,
        })
        
    }
    
   
    editnamemember = (event) =>{
        let editCopy = {...this.state.listTodo};
        editCopy.namemember = event.target.value;
        this.setState({
            listTodo : editCopy
        })

    }
    editnumberfone = (event) =>{
        let editCopy = {...this.state.listTodo};
        editCopy.numberfone = event.target.value;
        this.setState({
            listTodo : editCopy
        })

    }
    editPermission = (event) =>{
        let editCopy = {...this.state.listTodo};
        editCopy.Permission = event.target.value;
        this.setState({
            listTodo : editCopy
        })

    }
    render() {
        console.log('check show:',this.state.show)
        console.log('list state To Nav : ' , this.props.listM)
        // console.log('check Permission : ',this.props.listM)
        let{listM} = this.props;
        let {listTodo} = this.state;
        let isEmptyObj = Object.keys(listTodo).length === 0;
        console.log('check isEmtyObj true and false : ',isEmptyObj)

        return (
            
            <div className="col-9">
                
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th scope="col">STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                          
                            {listM.map((item,index)=>{
                                
                                return(
                                    
                                    <tr key={item.id} >
                                        {isEmptyObj === true ?
                                            <>
                                            <td>{index +1}</td>
                                            <td>{item.namemember}</td>
                                            <td>{item.numberfone}</td>
                                            <td>{item.Permission}</td>
                                            </>
                                        :
                                        <>
                                            {listTodo.id === item.id ?
                                                <>
                                                    <td>{index +1}</td>
                                                    <td><input onChange={(event)=>this.editnamemember(event)} value={listTodo.namemember} /></td>
                                                    <td><input onChange={(event)=>this.editnumberfone(event)} value={listTodo.numberfone}/></td>
                                                    <td><select className="custom-select" value={listTodo.Permission} onChange={(event)=>this.editPermission(event)} >
                                                            
                                                            <option value={'Admin'}>Admin</option>
                                                            <option value={'Modrator'}>Modrator</option>
                                                            <option value={'Normal'}>Normal</option>
                                                        </select></td>
                                                </>
                                                :
                                                <>
                                                    <td>{index +1}</td>
                                                    <td>{item.namemember}</td>
                                                    <td>{item.numberfone}</td>
                                                    <td>{item.Permission}</td>
                                                </>
                                            }
                                        </>
                                            
                                        }

                                        <td>
                                            <div className="btn-group">

                                                <div className="btn btn-warning sua" onClick={()=>this.ListCreat(item)} >
                                                    <i className="fa fa-edit "> </i>
                                                    {isEmptyObj === false && listTodo.id === item.id ?
                                                        'Lưu':'Sửa'
                                                    } 
                                                </div>
                                                {/* {this.showButtonCreat()} */}
                                                <div className="btn btn-danger sua" onClick={()=>this.ListDelete(item)} ><i className="fa fa-delete " />Xóa</div>
                                            </div>
                                        </td>



                                    </tr>
                                
                                )
                            })}
                        
                    </tbody>
                </table>
            </div>

        );
    }
}

export default ListMember;
