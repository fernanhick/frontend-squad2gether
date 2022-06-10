import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import "./styles.css";
import ProjectService from '../../../../../services/project.service';
import AuthService from '../../../../../services/auth.service';
const required = (value) => {
    if (!value) {
        <div className="alert alert-danger">This field is required!</div>;
    }
};

const CreateBoard = () => {
    const form = useRef();
    const checkBtn = useRef()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [members, setMembers] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [successfull,setSuccessfull] = useState(false);
    const [message, setMessage] = useState('')
    const currentUser = AuthService.getCurrentUser()
    console.log(currentUser.accessToken);

    const handleOnchangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };
    const handleChangeMember = (e) => {
        const member = e.target.value
        setMembers(member)
    }
    const handleChangeTech = (e) => {
        const tech = e.target.value
        setTechnologies(tech)
    }
    const handleChangeDesc = (e)=>{
        const desc = e.target.value
        setDescription(desc)
    }

    const handleSubmitCreate = (e)=>{
        e.preventDefault()
        setMessage('')
        setSuccessfull(false);
        form.current.validateAll()
        if (checkBtn.current.context._errors.length === 0) {
             ProjectService.createProject( title, members, technologies,  description ).then((response)=>{
                 window.location.reload()
                 setSuccessfull(true);

             }, (error)=>{
                 const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                 setSuccessfull(false);
                 setMessage(resMessage)
             })           
        }else{
            setSuccessfull(false);
        }

    }

    return (
        <section className="create-board-section">
            <div className="create-form">
                <h1>New Project</h1>
                <Form
                    className="d-flex flex-row form-container"
                    onSubmit={handleSubmitCreate}
                    ref={form}
                >
                    <div className="form-wrap d-flex">
                    <div className="form-group d-flex flex-column form-group-wrapper ">
                        <label htmlFor="title">Title</label>
                        <Input
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleOnchangeTitle}
                            validations={[required]}
                        />
                        <label htmlFor="members">Members</label>
                        <Input type='text' name='members' value={members} onChange={handleChangeMember} />
                        <label htmlFor="technologies">Technologies</label>
                        <Input type='text' name='technologies' value={technologies} onChange={handleChangeTech}></Input>
                    </div>
                    <div className="form-group d-flex flex-column form-group-wrapper">
                        <label htmlFor="description" >Description</label><textarea type='text' cols="23" rows="3" name='description' value={description} onChange={handleChangeDesc} style={{minWidth:'310px', minHeight:'17vh'}}/>
                    </div>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-block btn-light btn-submit' styles={{left:'0px'}}>Create</button>
                    </div>
                  
                     <CheckButton
                            style={{ display: "none" }}
                            ref={checkBtn}
                        />
                </Form>
                {message && (
                        <div className="form-group">
                        <div
                                    className={
                                        successfull
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {message}
                                </div>
                        </div>
                    )}
            </div>
        </section>
    );
};

export default CreateBoard;
