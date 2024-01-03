import html from './app.html?raw';
/**
 * 
 * @param{String} elementId 
 * 
 * */ 

export const App = (elementId) => {

    //when call the function APP()
    (() => {
        const app = document.createElement('div');
        app.innerHTML =html;
        document.querySelector(elementId).append(app);
    })();
}