import {useNavigate} from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
    const navigate = useNavigate();

    function CreatePost(project) {
        // Inicializando cost e services

        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            // redirecionando

            navigate("/projects", {message: "Projeto criado com sucesso!"});
        })
        .catch(err => console.log(err))
    };

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={CreatePost} btnText="Criar"/>            
        </div>
    );
};

export default NewProject;