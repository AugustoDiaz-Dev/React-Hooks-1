import React from 'react'
import { FaGithubAlt } from 'react-icons/fa'

const Footer = () => {

    const current = new Date();
    const date = `
    ${current.getDate()}-
    ${current.getMonth() + 1}-
    ${current.getFullYear()}
    `;

    return (
        <footer>
            <a href="https://github.com/AugustoDiaz-Dev">
                <FaGithubAlt size={32} color=" #61dafb" />&nbsp;
                Augusto Diaz &nbsp;{date}
            </a>
        </footer>
    )
}

export default Footer