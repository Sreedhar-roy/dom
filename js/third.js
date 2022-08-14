const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML=`
    <h1>My daynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>dynamic first items </li>
        <li>dynamic first items </li>
        <li>dynamic first items </li>
        <li>dynamic first items </li>
        <li>dynamic first items </li>
    </ul>
`
main.appendChild(section);