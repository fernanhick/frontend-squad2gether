import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectService from '../../../services/project.service'

const Project = () => {
    const [project, setProject] = useState('')
    const params = useParams()
    useEffect(() => {
        ProjectService.getProjectById(params.id).then((res) => {
            setProject(res.data)
        })
    }, [])

    console.log(project);
    return (
        <div>{project.title}
        </div>
    )
}

export default Project
