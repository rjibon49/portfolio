import { useEffect, useState } from "react"

const useProjects = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        fetch('https://api.npoint.io/1cefefaade9cc475e221')
        .then(res => res.json())
        .then(data => setProjectData(data))
    }, [])
    return [projectData]
}

export default useProjects;