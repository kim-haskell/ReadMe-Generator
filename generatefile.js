function renderBadge (license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return "";
}

function renderLink (license) {
    if (license !== "None") {
        return (`* [license](#license)`)
    }
    return "";
}

function renderSection (license) {
    if (license !== "None") {
        return (`## license: This project is licensed under ${license}`)
    }
    return "";
}

function generateFile (data) {
    return `# ${data.title} 
    ${renderBadge(data.license)}
    ## Description
    ${data.description} 
    ## Test
    To run the test, run the following command:
    ${data.test} 
    ## Questions
    If you have any questions about the repo, to report any issue, or you would like to collaborate, contact me 
    ${data.email}
    
    You can find more of my work at 
    ${data.gitHubUserName}`
}

module.exports = generateFile


//In between description and test add a table of content - installation, usage, contributing