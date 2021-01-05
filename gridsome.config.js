// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "ACBT",
    icon: "./src/logo.svg",
    titleTemplate: ` %s — Construção e engenharia`,
    siteDescription: 'O lugar para todas as suas necessidades de construção e engenharia. ACBT é um escritório de arquitetura com muitos anos no setor de construção em Angola. Envie-nos um e-mail para que possamos trabalhar juntos em seu próximo projeto! ',
    siteUrl: 'https://www.acbt.co.ao/',
    author: 'ACBT — Antonio Crespo Bessa Texeira',
    metadata: {
        twitter: {
            site: '@VivaLoSousa',
            creator: '@VivaLoSousa'
        }
    },
    plugins: [{
        use: "gridsome-plugin-tailwindcss",

        options: {
            tailwindConfig: "./tailwind.config.js",
            presetEnvConfig: {},
            shouldImport: true,
            shouldTimeTravel: true,
        },
    }, {
        use: '@gridsome/plugin-sitemap',
        options: {
            exclude: ['/privacy', '/legal']
        }
    }]
}