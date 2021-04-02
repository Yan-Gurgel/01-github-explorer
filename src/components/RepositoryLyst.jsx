import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Repositorio',
    description: 'descrição padrão',
    link: 'https://www.google.com.br/'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
            </ul>
        </section>
    );
}