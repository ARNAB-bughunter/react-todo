function Task(props){
    return <>

        <div className="input-group gap-3">
        <li style={{backgroundColor: "lightblue"}} type="text" className="form-control " disabled >{ props.value }</li>
        <button className="btn btn-danger " type="button" onClick={ ()=>{props.sendData(props.id)} }><i className="fas fa-trash"></i></button>
        </div>
        <br></br>

    </>
}

export default Task;