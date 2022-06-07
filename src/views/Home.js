import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        // await fetch(`${process.env.HACKADAY_API_URL}projects?api_key=${process.env.HACKADAY_API_KEY}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         projects = res.projects;
        //     })
        
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/project/2" data-link>View project 2</a>.
            </p>
        `;
    }
}