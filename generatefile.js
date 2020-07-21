function renderBadge (license) {
    if (license !== "None") {
        return `![GitHub license] (https://img.shields.io/badge/license-${license}-blue.svg)`
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
    return `# ${data.projectName} 
    ${renderBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
        *Installation
        *Usage
        *License
        *Contributing
        *Tests
        *Questions
    ## Installation Instructions:
    ${data.installation}
    ## Usage:
    ${data.usage}
    ## Contribution Guidelines:
    ${data.contribution}
    ## Test
    To run the test, run the following command:
    ${data.test} 
    ## Questions
    If you have any questions about the repo, to report any issue, or you would like to collaborate, contact me at:
    ${data.email}
    
    You can find more of my work at: 
    ${data.gitHubUserName}`
}

module.exports = generateFile


