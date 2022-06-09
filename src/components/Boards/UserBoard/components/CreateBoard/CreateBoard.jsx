import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import "./styles.css";
const required = (value) => {
    if (!value) {
        <div className="alert alert-danger">This field is required!</div>;
    }
};
const CreateBoard = () => {
    const form = useRef();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [members, setMembers] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCreate = () => {};
    const handleOnchangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };

    return (
        <section className="create-board-section">
            <div className="create-form">
                <h1>New Project Post</h1>
                <Form
                    className="d-flex flex-column "
                    onSubmit={handleCreate}
                    ref={form}
                >
                    <div className="form-group d-flex">
                        <label htmlFor="title">Title</label>
                        <Input
                            type="text"
                            name="title"
                            value={title}
                            onChange={handleOnchangeTitle}
                            validations={[required]}
                        />
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default CreateBoard;
