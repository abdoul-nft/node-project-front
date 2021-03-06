import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:5000'//`${process.env.VUE_APP_API_URL}`

export default new Vuex.Store({
  state: {
    profile: {
        name: "ZAKARI",
        surname: "Abdoul",
        birthDay: new Date(1995, 6, 7),
        startDescription: "Hello I’m Abdoul",
        description:
            ", a full stack developer and #OpenSource enthusiast with industry experience building websites and web applications. I specialize in UI, UX, Node.js, Vue.js and tailwindcss! ",
    },
    technologies: {
        programming:  [
            { name: "HTML & (S)CSS", level: 95 },
            { name: "PHP", level: 95 },
            { name: "Python", level: 75 },
            { name: "Javascript (ES6)", level: 95 },
            { name: "Java & JavaEE", level: 90 , },
            { name: "Java for Android", level: 80 , },
            { name: "Typescript", level: 60 }
        ],
        frameworks: [
            { name: "Vue.js & Nuxt.js", level: 90 },
            { name: "Tailwind.css", level: 90 },
            { name: "AngularJS / Angular2+", level: 80 },
            { name: "Bootstrap", level: 80 },
            { name: "Laravel", level: 90 },
            { name: "Fluter", level: 70 },
            { name: "React Native", level: 70 },
            { name: "Node.js & Express.js", level: 70 },
        ],
        tools:[
            { name: "git" },
            { name: "SVN" },
            { name: "Gradle" },
            { name: "Maven" },
            { name: "Webpack" },
            { name: "Netlify" },
            { name: "Wordpress" }
        ]
    },
    projects: [{
        
        name: "Wappy",
        description: "Vue3 and WindiCSS, Import your WhatsApp chat to view cool stats!.",
        link: "https://github.com/UnevenSoftware/Wappy",
        icon: ['fab', 'whatsapp'],
        startDate: "2021",
        endDate: "Present",
        developer: "UnevenSoftware",
        tags: [
            { name: "#opensource" },
            { name: "#whatsapp" },
            { name: "#web" },
            { name: "#vue" }
        ]
    },{
        
        name: "Vue Instagram Stories",
        description: "Vue2 and Vue3 library for Instagram stories.",
        link: "https://github.com/UnevenSoftware/vue-insta-stories",
        icon: ['fab', 'instagram'],
        startDate: "2021",
        endDate: "Present",
        developer: "UnevenSoftware",
        tags: [
            { name: "#opensource" },
            { name: "#lib" },
            { name: "#npm" },
            { name: "#vue" }
        ]
    },{

        name: "LeafPic Gallery",
        description: "LeafPic is a fluid, material-designed alternative gallery, it also is ad-free and open source under GPLv3 license. I worked as the major designer in this project, I designed and implemented features such as photo affix.",
        link: "https://github.com/HoraApps/LeafPic",
        icon: "leaf",
        startDate: "Jan 7, 2016",
        endDate: "Present",
        developer: "UnevenSoftware",
        tags: [
            { name: "#opensource" },
            { name: "#android" },
            { name: "#app" },
            { name: "#gallery" }
        ]
    }, {
        name: "portfolio",
        description: "Portfolio made with Vue.js and Tailwind css! This portfolio is open source and you can find it on Github!",
        link: "https://github.com/gilnd/portfolio",
        icon: "address-card",
        startDate: "Sep 20, 2019",
        endDate: "Present",
        developer: "gilbert",
        tags: [
            { name: "#opensource" },
            { name: "#vue" },
            { name: "#tailwindcss" },
            { name: "#portfolio" }
        ]
    },{
        name: "adbFI",
        description: "abdFi is an Android app that lets you debug Android apps over Wi-Fi, without the cable connected to your PC!",
        link: "https://github.com/gilnd/adbFI",
        icon: "wifi",
        startDate: "Sep 20, 2019",
        endDate: "Present",
        developer: "gilbert",
        tags: [
            { name: "#opensource" },
            { name: "#android" },
            { name: "#adb" }
        ]
    }
    ], events: [
        { 
            name: "Across ",
            description: "I work in this company as a frontend developer, I mostly use VueJS, TailwindCSS & Laravel!",
            role: "FrontEnd Developer ",
            type: "Work",
            startDate: "Mar 2021",
            endDate: "Present",
            roles:[
                {description:" Developed and maintained back office Dashboards with VueJSf." }
            ]
        },
        { 
            name: "NTT Data ",
            description: "I work in this company as a fullstack developer, I mostly use JavaEE with Spring Boot and Angular for frontend!",
            role: "Full Stack Developer ",
            type: "Work",
            startDate: "Nov 2019",
            endDate: "Mar 2021",
            roles:[
                {description:" Improved and maintained ANGULAR 2 CUSTOM FRAMEWORK following UI and UX guidelines given by Intesa SanPaolo." },
                {description:" Developed and maintained a back office payment webapp with Angular2 for Intesa SanPaolo." },
                {description:" Developed features and maintained web applications used by italian public administration." },
                {description:" Migrated from mongoDB v3 to mongoDB v4 , updated to the latest libraries and maintained an insurance engine for Intesa SanPaolo Assicura." }
            ]
        },
        { 
            name: "Xtphere S.r.l.",
            description: "Xtphere Srl is a company which carries out innovative solutions for Web & Digital Technology, Mobile Experience, Document Process Management, Big Data and Cloud Migration.",
            role: "Full Stack Developer ",
            type: "Work",
            startDate: "Jun 2018",
            endDate: "Nov 2019",
            roles:[
                {description:" Developed features and maintained an insurance engine, made with JavaEE & AngularJS for Intesa SanPaolo Assicura." },
                {description:" Migrated projects from old Libraries & tools to new ones and improved general performance." },
                {description:" Interfaced with Miroglio Group on a monthly basis providing help and support for new features and improvements." },
                {description:" Developed, tested and maintained cross platform web applications that work on various devices and browsers es: bigEYE."}
            ]
        }, { 
            name: "Edisoft S.r.l.",
            description: "Edisoft Srl is a small web agency specialized in development of websites & web applications, it also offers high quality graphic design, online advertising and SEO optimization. ",
            role: "Front End Developer ",
            type: "Work",
            startDate: "Gen 2017",
            endDate: "Jun 2017",
            roles:[
                {description:" Maintained E-Commerce website and added new features, with Wordpress." },
                {description:" Developed and maintained code for client websites, mostly using HTML, CSS, Javascript, Jquery & PHP." },
            ]
        }, { 
            name: "IIS G.Vallauri ",
            description: " ",
            role: "Student",
            type: "education",
            startDate: "Sep 2010",
            endDate: "Jun 2016",
            roles:[
                { description:" In depth learning of OOP programing with C#. " },
                { description:" In depth learning of HTML, CSS, JS & Jquery. " },
                { description:" Learned basics of development of C & C++." },
                { description:" Learned basics of networks and their structure. " }
            ]
        }
    ], socials: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/abdoul-zakari-0b014a19a",
            icon: "linkedin" 
        }, {
            name: "Github",
            link: "https://github.com/Abdoul-wahab/",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/AW_ZAKARI",
            icon: "twitter" 
        }, {
            name: "instagram",
            link: "https://www.instagram.com/invites/contact/?i=18bx2m67o3b44&utm_content=1182dcd",
            icon: "instagram" 
        },
    ],

    //Auth informations
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
},

    getters: { age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials,

        // Auth informations
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'v1/auth/login', data: user, method: 'POST' })
                .then(resp => {
                    const user = resp.data.user
                    // const token = resp.data.access_token
                    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMwMTM3OTQ4MjFjNDg1MDNkYjU4NjUiLCJlbWFpbCI6InRlc3RAbWFpbC5mciIsImZpcnN0bmFtZSI6ImFiZG91bCIsImxhc3RuYW1lIjoiWkFLQVJJIiwibGFzdENvbm5lY3Rpb24iOiIyMDIxLTA2LTA5VDAxOjAyOjAyLjE0OFoiLCJleHBpcmVJbiI6IjVzIiwiZXhwIjoxNjI4NDEwMjIwNiwiaWF0IjoxNjIzMzEyNjIwfQ.17BUr0OaPMDHcD57DViJx_RsJSL27Xr8Rk2QgUwpqMw'
                    console.log(resp.data.access_token)
                    console.log(token)
                    // console.log(resp.data['access_token'])
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
                    commit('auth_success', token, user)
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
            })
        },
    
        register({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'v1/auth/register', data: user, method: 'POST' })
                .then(resp => {
                    const user = resp.data.user
                    // const token = resp.data.access_token
                    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMwMTM3OTQ4MjFjNDg1MDNkYjU4NjUiLCJlbWFpbCI6InRlc3RAbWFpbC5mciIsImZpcnN0bmFtZSI6ImFiZG91bCIsImxhc3RuYW1lIjoiWkFLQVJJIiwibGFzdENvbm5lY3Rpb24iOiIyMDIxLTA2LTA5VDAxOjAyOjAyLjE0OFoiLCJleHBpcmVJbiI6IjVzIiwiZXhwIjoxNjI4NDEwMjIwNiwiaWF0IjoxNjIzMzEyNjIwfQ.17BUr0OaPMDHcD57DViJx_RsJSL27Xr8Rk2QgUwpqMw'
                    localStorage.setItem('token', token)
                    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
                    commit('auth_success', token, user)
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token') 
                    reject(err)
                })
            })
        },
    
        logout({commit}){
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    }
});
