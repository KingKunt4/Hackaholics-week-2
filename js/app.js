console.log('app.js loaded');
const burger = document.getElementById('burger');
const sideBar = document.getElementById('sidebar');
const year = document.getElementById('yearly');
const month = document.getElementById('monthly');
const cards = document.getElementById('cards');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    sidebar.classList.toggle('active');
});
document.querySelector('.search img').addEventListener('click', () => {
    document.querySelector('.search input').classList.toggle('open');
});
function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
function yearly(){
    year.style.backgroundColor = "var(--accent-color)";
    year.style.color = "white";
    month.style.backgroundColor = "transparent";   
    month.style.color =  "var(--text-color)";
    cards.classList.toggle('animate');
    document.getElementById('basic-price').innerHTML = "<strong>$109</strong>/year"; 
    document.getElementById('pro-price').innerHTML = "<strong>$216</strong>/year";
    document.getElementById('premium-price').innerHTML = "<strong>$432</strong>/year";
};
function monthly(){
    month.style.backgroundColor = "var(--accent-color)";
    month.style.color = "white";
    year.style.backgroundColor = "transparent";   
    year.style.color = "var(--text-color)";
    cards.classList.toggle('animate');
    document.getElementById('basic-price').innerHTML = "<strong>$10</strong>/year"; 
    document.getElementById('pro-price').innerHTML = "<strong>$20</strong>/year";
    document.getElementById('premium-price').innerHTML = "<strong>$40</strong>/year";
};

const chart = document.getElementById('chart');
new Chart(chart, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri'],
        datasets: [{
            label: 'User Count',
            data: ['124', '151', '199', '217', '241'],
            backgroundColor: ['#7c3aed']
        }]
    }
});
