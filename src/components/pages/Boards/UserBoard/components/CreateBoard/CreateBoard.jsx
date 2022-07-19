import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import CheckButton from "react-validation/build/button";

import "./styles.css";
import ProjectService from '../../../../../../services/project.service';

/* const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger">This field is required!</div>
        )
    }
}; */
const CreateBoard = () => {

    const form = useRef();
    const checkBtn = useRef()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [members, setMembers] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [successfull, setSuccessfull] = useState(false);
    const [message, setMessage] = useState('')

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
    const handleChangeDesc = (e) => {
        const desc = e.target.value
        setDescription(desc)
    }

    const handleSubmitCreate = (e) => {
        e.preventDefault()
        setMessage('')
        setSuccessfull(false);
        form.current.validateAll()
        /*  if (checkBtn.current.context._errors.length === 0) { */

        ProjectService.createProject(title, members, technologies, description).then((response) => {
            setTitle('')
            setMembers('')
            setTechnologies('')
            setDescription('')
            setSuccessfull(true);


        }, (error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            setSuccessfull(false);
            setMessage(resMessage)
        })


    }


    return (
        <div className="create-board-section">
            <div className="create-form">
                <h5>New Project</h5>
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
                            /*     validations={[required]} */ required={true}

                            />
                            <label htmlFor="members">Members</label>
                            <Input type='text' name='members' value={members} onChange={handleChangeMember} /* validations={[required]} */ required={true}

                            />
                            <label htmlFor="technologies">Technologies</label>
                            <Input type='text' name='technologies' value={technologies} onChange={handleChangeTech} /* validations={[required]} */ required={true}

                            />
                        </div>
                        <div className="form-group d-flex flex-column form-group-wrapper">
                            <label htmlFor="description" >Description</label><Textarea type='text' cols="23" rows="3" name='description' value={description} onChange={handleChangeDesc} /* validations={[required]} */
                                required={true}
                                style={{ minWidth: '310px', minHeight: '17vh' }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-block btn-light btn-submit' styles={{ left: '0px' }}>Create</button>
                    </div>


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
                    )}    <CheckButton
                        style={{ display: "none" }}
                        ref={checkBtn}
                    />
                </Form>
            </div>
        </div>
    );
};

export default CreateBoard;
